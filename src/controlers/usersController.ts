import { Request, Response} from 'express';
import e = require('express');
import Users from './../book';

export let allUsers = (req: Request, res: Response) =>{
    let users = Users.find((err:any, users:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send(users)
        }
    })
}

export let getUser = (req:Request, res: Response)=>{
    console.log(`req.params.id ${req.params.id}`)
 Users.findOne({phoneNumber:req.params.id}, (err:any, user:any)=>{
   if(err){
       res.send(err)
   }else{
       res.send(user)
   }
 })

}

export let addUser = (req: Request, res: Response)=>{
    let user = new Users(req.body)

    user.save((err:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send(user)
        }
    })
}

export let deleteUser = (req:Request, res:Response)=>{
    Users.deleteOne({phoneNumber:req.params.id}, (err:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send('User deleted')
        }
    }) 
}

export let updateUser = (req:Request, res:Response)=>{
    Users.findOne(req.params.id, req.body, (err:any, user:any)=>{
            if(err){
                res.send(err)
            }else{
                res.send('User updated')
            }
    })
}