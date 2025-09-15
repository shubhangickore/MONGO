const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main ()
.then((res)=>{
    console.log("connection successfull");
}).catch(err=>{ console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
   
}


Chat.insertMany([
    {from:"Shiva", to :"Vishu", msg:" waiting for the coffeee", created_At: new Date(),},
    {from:"Aakka", to :"ved", msg:" calling at home", created_At: new Date(),},

]);

// let chat1 = new Chat({
//    from:"Shubhangi",
//    to:"Isu",
//    msg:"Hello sundari",
//    created_At: new Date()
// });

// chat1.save().then((res)=>{
//     console.log(res);
// });


app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});