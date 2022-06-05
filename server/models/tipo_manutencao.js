const mongoose = require("mongoose");

const manutencaoSchema = new mongoose.Schema({
    id:{
        
    },
    descricao:{
        type:String,
        required:true
    }
})

const manutencaoModel = mongoose.model("tipo_manutencao", manutencaoSchema)