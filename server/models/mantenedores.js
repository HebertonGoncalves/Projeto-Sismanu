const mongoose = require("mongoose")

const mantenedorSchema = new mongoose.Schema({
    matricula:{
        type:Number,
        required: false
    },
    nome:{
        type:String,
        required: true
    },
    id_equipe:{
        type:String,
        required: false
    }
})

const mantenedorModel = mongoose.model("mantenedores", mantenedorSchema)