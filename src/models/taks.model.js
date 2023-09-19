import mongoose from "mongoose";
//buscar como hacer un cronjob para mejorar la app
const taksschema = new mongoose.Schema({
    title: {
    type: String,
    require:true,
    },
    descripcion: {
    type: String,
    require : true,
},
    date:{
    type:Date,
    default: Date.now,
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
}    
},{
    timestamps:true,
});


export default mongoose.model("task", taksschema)