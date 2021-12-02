const express = require("express")
const { engine } = require('express-handlebars');
const app = express()
require('dotenv').config()
const os = require("os");

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST


// configure handlebars 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// static file (css/images)
app.use(express.static('public'))


app.get("/",(req,res)=>{
  // res.send("Hello World")
  res.render("home")
})
app.get("/portfoliopage/:name?",(req,res)=>{
  // res.send("Hello World")
  const methodType = req.method
  const methodName = req.url
  const name = req.params.name
  res.render("portfolioPage",{name:name,type:methodType,url:methodName})

})


app.listen(PORT,()=>{
  console.log(`Server Running At http://${HOST}:${PORT}`)
})