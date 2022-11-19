const expenseController=require('../controller/expense');
const router=require('express').Router();
router.get('/getexpense',expenseController.getexpense)
router.post('/createexpense',expenseController.addExpense);
router.delete('/deleteexpense/:expenseid',expenseController.deleteExpense);
module.exports=router;