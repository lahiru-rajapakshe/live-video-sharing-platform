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

function connectToNewUser(userId,stream){
    const call=myPeer.call(userId,stream)
    const video = document.createElement('video');

    call.on('stream',userVideoStream=>{
        addVideoStream(video,userVideoStream)
    })
    call.on('close',()=>{
        video.remove();
    })

}

function addVideoStream(video,stream){
    video.srcObject=stream
    video.addEventListener('loadedmetadata',()=>{
        video.play()
    })

    videoGrid.append(video)
}