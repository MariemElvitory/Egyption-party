// first section
let sideWidth = $(".side-bar").innerWidth();
$(".side-bar").animate({"left":`-${sideWidth}px`} , 1)  


$(".side-icon").click(function(){
    let sideWidth = $(".side-bar").innerWidth();
    $(".side-bar").animate({"left":`0px`} , 1000)  

})

$(".side-bar i").click(function(){
    let sideWidth = $(".side-bar").innerWidth();
    $(".side-bar").animate({"left":`-${sideWidth}px`} , 1000)  
})

// second 

$("#singer1").click(function(){
    $("#singer-text1").toggle(1000)
    $("#singer-text2").hide(1000)
    $("#singer-text3").hide(1000)
    $("#singer-text4").hide(1000)
})

$("#singer2").click(function(){
    $("#singer-text2").toggle(1000)
    $("#singer-text1").hide(1000)
    $("#singer-text3").hide(1000)
    $("#singer-text4").hide(1000)})

$("#singer3").click(function(){
    $("#singer-text3").toggle(1000)
    $("#singer-text1").hide(1000)
    $("#singer-text2").hide(1000)
    $("#singer-text4").hide(1000)
})

$("#singer4").click(function(){
    $("#singer-text4").toggle(1000)
    $("#singer-text1").hide(1000)
    $("#singer-text2").hide(1000)
    $("#singer-text3").hide(1000)
})


// third section
let endDate = new Date("Mar 10, 2025 12:00:00").getTime();

var timer = setInterval(function() {

   let now = new Date().getTime();
   let t = endDate - now; 
   if (t >= 0) {

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

   document.querySelector("#days").innerHTML=`-`+ days +`D`;
   document.querySelector("#hours").innerHTML=`-`+hours+`h`;
   document.querySelector("#mins").innerHTML=`-`+mins+`m`;
   document.querySelector("#seconds").innerHTML=`-`+secs+`s`;
}
}, 1000);


// fourth section

// var textContent=document.getElementById("textContent");
// textContent.addEventListener("keyup" , function(){validationMsg()})

// function validationMsg(){
//     var regexMsg=/^[a-z]{5}$/;
//     if ( regexMsg.test==true)
//     {
//         document.querySelector(".alert").style.display="none"
//         return true
//     }
//     else
//     {
//         document.querySelector(".alert").style.display="block"
//         return false 

//     }

// }


let count = document.querySelector(".count span");
let textContent =document.getElementById("textContent");
let maxlenght = textContent.getAttribute("maxLength");
let alert = document.querySelector(".alert");

count.innerHTML=maxlenght;

textContent.oninput = function(){
    count.innerHTML =  maxlenght - this.value.length;
    count.innerHTML == 0 ? alert.style.display="block" : alert.style.display="none";
}





