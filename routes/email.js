const router = require('express').Router();
const emailCtrl = require('../controllers/emailCtrl');
const verifyRoles = require('../middlewares/verifyRoles');
const ROLES_LIST = require('../config/rolesList');
const auth = require('../middlewares/auth');

router.route('/').post(emailCtrl.addEmail_post); // (public) Contact us + we send a confirmation created email

router.use(auth);
// ***************** use the "Auth" middleware on the below api's ************

router.route('/').get(verifyRoles(ROLES_LIST.User), emailCtrl.getEmail_get); //get all emails

router
	.route('/:id')
	.delete(verifyRoles(ROLES_LIST.Admin), emailCtrl.deleteEmail_delete); //delete emails

module.exports = router;
