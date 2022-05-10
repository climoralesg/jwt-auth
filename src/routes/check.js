const { Router }= require('express');
const {hola} = require('../controllers/check')

const router=Router();

router.get("/auth",[],hola);

module.exports = router;
