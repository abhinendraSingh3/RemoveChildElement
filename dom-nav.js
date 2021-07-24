//here we are tageting div 2 to replace it.



var target=document.getElementById("inner");
var oldElement=target.children[2];
target.removeChild(oldElement);
































/*document.querySelector("#outer").addEventListener("click",abc);
function abc(){
    document.querySelector("#outer").classList.toggle("xyz");
}
/*function xyz(){
    document.getElementById("#inner").parentElement.style.backgroundColor="red";
}*
//var a= document.getElementById("inner").parentElement;
var a =document.querySelector("#outer").classList;
console.log(a);
console.log("hello");*/