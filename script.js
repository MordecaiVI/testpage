document.getElementById("toggle-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("theme-image").src = 
        document.body.classList.contains("dark-mode") 
        ? "images/dark-mode.jpg" 
        : "images/light-mode.jpg";
});
