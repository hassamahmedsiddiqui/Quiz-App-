const mainOverlay = document.querySelector(".mainOverlay");

setTimeout(function() {
    mainOverlay.style.display = "none";
}, 3000);


startingQuiz = () =>{
    window.location.href = './Quiz-Outline/outline.html'
}