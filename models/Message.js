import {Schema, model} from 'mongoose';
const MessageSchema = Schema({
    newMessage:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: false
    }
});

const Message = model('Message', MessageSchema);
export default Message;