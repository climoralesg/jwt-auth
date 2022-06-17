const {Router}=require('express');
const {login}=require('../controllers/login');
const {testlogin}=require('../controllers/login')
const {changePasswordBcrypt}=require('../controllers/login');
const {validateInputs}=require('../middlewares/validateInputs');
const {verifyToken}=require('../middlewares/verifyToken');

const router=Router();

router.get("/login",[validateInputs,verifyToken],login);

router.get("/testlogin",testlogin);

router.get("/changepasswordbcrypt",[],changePasswordBcrypt);

module.exports=router;