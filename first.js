var express=require('express')
var app=express()
var port=3000;
app.get('/',function(req,res){
  res.send("HELLO WORLD");
});
app.listen(port,function(){
  console.log("App listening on port "+ port);
});
