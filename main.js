song = "" ;
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("butter chicken , chicken biriyani");
}

function draw(){
    image(video , 0 , 0 , 600 , 500) ;
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function stop(){
    song.stop();
    
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightwristX = " + rightWristX + "rightwristY = "+ rightWristY);
    console.log("leftwristX = " + leftWristX + "leftwristY = "+ leftWristY);
}
}