const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    id:{

    },
    username:{
        type:String,
        required:true
    },
    senha:{
        type:password,
        required:true
    }
})

const usuarioModel = mongoose.model("usuarios", usuarioSchema)