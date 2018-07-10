// Export Modules
const express = require('express');
const hbs = require('hbs');
var app = express();

//Object from modules
// partials
hbs.registerPartials(__dirname+'/views/partials')
// select view engine for hbs
app.set('view engine','hbs');
//static page
app.use(express.static(__dirname + '/public'));
// helper for making reuse of code
hbs.registerHelper('getCurYear',()=>{
  return new Date().getFullYear();
});
// helper for function test
hbs.registerHelper('getHeader',(someText)=>{
  return someText.toUpperCase();
});

// Webserver to listen 3000
app.listen(3000,()=>{
  console.log("Server is running in 3000 port");
});

// route
app.get('/',(req,res)=>{
  res.render('index.hbs',{
    pageTitle: 'Welcome to home Page',
    welcomeMsg: 'hello to Home Page',
    arr:[
      1,
      2,
      3]

  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'Welcome to About Page',
  });
});

app.get('/bad',(req,res)=>{
  res.send({error : "Unable to Access"});
});
