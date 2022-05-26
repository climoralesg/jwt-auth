const {Router}=require('express');
const {login}=require('../controllers/login');
const {changePasswordBcrypt}=require('../controllers/login');


const router=Router();

router.get("/login",[],login);
router.get("/changepasswordbcrypt",[],changePasswordBcrypt);



module.exports=router;