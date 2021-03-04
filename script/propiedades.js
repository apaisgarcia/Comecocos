

function propiedades(){

  alert(
         " Navegador : " + navigator.appCodeName + "\n" +
         " Idioma : " + navigator.language + "\n" +
         " Version Navegador : " + navigator.appVersion + "\n" +
         " Navegador Online : " + navigator.onLine + "\n" +
         " Cookies Disponibles : " + navigator.cookieEnabled + "\n" +
         " Identificación del Usuario : " + navigator.userAgent


             );


}

function pedirDatos() {



        var  numero1 = document.getElementById("numero1").value;
        var  numero2 = document.getElementById("numero2").value;
        localStorage.setItem("coordX", numero1);
        localStorage.setItem("coordY", numero2);
        console.log("estoy en mayor", numero1);
        numero1 = localStorage.getItem('coordX');
        numero2 = localStorage.getItem('coordY');



    var str = "width=" + numero1 + ",height=" + numero2;
    console.log("str", str);
    var myWindow = window.open("https://apaisgarcia.github.io/Comecocos/", "MsgWindow", str);



    //window.open( mywindow);
}

/*function usuario() {
//un usuario que se registre
    if (localStorage.getItem("nombre")===null && localStorage.getItem("user")===null) {

        var nombre = document.getElementById('nombre').value;
        var user = document.getElementById('user').value;
        localStorage.setItem("Nombre", 'nombre');
        localStorage.setItem("Usuario", 'user');
        //contiene información sobre la pantalla del ordenador



        nombre = localStorage.getItem('nombre');
        user = localStorage.getItem('user');


        var myWindow = window.open("https://apaisgarcia.github.io/Comecocos/", "MsgWindow");
    }

}*/




