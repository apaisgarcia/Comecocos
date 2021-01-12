

var imgPacman;
const s = (p) => {
    var imgRoca;
    var imgComida;
    var arrayRocasMapa = [];
    var arrayComidaMapa= []; // esto es como un new array
    var myJuego = new Game(); // si hago yo el array
    var myJuego2 = new Game(18, 25); //aray aleatorio


     p.preload = function() { // cargar antes de comenzar img = loadImage("images/pacman32.png");k
        imgPacman = p.loadImage("images/pacman32.png");
        imgRoca = p.loadImage("images/roca.jpg");
        imgComida= p.loadImage("images/comida.jpg")
    }

    p.setup = function() { //crear la pantalla

       p.createCanvas(COLUMNS * SIZE_IMAGE, ROWS * SIZE_IMAGE);
       // p.createCanvas(myJuego.columnGame*myJuego.sizeImage, myJuego.rowsGame*myJuego.sizeImage); // ancho y alto (el orden)
       // console.log("Filas :", myJuego.mapa.length);

        for (let i = 0; i < myJuego.mapa.length; i++) { //entro en i y j
            for (let j = 0; j < myJuego.mapa[i].length; j++) {

               /*
                     Puede ser de la forma de arriba o esta....

                    for (let i = 0; i < myJuego.mapa.length; i++) { //entro en i y j
                    for (let j = 0; j < myJuego.mapa[i].length; j++) {
               */

                if (myJuego.mapa[i][j] === 1) {
                  //  console.log("Añado roca en fila, ", i);
                   // console.log("Añado roca en columna , ", j);
                    arrayRocasMapa.push(new Roca(myJuego.sizeImage * j, myJuego.sizeImage * i)); //

                } else {
                   // console.log("No hay roca");
                }
             if (myJuego.mapa[i][j] === 0) {

                    arrayComidaMapa.push(new Comida(myJuego.sizeImage * j, myJuego.sizeImage * i)); //

                } else {
                    // console.log("No hay comida");
                }

            }//cierro j
        }// cierro i


    }


    p.draw = function() { //
        // clear(); // le quita el rastro
        p.background(15);
      //  console.log("estoy en draw");
        for (let i = 0; i < arrayRocasMapa.length; i++) {

            arrayRocasMapa[i].showinstanceMode(p,imgRoca);
        }
       for (let s = 0; s < arrayComidaMapa.length; s++) {

            arrayComidaMapa[s].showinstanceMode(p,imgComida);
        }

    }
}
var myp5 = new p5(s,'myContainer');