

var randomNumber1 = Math.floor(Math.random()*6)+1;

var image1SrcName = "./images/dice"+randomNumber1.toString()+".png";

document.getElementsByClassName("img1")[0].setAttribute("src",image1SrcName);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var image2SrcName = "./images/dice"+randomNumber2.toString()+".png";

document.getElementsByClassName("img2")[0].setAttribute("src",image2SrcName);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}





