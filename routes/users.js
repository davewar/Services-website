const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

router.route('/login').post(userCtrl.login_post); //login
router.route('/signup').post(userCtrl.signup_post); //signup

module.exports = router;
