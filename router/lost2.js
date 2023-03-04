const express = require('express');
const router = express.Router();
const {getlost2,getOne,insertlost2,deleteone} = require('../logic/lost2');

router.get('/',getlost2);
router.post('/',insertlost2);
router.delete('/:id',deleteone);
router.get('/:d',getOne);


module.exports=router;