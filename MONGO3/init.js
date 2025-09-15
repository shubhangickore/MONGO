const mongoose = require("mongoose");
const Chat = require('./models/chat.js');

main ()
.then((res)=>{
    console.log("connection successfull");
}).catch(err=>{ console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let AllChats = [
    {
        from:"shreya",
        to:"shruti",
        msg:"Hey there i'm waiting outside",
        created_At: new Date(),
    },
    {
        from:"Ishu",
        to:"vedu",
        msg:"Lets go for a walk",
        created_At: new Date(),
    },
    {
        from:"shiva",
        to:"vishu",
        msg:"send me the notes",
        created_At: new Date(),
    },

];
Chat.insertMany(AllChats);