document
.getElementById("noButton")
.addEventListener("click", function () {
    var yesButton = document.querySelector(
    'button[onclick*="YAY.html"]'
    );
    var currentFontSize = parseInt(
    window.getComputedStyle(yesButton).fontSize
    );
    yesButton.style.fontSize = currentFontSize + 10 + "px"; // tambah ukuran font 5px
});