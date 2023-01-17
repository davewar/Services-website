const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
// const auth = require('../middlewares/auth');
// const verifyRoles = require('../middlewares/verifyRoles');
// const ROLES_LIST = require('../config/rolesList');

//get all projects
router.route('/').get(productCtrl.getAllProjects_get);

//get a project
router.route('/item/:id').get(productCtrl.getProject_get);

//create project
router.route('/create').post(productCtrl.newProject_post);

// delete project
router.route('/delete/:id').delete(productCtrl.deleteProject_delete);

// update project
router.route('/update/:id').put(productCtrl.updateProject_put);

module.exports = router;
