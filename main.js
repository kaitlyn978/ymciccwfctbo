song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristscore=0;
function preload(){
    song1=loadSound("dj.mp3");
    song2=loadSound("jazz.mp3");
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,400,400);
    stroke(0,0,255);
    fill(0,0,255);
    circle(leftWristX,leftWristY,20);

    stroke(255,0,0);
    fill(250,0,0);
    circle(rightWristX,rightWristY,20);
if(leftWristscore>0.1){
     NumberleftWristY=Number(leftWristY);
    removing_decimals=floor(NumberleftWristY);
    volume=removing_decimals/500;
    console.log(volume);
document.getElementById("volume").innerHTML="Volume = "+volume;
song.setVolume(volume);
} 
}
function song_name(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("poseNet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x-40;
        leftWristY=results[0].pose.leftWrist.y-200;
        console.log("leftWristX= "+leftWristX+"leftWristY"+leftWristY);

        rightWristX=results[0].pose.rightWrist.x-40;
        rightWristY=results[0].pose.rightWrist.y-200;
        console.log("rightWristX= "+rightWristX+"rightWristY"+rightWristY);

        leftWristscore=results[0].pose.keypoints[9].score;
        console.log("leftWristscore = "+leftWristscore);
    }
}