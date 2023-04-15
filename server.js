import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, ()=>{
    console.log(`Bird Renamer servier listening on port ${port}`)
})