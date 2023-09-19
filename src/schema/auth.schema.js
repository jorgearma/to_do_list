import {z} from "zod";
//mejorar esta parte muhco mas 


export const registerSchema = z.object({
    username: z.string({
        required_error:'username is requiered'
    }),
email: z.string().email({
    required_error : 'email is requiered',
}).email({
    message: 'invalid email'
}),
password: z.string({
    required_error: 'password is requiered'
}).min(6,{
    message:'password must be at least 6 characters'
})
})

export  const loginSchema = z.object({
    email: z.string({
        required_error: 'email is requiered'
    }).email({
        message: ' invalid email'
    }),
    password: z.string({
        required_error: ' password is requiered'
    }).min(6,{
        message:'password must be at least 6 character'
    })
})