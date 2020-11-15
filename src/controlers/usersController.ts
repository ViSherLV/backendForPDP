import { Request, Response } from 'express';
import Users from '../mongo/Schemas/Users';
import axios from "axios";

export let allUsers = (req: Request, res: Response) => {
    Users.find((err: any, users: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(users)
        }
    })
}

export let getUser = (req: Request, res: Response) => {
    console.log(`req.params.id ${req.params.id}`)
    Users.findOne({ phoneNumber: req.params.id }, (err: any, user: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })

}

export let addUser = (req: Request, res: Response) => {
    let user = new Users(req.body)

    user.save((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}

export let deleteUser = (req: Request, res: Response) => {
    Users.deleteOne({ phoneNumber: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send('User deleted')
        }
    })
}

export let updateUser = (req: Request, res: Response) => {
    Users.findOneAndUpdate({ phoneNumber: req.params.id }, req.body, (err: any, user: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send('User updated')
        }
    })
}

export let senMessagesToUsers = (req: Request, res: Response) => {
    const users: Array<String> = req.body.users;
    const message: string = req.body.message;
    const encodeMessage = encodeURI(message)
    try {
        for (let user of users) {
            const route = `https://api.telegram.org/bot1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks/sendMessage?chat_id=${user}&text=${encodeMessage}`;
            axios.get(route)
        }
        res.send('Accept')
    } catch {
        res.send('Canst sene messages')
    }

}