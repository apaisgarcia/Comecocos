

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
function fecha(){
  var fecha= new Date();

  document.getElementById("fechita").innerHTML=fecha;
}







