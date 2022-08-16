import express from 'express';

const router = express.Router();

router.get('/plants', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader( "Access-Control-Request-Methods", "*" ); 
    res.send("Connection Established! 🎉");
}); 

export default router;