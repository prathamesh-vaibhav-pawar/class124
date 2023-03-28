function setup(){
    Canvas = createCanvas(900,600)
    Canvas.position(550,130)

    video = createCapture(VIDEO)
    video.size(500,500)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotResult)
}
function modelLoaded(){
    console.log("Model has been loaded")
}
function gotResult(result){
    if(result.length > 0){
        console.log(result)
    }
}