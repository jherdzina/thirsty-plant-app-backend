import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/plants.js'


dotenv.config();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
 });

const corsOptions ={
    origin:'http://localhost:5001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


app.use(express.static('public'))

app.use('/', router);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGO_URI;

console.log(`my uri is: ${URI}`)
mongoose.connect(`${URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



//module.exports.Plants = require('./controllers/models/plants')
//mongoose.set('useFindAndModify', false)  