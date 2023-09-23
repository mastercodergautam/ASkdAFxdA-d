function preload(){

}
  function setup()  {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
video.hide();
tint_color="";

  }
function draw(){
image(video,0,0,640,480);
tint(tint_color)
fill("red");
stroke("red");
circle(50,50,40)
fill("red");
stroke("red");
circle(580,50,40)
fill("red");
stroke("red");
circle(50,430,40)
fill("red");
stroke("red");
circle(580,430,40)
fill("green");
stroke("green");
rect(40,70,20,345)
fill("green");
stroke("green");
rect(570,70,20,345)
fill("green");
stroke("green");
rect(60,34,512,20)
stroke("green");
rect(60,420,512,20)
}
function take_snapshot(){
    save ("student_name.png")
}
function filtercolor(){
    tint_color=document.getElementById("colorname").value ;
}