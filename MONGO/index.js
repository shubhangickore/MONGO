const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("connection succesfull");
})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String ,
    age: Number ,
    city: String
});

const User = mongoose.model("User",userSchema);


// User.findOneAndDelete({city:"delhi"})
// .then((res)=>{
//     console.log(res);
// });

//  User.deleteOne({ city:"pune"})
//  .then((res)=>{
//     console.log(res);
//  });



// User.findByIdAndUpdate('68c715356ac53b79ca981bbd' , {age:33} , { new:true})
// .then((res)=>{
//     console.log(res);
// });








// User.updateOne({name:"abc"}, {age: 33})
// .then((res)=>{
//     console.log(res);
// });

// User.findById('68c715356ac53b79ca981bbd')
//  .then((res)=>{
//     console.log(res);
//  });

// User.insertMany([
//     {name:"abc" , age:22 , city:"Delhi"},
//    {name:"xyz", age: 23 , city:"Pune"},
//    {name:"pqr", age: 24 , city:"Banglore"},
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });



// const User2 = new User({
//     name: "ede",
//     age: 33,
//     city: "Mumbai"

// });
// User2
// .save()
// .then((res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// }));