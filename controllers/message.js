import { response } from 'express'
import Message from '../models/Message.js'
export const sendMessage = async(req, res = response) =>{
    const {newMessage, name, email, phone} = req.body
    console.log(newMessage, name, email, phone)
    try {
        const message = new Message(req.body)
        await message.save()
        res.status(201).json({
            ok: true,
            message: newMessage, 
            name: name,
            email: email,
            phone: phone
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'There was a problem sending your message'
        });
    }
}

