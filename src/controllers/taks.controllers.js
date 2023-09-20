import taks from "../models/taks.model.js"



export const gettaks = async(req,res) => {
    const takss = await taks.find({
        user: req.user.id,
    }).populate('user')
    res.json(takss)
}


export const createtaks = async(req,res) => {
    const {title , descripcion , date} = req.body

    const newtaks = new taks({
        title,
        descripcion,    
        date,
        user: req.user.id
    })
    const savedtaks = await newtaks.save();
    res.json(savedtaks)
}

export const gettak = async(req,res) => {
    const takss = await taks.findById(req.params.id).populate('user')
    if (!takss) {
        return res.status(404).json({mesagge: 'no encontrado'})
    }
    return res.sendStatus('204')

}

export const updatetask = async(req,res) => {
    const takss = await taks.findByIdAndUpdate(req.params.id , req.body , {
        new:true,
    })
    if (!takss) {
        return res.status(404).json({mesagge: 'no encontrado'})
    }
    res.json(takss)
}

export const deletetaksk = async(req,res) => {
    const takss = await taks.findByIdAndDelete(req.params.id )
    if (!takss) {
        return res.status(404).json({mesagge: 'no encontrado'})
    }
    res.json(takss)
}
 


