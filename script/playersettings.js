var nombreJugador, mailJugador, dificultadJugador;

var permitirPartida;


function usuario() {

//un usuario que se registre
        nombreJugador= document.getElementById("nombreJugador").value;
        mailJugador= document.getElementById("mailJugador").value;
        dificultadJugador=document.getElementById("dificultadJugador").value;

        //contiene información sobre la pantalla del ordenador
        localStorage.setItem("Nombre", nombreJugador);
        localStorage.setItem("Email", mailJugador);
        localStorage.setItem("Dificultad" , dificultadJugador);


      //  nombreJugador = localStorage.getItem('Nombre');
      //  mailJugador = localStorage.getItem('Email');
      //  dificultadJugador=localStorage.getItem('Dificultad');
       // console.log("nombre : ", nombreJugador);
      //  console.log("mail : ", mailJugador);
       // console.log("Dificultad : ", dificultadJugador);









}