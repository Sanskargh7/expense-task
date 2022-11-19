const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors())
const sequelize=require('./util/database');
const userRoutes=require('./routes/user');
const expenseRoutes=require('./routes/expense')
app.use(userRoutes)
app.use(expenseRoutes);
sequelize.sync().then(result=>{
    console.log('database is connected');
    app.listen(3000);
}).catch(err=>console.log(err))