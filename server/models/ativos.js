const mongoose = require("mongoose");

const ativoSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    id_local:{
        type:String,
        required:true
    },

})

const ativoModel = mongoose.model("ativos", ativoSchema)