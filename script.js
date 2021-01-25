var dayBtn = document.querySelector("#day");
var nightBtn = document.querySelector("#night");
var displayMessage = document.querySelector("#message");
var displayMoon = document.querySelector(".fa-moon-o");
var displayDay = document.querySelector("#days");
var selected = document.querySelector(".selected");



if(selected === selected) {
    displayMessage.style.display ="block";
    displayMoon.style.display = "block"
    displayDay.style.display ="none";
}


nightBtn.addEventListener("click", function(){
    nightBtn.classList.add("selected");
    dayBtn.classList.remove("selected");
    displayMoon.style.display ="block";
    displayMessage.style.display ="block";
    displayDay.style.display ="none";
});

dayBtn.addEventListener("click", function(){
    nightBtn.classList.remove("selected");
    dayBtn.classList.add("selected");
    
    displayMoon.style.display ="none";
    displayDay.style.display = "block";
    displayMessage.style.display ="none";
});





