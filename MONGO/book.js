const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("connection succesfull");
})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
 title:   {
    type: String,
    required: true,
    },
Author:{
    type: String,
},
Price:{
    type:Number,
    min:[1,"this is custom error message"],
},
Discount:{
    type: Number,
    default : 0,
},
});

const Book = mongoose.model("Book", bookSchema);

// Book.insertMany([
//     {title:"Let us c" , Author:"isu", Price:250},
//     {title:"Data Structure" , Author:"xyz", Price:350},
// ]);


Book.findByIdAndUpdate('68c7be2f042ecc0ab4d91430',{Price:-100}, {runValidators:true})
.then((res)=>{
    console.log(res);

})
.catch((err)=>{
    console.log(err.errors);
});

// let book1 = new Book({
//     title:"Engineering Mathematics",
//     Author:"R.K.Jain",
//     Price: 300,
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
    
// });