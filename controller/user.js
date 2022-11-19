const User=require('../models/user');
exports.getData=(req,res)=>{
    User.findAll().then(result=>{
res.json(result)
    }).catch(err=>{
console.log(err);
    })
}
exports.postData=(req,res)=>{
    const name=req.name;
    const email=req.email;
    User.create({
        name,
        email
    }).then(()=>{
        res.json({name:req.name,email:req.email})
    }).catch(err=>{
        console.log(err);
    })
}
exports.deleteData=(req,res)=>{
    User.findByPk(req.params.id).then(user=>{
        return user.destroy()
    }).then(result=>{
        res.json({msg:'item is deleted'})
    }).catch(err=>{
        console.log(err);
    })
}
exports.putData=(req,res)=>{
    
}