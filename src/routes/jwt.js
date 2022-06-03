const { Router }= require('express');
const {create} = require('../controllers/jwt')
const {verify} = require('../controllers/jwt')

const router=Router();

router.get("/createtoken",[],create);
router.get("/verifytoken",[],verify);

module.exports = router;