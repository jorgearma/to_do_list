import  {tokensecret} from "../config.js";
import jsonwebtoken from "jsonwebtoken";

export function createaccesstoken(payload){

    return new Promise((resolve,reject) =>{
        jsonwebtoken.sign(
            payload,
            tokensecret, 
        {
            expiresIn:"1d"
        },
        (err,token) => {
            if (err) {
                reject(err);
            }resolve(token);
        }
        )
    })
}

