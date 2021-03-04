var nombreJugador, mailJugador, dificultadJugador;

var permitirPartida;

function comprobarUsuario() {
    let usuarioIdentificado =0;
    console.log("principio nombre" ,localStorage.getItem("Nombre"));
    console.log("principio usu" ,localStorage.getItem("Email"));
    if(localStorage.getItem("Nombre") == null )
    {
        console.log("Error nombre no valido");
        return 0;

    }
    else if ( localStorage.getItem("Email") == null  || localStorage.getItem ("Email")== "" )
    {
        console.log("mail jugador no valido");
        return 0;
    }
    else {
        console.log("Usuario Correcto");
        console.log(localStorage.getItem("Nombre"));
        console.log(localStorage.getItem("Email"));
        return 1;
    }
        //if(localStorage.getItem('nombreJugador') != null &&  localStorage.getItem('nombreJugador') != "" && localStorage.getItem('mailJugador') != null  && localStorage.getItem ('mailJugador') !=""
}

function usuario() {

//un usuario que se registre
        nombreJugador= document.getElementById("nombreJugador").value;
        mailJugador= document.getElementById("mailJugador").value;
        dificultadJugador=document.getElementById("dificultadJugador").value;

        //contiene información sobre la pantalla del ordenador
        localStorage.setItem("Nombre", nombreJugador);
        localStorage.setItem("Email", mailJugador);
        localStorage.setItem("Dificultad" , parseInt(dificultadJugador));


      //  nombreJugador = localStorage.getItem('Nombre');
      //  mailJugador = localStorage.getItem('Email');
      //  dificultadJugador=localStorage.getItem('Dificultad');
       console.log("nombre : ", nombreJugador);
       console.log("mail : ", mailJugador);
       console.log("Dificultad : ", dificultadJugador);
    alert(
        " Usuario Configurado\n"+
        " Doble Click en Inicio\n"





    );

}