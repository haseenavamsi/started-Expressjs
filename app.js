  const http=require('http');

 const express=require('express');

// console.log(routes.someText);
const app=express()

const middleware1 = (req, res, next)=>{
  //execute some code
  next()  // pass execution to the next middleware
}
const middleware2 = (req, res, next)=>{
  //execute some code
}

app.get("/", middleware1, middleware2);

// OR
app.get("/", function(req, res, next){
  // first middleware
  next()  //Pass execution to the next middleware
},
function(){
  // second middleware
})
  
app.listen(3000);