//alert("hi")
//code for taggling the close and active button
let element=document.querySelector(".showburger");
element.addEventListener("click",function(e)
{   document.querySelector(".nav").style.display="block";
    document.querySelector(".nav").classList.add("active");
    document.querySelector(".bgd").style.display="none";
    document.querySelector(".closebtn").style.display="block";
})
let elementcls=document.querySelector(".closebtn");
elementcls.addEventListener("click",function(e)
{

    document.querySelector(".nav").classList.remove("active");
    document.querySelector(".nav").style.display="none";
    document.querySelector(".bgd").style.display="block";
    document.querySelector(".closebtn").style.display="none";
})
