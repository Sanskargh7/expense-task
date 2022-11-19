const Sequelize=require('sequelize')
const sequelize=require('../util/database');
const Expense=sequelize.define('expense',{
id:{
    type:Sequelize.STRING,
    autoIncremenet:true,
    allownull:false,
    primaryKey:true
},
expenseAmount:Sequelize.STRING,
category:Sequelize.STRING,
description:Sequelize.STRING
})
module.exports=Expense;