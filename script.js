var dayBtn = document.querySelector("#day");
var nightBtn = document.querySelector("#night");
var displayMessage = document.querySelector("#message");
var displayMoon = document.querySelector(".moon");


dayBtn.addEventListener("click", function(){
    nightBtn.classList.remove("selected");
    dayBtn.classList.add("selected");
    displayMessage.textContent = "HEY! GOOD DAY ! Wishing you an amzaing day ahead !";
    displayMoon.style.display ="none"
});

nightBtn.addEventListener("click", function(){
    dayBtn.classList.remove("selected");
    nightBtn.classList.add("selected");
    displayMessage.textContent = displayMessage;
    colorDisplay.textContent = pickedColor;
});



