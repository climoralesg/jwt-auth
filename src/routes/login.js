const {Router}=require('express');
const {login}=require('../controllers/login');
const {changePasswordBcrypt}=require('../controllers/login');
const {validateInputs}=require('../middlewares/validateInputs');


const router=Router();

router.get("/login",[validateInputs],login);
router.get("/changepasswordbcrypt",[],changePasswordBcrypt);



module.exports=router;