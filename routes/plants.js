import express from 'express';
// import * as api from '../frontend/src/api/index.js';

const router = express.Router();

router.get('/plants', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader( "Access-Control-Request-Methods", "*" ); 
    res.send({
        "plantName": "pothos",
        "wateredDate": "blah/22"
    });
});

export default router;