const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');

router.route('/register').post(userCtrl.signup_post); //login
router.route('/login').post(userCtrl.login_post); //login
router.route('/signup').post(userCtrl.signup_post); //signup
router.route('/logout').get(userCtrl.logout_get);

router.route('/activation').post(userCtrl.activate_post);
router.route('/forgot').post(userCtrl.forgot_post);
router.route('/reset').post(userCtrl.reset_post);

router.route('/refresh_token').get(userCtrl.refreshToken_get);
router.route('/infor').get(auth, userCtrl.getUser_get);

//delete user -admin
//

module.exports = router;
