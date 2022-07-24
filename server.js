const express= require('express');
// const { execPath, hasUncaughtExceptionCaptureCallback } = require('process');
const app=express();
const server =require('http').Server(app);
const io=require('socket.io')(server);
const { v4: uuidV4 } = require('uuid')
// import {v4 as uuidv4} from 'uuid';
var socket      = require('socket.io')

app.set('view engine','ejs')
app.use(express.static('public'));

app.get('/',(req,res)=>{
res.redirect(`/${uuidV4()}`)
})

app.get('/:room',(req,res)=>{
    res.render('room',{ roomId: req.params.room })
})




server.listen(5500);