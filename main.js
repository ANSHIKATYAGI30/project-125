function setup() {
    //Adding code to set up the webcam
    video = createCapture(VIDEO);
    video.size(550, 500);
    //Now creating the canvas and giving position to it
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    //Adding code for initialising poseNet model

    poseNet = ml5.poseNet(video, modelLoaded);

    //executioning poseNet model
    poseNet.on('pose', gotPoses);
}

function draw() {
    //Giving the background to the canvas
    background('#34ebab');
    textSize(70);
    fill("#04030f");
    text('ARNAV', 50 , 400);
    stroke("#F90093");
    square(noseX , noseY , difference);
}

function modelLoaded() {

    console.log('PoseNet is initialised!');
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        //Fetching the values from x and y coordinated of nose 
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = "+noseY);
        //Fetching the x coords of right and left hand wrist and update rightWristX and leftWristX variable 
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        //Subtraction between the x corrds of left wrist and right wrist
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX + " + rightWristX + "difference + " + difference);
    }
}