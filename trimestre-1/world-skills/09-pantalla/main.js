window.addEventListener("DOMContentLoaded", ()=>{
    console.log(screen.width, screen.height, window.location.href);

    let data1 = document.querySelector(".data")

    data1.innerHTML += "<h2>Anchura: " + screen.width + " Pixeles </h2>";
    data1.innerHTML += "<h2>Alto: " + screen.height + "Pixeles </h2>";

    data1.innerHTML += "<h2>Anchura: " + window.innerWidth + " Pixeles </h2>";
    data1.innerHTML += "<h2>Alto: " + window.innerHeight + "Pixeles </h2>";

    data1.innerHTML += "<h2>URL: " + window.location.href + "</h2>";
    window.open("https://www.microsoft.com", "blank")
});