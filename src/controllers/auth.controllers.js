import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createaccesstoken } from "../libs/jwt.js";
import { token } from "morgan";


export const register = async (req, res) => {
    const {email, password, username} = req.body

   try {

    const passwordhash = await bcryptjs.hash(password,10)
    const newUser =  new User({
        username,
        email,
        password: passwordhash
    })

    const usersaved = await newUser.save()
    const token = await createaccesstoken({id:usersaved._id})


    res.cookie('token' , token);
    res.json({
            message:"usuario creado satisfatoriamente"
    })


   } catch (error) {
    res.status(500).json({message:error.message})
}
}

export const login = async (req, res) => {
    const {email, password} = req.body

   try {

    const userfund = await User.findOne({email})
    if (!userfund) {
        return res.status(400).json({message: " user no found"})
    }
    const ismacht = await bcryptjs.compare(password,userfund.password)
    if (!ismacht) {
        return res.status(400).json({message:"error"})
    }

    
    const token = await createaccesstoken({id:userfund._id})


    res.cookie("token" , token);
    res.json({
            message:"usuario logeado satisfatoriamente"
    })


   } catch (error) {
     res.status(500).json({message: 'error.message'})
}
}