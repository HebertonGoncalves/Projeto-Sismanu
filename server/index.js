const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const ordemModel = require("./models/ordens")

app.use(express.json());
app.use(cors());
//clustersismanu.lbtou.mongodb.net/
mongoose.connect("mongodb+srv://adm_sismanu_1:AbhRZDItkiODEJJT@clustersismanu.lbtou.mongodb.net/Sismanu?retryWrites=true&w=majority")

app.get("/getOrdens", (req, res)=>{
    ordemModel.find({}, (err, result)=>{
        if (err) {
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post("/createOrdem", async (req, res) => {
    const ordem = req.body;
    const newOrdem = new ordemModel(ordem);
    await newOrdem.save();
  
    res.json(ordem);
  });

  app.delete('/ordens', function (req, res) {
    res.send('Got a DELETE request at /ordens');
  });

app.listen(3001, ()=>{
    console.log("servidor rodando")
})