import express from "express"
const app=express();
const port=5173;

app.get("/",(req, res)=>{
res.send("<h1>hello ankit ji</h1>");
});
app.listen(port,()=>{
    console.log(`sever ${port} is running` );
})