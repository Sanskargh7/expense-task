const express=require('express');
const userController=require('../controller/user');
const router=express.Router();
router.get('/',userController.getData);
router.post('/postData',userController.postData);
router.post('/delete/:id',userController.deleteData);
router.post('/update',userController.putData);
module.exports=router;