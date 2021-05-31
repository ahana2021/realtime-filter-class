noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/C1wz3nMb/imageedit-1-8312248669.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center(); 
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function take_snapshot(){
    save('my_filter_picture');
}
function draw(){
    image(video,0,0,300,300);
    
    image(clown_nose,noseX,noseY,30,30);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x="+noseX);
    console.log("nose x="+noseY);
    noseX = results[0].pose.nose.x-10;
    noseY = results[0].pose.nose.y-10;
  }
}
