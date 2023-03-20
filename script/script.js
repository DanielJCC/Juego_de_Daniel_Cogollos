const victoria = new Audio("sources/ACIERTO.mp3");
const derrota = new Audio("sources/PERDIDA.mp3");
const error = new Audio("sources/ERROR.mp3");

let numMagico = Math.floor(Math.random()*100)+1;
let intentos = 0;
let numIntentos=$("#numIntentos").text();
let intntsAnteriores= $("#intentos").text();
$("#numIntentos").text(numIntentos+intentos);

$("#boton").click(function(){
    $("#intentos").css("display","block");
    let numIngresado=$("#num").val();
    if(numIngresado != "" && intentos<10){
        $("#intentos").append(" "+numIngresado);
        if(numIngresado < numMagico){
            $("#adivinado").text("¡El número mágico es más alto!");
            $("#adivinado").css("background-color","blue");
            error.play();
        }else if(numIngresado >numMagico){
            $("#adivinado").text("¡El número mágico es más bajo!");
            $("#adivinado").css("background-color","orange");
            error.play();
        }else{
            victoria.play();
            $("#nuevoJuego").css("display","inline");
            $("#adivinado").text("¡ADIVINASTE!");
            $("#adivinado").css("background-color","green");
            $("#boton").hide();
            $("#nuevoJuego").show();
        }
        intentos++;
        $("#numIntentos").text(numIntentos + intentos);
    }if(intentos==10){
        derrota.play();
        $("#nuevoJuego").css("display","inline");
        $("#adivinado").text("¡HAS PERDIDO!");
        $("#adivinado").css("background-color","red");
        Swal.fire(
            '¡Has perdido!',
            'El número mágico era: '+numMagico,
            'error'
        )
        $("#boton").hide();
        $("#nuevoJuego").show();
    }
});

$("#nuevoJuego").click(function(){
    $("#intentos").css("display","none");
    numMagico = Math.floor(Math.random()*100)+1;
    intentos=0;
    $("#intentos").text(intntsAnteriores);
    $("#numIntentos").text(numIntentos+intentos);
    $("#boton").show();
    $("#nuevoJuego").hide();
    $("#adivinado").text("");
    $("#adivinado").css("background-color","white");
});