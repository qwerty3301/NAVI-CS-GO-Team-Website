function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText =  document.getElementById("myBtn");
if (dots.style.display === "none") { 
    dots.style.display = "inline";
    btnText.innerHTML = "Показать полностью";
    moreText.style.display = "none"; } 
else { dots.style.display = "none"; 
    btnText.innerHTML = "Свернуть";  
    moreText.style.display = "inline"; }
}
