const socket=io('/');
const videoGrid = document.getElementById('video-grid');

const myPeer=new Peer(undefined,{
    host:'/',
    port:'3001',


})

const myVideo = document.createElement('video');
myVideo.muted=true;



socket.on('user-disconnected',userId=>{
    console.log(userId)
})