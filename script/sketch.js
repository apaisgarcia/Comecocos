
var imgRoca;
var imgPacman;
const s = (p) => {

    var arrayRocasMapa = []; // esto es como un new array
    var myMapa = new Game(); // si hago yo el array
    var myMapa2 = new Game(10, 10); //aray aleatorio


     p.preload = function() { // cargar antes de comenzar img = loadImage("images/pacman32.png");k
        imgPacman = p.loadImage("images/pacman32.png");
        imgRoca = p.loadImage("images/roca.jpg");
    }

    p.setup = function() { //crear la pantalla

       // p.createCanvas(COLUMNS * SIZE_IMAGE, ROWS * SIZE_IMAGE);
        p.createCanvas(myMapa2.columnGame*myMapa2.sizeImage, myMapa2.rowsGame*myMapa2.sizeImage);
        console.log("Filas :", myMapa.mapa.length);

        for (let i = 0; i < myMapa2.mapa.length; i++) { //entro en i y j
            for (let j = 0; j < myMapa2.mapa.length; j++) {
                if (myMapa2.mapa[i][j] === 1) {
                    console.log("Añado roca en fila, ", i);
                    console.log("Añado roca en columna , ", j);
                    arrayRocasMapa.push(new Roca(myMapa2.sizeImage * j, myMapa2.sizeImage * i)); //

                } else {
                    console.log("No hay roca");
                }


            }//cierro j
        }// cierro i
    }


    p.draw = function() { //
        // clear(); // le quita el rastro
        p.background(70);
        console.log("estoy en draw");
        for (let i = 0; i < arrayRocasMapa.length; i++) {
          arrayRocasMapa[i].show(p);
        }


    }
}
var myp5 = new p5(s,'myContainer');