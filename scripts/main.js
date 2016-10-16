var heading= document.querySelector('h1');
heading.textContent="Hello World!" ;

document.querySelector('img').onclick=function (){
var imagetag=document.querySelector("img");
var source=imagetag.getAttribute("src");
if(source=="images/coffee-cup-working-happy.jpg")
    {
    imagetag.setAttribute("src","images/pexels-photo-70232.jpeg");
    }
else
    {
    imagetag.setAttribute("src","images/coffee-cup-working-happy.jpg");
    }
}
