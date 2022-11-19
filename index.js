const url='http://localhost:3000';
const button=document.getElementById('button')

var form=document.querySelector('.form')


form.addEventListener('submit', (e)=>{
    e.preventDefault();


    let userDetails={
        name:e.target.name.value,
        email:e.target.email.value,

    };

    const PostData= async()=>{
        try{
            const res=await axios.post(`${url}/postData`,userDetails);
            showUserData(res)
        }
        catch(err){
            console.log(err)
        }
    }
    PostData();

});




function showUserData(obj){
    let parent=document.getElementById('userData')
    console.log(obj)

    const remove='<button class="remove">delete</button>'
    const edit='<button class="edit">edit</button>'
    const li=`<li value="${obj.id}">${obj.name} ,${obj.email}${remove} ${edit}</li> `
  
    parent.innerHTML=parent.innerHTML+li
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('data')

   const getFun= async function(){
        const users= await axios.get('http://localhost:3000');
       console.log(users.data)
        const userShow=document.getElementById('userData')
        users.data.forEach(user=>{
            console.log(user);
            showUserData(user)
            
        })
    }
    getFun();

})
const odelete = document.getElementById('userData');
if(odelete){
    
    odelete.addEventListener('click',ondeleteAndEdit)
}


function ondeleteAndEdit(e){
    e.preventDefault();
    if(e.target.classList.contains('remove')){
        id=e.target.parentElement.getAttribute("value")
        axios.post(`${url}/post/delete/${id}`)
        console.log(e.target.parentElement)
    
        var prnt=e.target.parentElement;
       odelete.removeChild(prnt)

      
     }
    }