
var colors =generateRandomColors(6)
var blank;
var squares = document.querySelectorAll(".square");
var select=pickcolor();
var display=document.querySelector("#display");
var messagedisplay=document.querySelector("#message");
var reset=document.querySelector("#reset");
var h1=document.querySelector("h1");
 var smallbtn=document.querySelector("#small");
 var hardbtn=document.querySelector("#hard");
 
smallbtn.addEventListener("click",function(){
hardbtn.classList.remove("selected");
smallbtn.classList.add("selected");
numsquares=3;
colors=generateRandomColors(numsquares);
select=pickcolor();
display.textContent=select;
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.background=colors[i];
	}else{
		squares[i].style.background="black";

	}
}
//alert("ther");

});
hardbtn.addEventListener("click",function(){
smallbtn.classList.remove("selected");

hardbtn.classList.add("selected");
numsquares=6;
colors=generateRandomColors(numsquares);
select=pickcolor();
display.textContent=select;
for(var i=0;i<squares.length;i++){
	
		squares[i].style.background=colors[i];
	
}


});
 reset.addEventListener("click",function(){
 	colors=generateRandomColors(6);//6 is imp to changeing how many block
 	select=pickcolor();
 	display.textContent=select;
 	for(var i=0;i<squares.length;i++){
 		squares[i].style.background=colors[i];
 	}
 	h1.style.background="steelblue";
 	messagedisplay.textContent="";
 	reset.textContent="New colors";
 });
display.textContent=select;

for(var i=0;i<squares.length;i++){
//
squares[i].style.background=colors[i];
//add click list ton squares
squares[i].addEventListener("click",function(){
	//grab color of clicked square
var clickedcolor=this.style.background;
if(clickedcolor===select){
	messagedisplay.textContent="correct";
	reset.textContent="play again";
changeColors(clickedcolor);
//alert("correct");
h1.style.background=clickedcolor;
}else{
this.style.background="white";
messagedisplay.textContent="try again";
}
});
}
function changeColors(color){
	for(var i=0;i<squares.length;i++)
squares[i].style.background=color;
alert("correct");

}
function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

// squares.addEventListener("click",function(){
// 	display.textContent=select;
// })
function generateRandomColors(num){
	var arr = [];
for(var i=0;i<num;i++){
	arr.push(randomColors())
}
return arr;
}
function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}