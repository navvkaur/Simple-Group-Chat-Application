const http = require('http');
const fs = require('fs');

//const bodyParser = require('body-parser');
const express = require("express");
const app = express();
//app.use(bodyParser.urlencoded({extended:false}));
app.use('/login',(req,res,next)=>{

    
        
        res.write('<html>');
        res.write('<head><title>Group Chat Application </title></head>');
        res.write(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/message" method="POST"><input id="username" type="text" name"title">
         <button type="submit">add</button></form>`);
        res.write('</html>');  
        

    });
    app.use('/message',(req,res,next)=>{

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body><form onsubmit="localStorage.setItem('username', document.getElementById('username').value=localStorage.getItem('username'))" action="/message" method="POST">
        <input type = "text" id = "message" name = "message">
        <input type = "hidden" id = "username" name = "username">
        <button type = "submit">SEND</button> </form></body>`);
         res.write('</html>')
         
        

    });

     app.post('/message',(req,res,next)=>{
       console.log(req.body.username);
       console.log(req.body.message);
       fs.writeFile("message.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err):res.redirect('/message');
     });
    });

    app.get('/message',(req,res,next)=>{
        fs.readFile('message.txt',(err,data)=>{
            if(err)
            {
                console.log(err)
            }
            res.send(`${data}form onsubmit="localStorage.setItem('username', document.getElementById('username').value=localStorage.getItem('username'))" action="/message" method="POST">
            <input type = "text" id = "message" name = "message">
            <input type = "hidden" id = "username" name = "username">
            <button type = "submit">SEND</button> </form></body>`);
        });
        
    })




  

    
        



app.listen(3000);

