import mongoose from "mongoose";

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
}    
},{
    timestamps:true,
});


export default mongoose.model("task", taksschema)