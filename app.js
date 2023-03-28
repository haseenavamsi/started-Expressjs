const express=require('express');
const bodyParser=require('body-Parser');

const app=express();

app.use(bodyParser.urlencoded({extented:false}))

app.use('/add-prodect',(req,res,next)=>{
res.send('<form action="/prodect" method="POST"><input type="text" name="title"><button type="Submit">Add Prodect</button></from>');

});

app.use('/prodect',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/',(req,res,next)=>{
   res.send('<h1>Hello from Express!</h1>');
});
app.listen(3000);