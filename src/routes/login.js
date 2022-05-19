const {Router}=require('express');
const {login}=require('../controllers/login');

const router=Router();

router.get("/login",[],login);

module.exports=router;