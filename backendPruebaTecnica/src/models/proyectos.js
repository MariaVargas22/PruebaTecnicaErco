const mongoose = require("mongoose");

const proyectosSchema = mongoose.Schema({

    system_id:{
        type: Number,
        require: true
        
    },
    system_name:{
        type: String,
        require: true
        
    },
    location:{
        type: String,
        require:true
    }


    ,
    inverter_brand:{
        type: String,
        require:true
    }

    ,
    panel_brand:{
        type: Number,
        require:true
    }

    ,
    panel_power:{
        type: Number,
        require:true
    } ,
    panel_quantity:{
        type: Number,
        require:true
    }
    ,
    installed_power:{
        type: Number,
        require: true

    }
    ,
    current_generation:{
        type: Number,
        require: true

    }
    ,
    total_generation:{
        type: Number,
        require: true

    }
    
    
}, { versionKey: false })

module.exports = mongoose.model("proyectos", proyectosSchema)