import { response } from 'express'
import { Message, sequelize } from '../models/Message.js'

export const sendMessage = async(req, res = response) =>{
    const {newMessage, name, email, phone} = req.body
    console.log(newMessage, name, email, phone)
    try {
        await sequelize.sync(); // Crea la tabla si no existe
        const message = await Message.create({ newMessage, name, email, phone });
        res.status(201).json({
            ok: true,
            message: newMessage, 
            name: name,
            email: email,
            phone: phone
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'There was a problem sending your message'
        });
    }
}

