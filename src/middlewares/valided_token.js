import jsonwebtoken from "jsonwebtoken"
import {tokensecret} from "../config.js"

export const authrequiere = (req,res,next) => {
    const {token} = req.cookies
    if(!token){
        return res.status(401).json({messague:"access denied"})
    }

    jsonwebtoken.verify(token, tokensecret, (err,user) =>{
        if(err){
            return res.status(401).json({massague:"token  requerido"})
        }
        req.user = user

    })
    next()

}