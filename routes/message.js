const {Router} = require('express');
const {check} = require('express-validator');
const {fieldValidator} = require('../middlewares/fieldValidator');
const {sendMessage} = require('../controllers/message');

const router = Router();

router.post('/new',[
    check('name', 'Please provide your name').not().isEmpty(),
    check('newMessage', 'Please provide your message').not().isEmpty(),
    check('newMessage', 'Please provide a real message').isLength({ min: 6 }),
    check('email', 'Please provide your email').not().isEmpty(),
    check('email', 'Please verify that you wrote an actual email').isEmail(),
    fieldValidator
], sendMessage);

module.exports = router;