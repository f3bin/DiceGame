window.onload=choosePic;
var images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function choosePic(){
var randomNumOne=Math.floor(Math.random()*images.length);
document.querySelector(".img1").src=images[randomNumOne];
var randomNumTwo=Math.floor(Math.random()*images.length);
document.querySelector(".img2").src=images[randomNumTwo];

if(randomNumOne>randomNumTwo){
    document.querySelector("h1").textContent="🚩Player 1 won"
}else if(randomNumTwo>randomNumOne){
    document.querySelector("h1").textContent="Player 2 won🚩"
}else{
    document.querySelector("h1").textContent="Draw!"
}
}
