const mongoose = require('mongoose')

const ordemSchema = new mongoose.Schema({
    local:{
        type: String,
        required: true
    },
    ativo:{
        type: String,
        required: true
    },
    mantenedor:{
        type: String,
        required: false
    }
})

const ordemModel = mongoose.model("ordens", ordemSchema);
module.exports = ordemModel;
