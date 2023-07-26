const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const addUser = async(req,res)=>{
    try{
        let{name,email,phone,password} = req.body

        if(!name){
            return res.send({message:"name is required..", statusCode:400})
        }
        if(!email){
            return res.send({messge:"email.is required" ,statusCode:400})
        }
        if(!password){
            return res.send({message:"password is required.", statusCode:400})
        }
        let existUser = await User.findOne({email   })
        if(existUser){
            return res.send({message:"User exist in db use another email",statusCode:400})
        }
        let hashedPassword = await bcrypt.hash(password,10)

        let userData = {
            name,
            email,
            password:hashedPassword
        }
        const user = await User(userData).save()
        delete user.password
        return res.send(user)
    }catch(err){
        res.send(err)
    }
}

const UserLogin = async(req,res)=>{
    try{
        if(req.body.email && req.body.password){
            const user = await User.findOne({email:req.body.email.toLowerCase()})
            if(!user){
                return res.json({"message":"Invalid Credentials..","statusCode":400})
            }
            const pass = await bcrypt.compare(req.body.password, user.password)
            if(pass){
                let data = {
                    id:user.id,
                    name:user.name,
                    email:user.email
    
                }
                res.status(200).send({message:"Login success",User:data})
            }else{
                return res.json({"message":"Invalid Credentials..","statusCode":400})
            }
        }
        else{
            return res.json({"message":"Invalid Credentials..","statusCode":400})
        }
       

    }catch(err){
        res.send(err)
    }
}

module.exports = {
    addUser,
    UserLogin
}