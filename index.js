const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,rec){
    rec.sendFile(__dirname+"/intro.html")
})
app.post("/",function(req,rec){
    var a=Number(req.body.w);
    var b=Number(req.body.h);
    var c=a/(b*b);
    if(c<18.5){
        var d="Your BMI is "+c+" and You are underweight, which could indicate possible malnutrition or other health issues."
        rec.send(d);
    }
    else if(c>=18.5&&c<26.9)
    {
        var d="Your BMI is "+c+" and You are normal weight"
        rec.send(d);
    }
    else 
    {
         var d="Yor BMI is "+c+" and you are overweight. It may indicate an increased risk of certain health conditions, such as heart disease, diabetes, and hypertension."
         rec.send(d);    
        }
});
app.listen(3000,function(){
    console.log("server 3000 started");
});