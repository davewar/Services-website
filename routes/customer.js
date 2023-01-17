const router = require('express').Router();
const customerCtrl = require('../controllers/customerCtrl');
// const auth = require('../middlewares/auth');
// const verifyRoles = require('../middlewares/verifyRoles');
// const ROLES_LIST = require('../config/rolesList');

//get all customers
router.route('/').get(customerCtrl.getAllUsers_get);

//create customer
router.route('/create').post(customerCtrl.signup_post);

// delete customer
router.route('/delete/:id').delete(customerCtrl.deleteUser_delete);

// update customer -
router.route('/update/:id').put(customerCtrl.updateUser_put);

module.exports = router;
