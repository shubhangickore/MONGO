const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveAccess"){
       next();
    }
   throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/api",checkToken ,(req,res)=>{
    res.send("data");
});
// app.use((req,res,next)=>{
//     console.log("Hi, i m 1st middleware");
//     next();
// });   ....


app.get("/",(req,res)=>{
    res.send("Main page");
});

app.get("/random",(req,res)=>{
    res.send("random page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.use((err,req,res,next)=>{
    console.log("ERROR");
    res.send(err);
});

//Morgan middleware
// app.use((req,res,next)=>{
//     req.time= Date.now();
//     console.log(req.hostname,req.path,req.method);
//     next();
// });

// app.use((req,res)=>{
//     res.send("page not found");
// });

app.listen(3000,()=>{
    console.log("server started at 3000");
});