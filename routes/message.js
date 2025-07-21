import { Router } from 'express';
import { check } from 'express-validator';
import { fieldValidator } from '../middlewares/fieldValidator.js';
import { sendMessage } from '../controllers/message.js';

const router = Router();

router.post('/new',[
    check('name', 'Please provide your name').not().isEmpty(),
    check('newMessage', 'Please provide your message').not().isEmpty(),
    check('newMessage', 'Please provide a real message').isLength({ min: 6 }),
    check('email', 'Please provide your email').not().isEmpty(),
    check('email', 'Please verify that you wrote an actual email').isEmail(),
    fieldValidator
], sendMessage);

export default router;