const mongoose= require('mongoose')

const PokemonSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
        
    },
    Name:{
        type:String,
        required:true,
        trim: true
    },
    hp:{
        type:Array,
        required:true
    },
    attack:{
        type:Array,
        required:true
    },
    defence:{
        type:Array,
        required:true
    },
    specialAttack:{
        type:Array,
        required:true
    },
    specialDefence:{
        type:Array,
        required:true
    },
    movementSpeed:{
        type:Array,
        required:true
    },
    cooldown:{
        type:Array,
        required:true
    },
    lifesteal:{
        type:Array,
        required:true
    },
    critChance:{
        type:Array,
        required:true
    },
    tenacity:{
        type:Array,
        required:true
    },
    attackSpeed:{
        type:Array,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    diff:{
        type:Array,
        required:true
    },
    lane:{
        type:Array,
        required:true
    },
    unite:{
        type:Array,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('Pokemon', PokemonSchema)