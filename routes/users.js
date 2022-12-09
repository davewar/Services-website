const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middlewares/auth');

// Extra security. stop brute force logining but I have incorrect pw attemps count on login anyway.
const loginLimiter = require('../middlewares/loginLimiter');
router.route('/login').post(loginLimiter, userCtrl.login_post); //login

router.route('/register').post(userCtrl.signup_post); // register
router.route('/signup').post(userCtrl.signup_post); //signup
router.route('/logout').get(userCtrl.logout_get); // logout

router.route('/activation').post(userCtrl.activate_post);
router.route('/forgot').post(userCtrl.forgot_post);
router.route('/reset').post(userCtrl.reset_post);

// is there a cookie with an accesstoken,if yes send bk a new accesstoken
// first used when App compo is loaded
router.route('/refresh_token').get(userCtrl.refreshToken_get);

// auth =verify header has Authorization with accesstoken and then fwd an "user" obj
// usercontext compo- runs when accesstoken changed
router.route('/infor').get(auth, userCtrl.getUser_get);

// authadmin- is the a req.user.id, find user role, if role 0 thne stop
//delete user -admin
router.route('/delete/:id').delete(auth, userCtrl.deleteUser_delete);
router.route('/update/:id').put(userCtrl.updateUser_put); // update user active status and role

module.exports = router;
