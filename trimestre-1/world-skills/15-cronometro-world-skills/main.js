window.addEventListener("DOMContentLoaded", () => {
    const horas = parseInt(document.getElementById("horas").textContent) || 0;
    const minutos = parseInt(document.getElementById("minutos").textContent) || 0;
    const segundos = parseInt(document.getElementById("segundos").textContent) || 0;

    console.log(horas);
    // console.log(minutos);
    // console.log(segundos);

    let totalSegundos = horas * 3600 + minutos * 60 + segundos;
    // console.log(totalSegundos);

    const display = document.getElementById("temporizador");
    const displayHoras = document.getElementById("horas");
    const displayMinutos = document.getElementById("minutos");
    const displaySegundos = document.getElementById("segundos");

    const updateDisplay = ()=> {
    const h = String(Math.floor(totalSegundos / 3600)).padStart(2, "0");
    const m = String(Math.floor(totalSegundos % 3600 / 60)).padStart(2, "0");
    const s = String(Math.floor(totalSegundos % 60)).padStart(2, "0");
    
    
    displayHoras.textContent = `${h}` 
    displayMinutos.textContent = `${m}` 
    displaySegundos.textContent = `${s}`

    display.textContent = `${h}:${m}:${s};` 
    };

    updateDisplay();

    const timer = setInterval(()=>{
        if(totalSegundos <= 0 ){
            clearInterval(timer);
            display.textContent = "!Tiempo Terminado¡"
            return;
        }
        totalSegundos--;
        updateDisplay();
    },1000);
}) 



















//comprobar que todo el contenido html-css este cargando

//window.addEventListener("DOMContentLoaded", (event) =>{

    //Tener en cuenta.
    //Hay que tener contadores: Hours, minutes, seconds
    //un boton para iniciar y uno para parar
    //osea, tenemos 5 elemeentos que capturar o captar

    //crear las variables/contadoras para hour, minutes, seconds

    // let cronoHour=document.querySelector(".crono_hou");
    // let cronoMin=document.querySelector(".crono_min");
    // let cronoSec=document.querySelector(".crono_sec");

    //crear las variables de los botones

    // let btnStart = document.querySelector(".layout_btn_start");
    // console.log(btnStart)
    // let btnStop = document.querySelector(".layout_btn_stop");

    // let hours=0
    // let minutes=0 
    // let seconds= 0
    // let time = null;

    //funcion para iniciar el cronometro
    // let start = () => {

    //     alert("Si funciona.")

    //     time = setInterval(()=>{
    //         seconds--;
            // console.log(seconds);
//             if(seconds == 60){
//                 minutes++;
//                 seconds=0
//             }

//             if(minutes == 60){
//                 hours++;
//                 minutes=0
//             }

//             if(hours >= 5){
//                 alert("Haz excedido el tiempo limite de 5 horas")
//                 clearInterval(time);
//             }

//             if(seconds <10){
//                 cronoSec.innerHTML ="0"+seconds;
//             } else {
//                 cronoSec.innerHTML = seconds;
//             }

//             if(minutes <10) {
//                 cronoMin.innerHTML = "0"+minutes;
//             } else {
//                 cronoMin.innerHTML = minutes;
//             }

//             if(hours < 10) {
//                 cronoHour.innerHTML = "10"+hours;
//             } else{
//                 cronoHour.innerHTML = hours;
//             }    
            
//         },1000)
//     }

//     btnStart.addEventListener("click", () =>{
//         start();
//     })
// })