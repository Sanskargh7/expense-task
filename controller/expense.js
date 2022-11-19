const Expense=require('../models/expense');
const addExpense=(req,res,next)=>{
    const {expenseAmount,category,description}=req.body;
    req.user.createExpense({expenseAmount,category,description}).then(expense=>{
        res.status(200).json({expense,success:true})
    }).catch(err=>{
        console.log(err);
    })
}
const getexpense=(req,res)=>{
    req.user.getExpense().then(expenses=>{
        res.status(200).json({expenses,success:true})
    }).catch(err=>{
        console.log(err);
    })
}
const deleteExpense=(req,res)=>{
    const expenseid=req.params.expenseid;
    Expense.destroy({where:{id:expenseid}}).then(()=>{
        return res.status(200).json({success:true,msg:"deleted successfully"});
    })
    .catch(err=>{
        return res.status(400).json({success:true,msg:"false"})
    })
}
module.exports={
    addExpense,
    getexpense,
    deleteExpense
}