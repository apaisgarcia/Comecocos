
const s = (p) => {
    var pacmanprueba=new Pacman(0,0);

    var imgRoca;
    var imgComida;
    var imgPacman;
    var imgPacman2;
    var imgPacman3;
    var imgPacman4;
    var imgCerezas;
    var arrayRocasMapa = [];
    var arrayComidaMapa = [];
    var arrayCerezasMapa=[]; // esto es como un new array

    var myJuego = new Game(); // si hago yo el array
   // var myJuego2 = new Game(18, 25); //aray aleatorio
    var myPacman = new Pacman(32, 64);

    p.preload = function () {

            imgPacman = p.loadImage("images/pacman32.png");
            imgPacman4 = p.loadImage("images/pacman32abajo.png");
            imgPacman3 = p.loadImage("images/pacman32arriba.png");
            imgPacman2 = p.loadImage("images/pacman32izq.png");
            imgRoca = p.loadImage("images/roca.png");
            imgComida = p.loadImage("images/comida.png");
            imgCerezas= p.loadImage("images/cerezas.png");



       // console.log("estoy en preload");
    }

    p.setup = function () {
       // console.log("estoy en setup");

        //p.createCanvas(COLUMNS * SIZE_IMAGE, ROWS * SIZE_IMAGE);
        p.createCanvas(myJuego.columnGame*myJuego.sizeImage, myJuego.rowsGame*myJuego.sizeImage); // ancho y alto (el orden)
        // console.log("Filas :", myJuego.mapa.length);
    myPacman.direction =1;
        for (let i = 0; i < myJuego.mapa.length; i++) { //entro en i y j
            for (let j = 0; j < myJuego.mapa[i].length; j++) {

                if (myJuego.mapa[i][j] === 1) {
                    //  console.log("Añado roca en fila, ", i);
                    // console.log("Añado roca en columna , ", j);
                    arrayRocasMapa.push(new Roca(myJuego.sizeImage * j, myJuego.sizeImage * i));

                } else {
                   // console.log("No hay roca");
                }
                if (myJuego.mapa[i][j] === 0) {

                    arrayComidaMapa.push(new Comida(myJuego.sizeImage * j, myJuego.sizeImage * i));

                } else {
                   // console.log("No hay comida");
                }
                if (myJuego.mapa[i][j] === 2) {

                    arrayCerezasMapa.push(new Cerezas(myJuego.sizeImage * j, myJuego.sizeImage * i));

                } else {
                     console.log("No hay cerezas");
                }
            }//cierro j
        }// cierro i
    }


    p.draw = function () {

        p.background(15);

        for (let i = 0; i < arrayRocasMapa.length; i++) {

            arrayRocasMapa[i].showinstanceMode(p, imgRoca);
        }

        for (let s = 0; s < arrayComidaMapa.length; s++) {

            arrayComidaMapa[s].showinstanceMode(p, imgComida);
        }
        for (let r = 0; r < arrayCerezasMapa.length; r++) {

            arrayCerezasMapa[r].showinstanceMode(p, imgCerezas);
        }
        for(let x=0; x < arrayRocasMapa.length;x++){
            myPacman.testCollide(p,arrayRocasMapa[x]);
            //console.log ("estoy en array Rocas");
        }
        for(let w=0; w< arrayComidaMapa.length;w++) {
            if (myPacman.testeatfood(p, arrayComidaMapa[w])) {
                arrayComidaMapa.splice(w, 1);

                myPacman.score = myPacman.score + arrayComidaMapa[w].score;
                console.log("Puntuacion", myPacman.score);


            }

        }

       for(let t=0; t < arrayCerezasMapa.length;t++){
            if(myPacman.testeatCereza(p,arrayCerezasMapa[t])){
                arrayCerezasMapa.splice(t,1);
               myPacman.score= myPacman.score + arrayCerezasMapa[t].score
                console.log("Puntuación con cerezas",myPacman.score);
            }



        }
        direccionPacman(); //imagen del pacman





    }//CIERRE DRAW

    p.keyPressed = function () {
         let direccion = 0;
         pacmanprueba.coordX=myPacman.coordX;
         pacmanprueba.coordY=myPacman.coordY;
         pacmanprueba.speed=myPacman.speed;
         pacmanprueba.direction=myPacman.direction;
            switch (p.keyCode){
                case p.RIGHT_ARROW:
                    pacmanprueba.direction=1;
                    pacmanprueba.coordX=pacmanprueba.coordX+pacmanprueba.speed;
                    console.log("flecha drch presionada");
                    break;
                case p.LEFT_ARROW:
                    pacmanprueba.direction=2;
                    pacmanprueba.coordX=pacmanprueba.coordX-pacmanprueba.speed;
                    console.log("flecha izq presionada");
                    break;
                case p.UP_ARROW:
                    pacmanprueba.direction=3;
                    pacmanprueba.coordY=pacmanprueba.coordY-pacmanprueba.speed;

                    console.log("flecha arriba presionada");
                    break;
                case p.DOWN_ARROW:
                    pacmanprueba.direction=4;
                    pacmanprueba.coordY=pacmanprueba.coordY+pacmanprueba.speed;
                    //  moverPacman();
                    console.log("flecha abajo presionada");
                    break;

            }

     let resultado=comprobarpacman(pacmanprueba);
        if(resultado===0){
            console.log("correcto");
           // myPacman=pacmanprueba;
            myPacman.coordX=pacmanprueba.coordX;

            myPacman.coordY=pacmanprueba.coordY;
            myPacman.speed=pacmanprueba.speed;
            myPacman.direction=pacmanprueba.direction;
        }else {
            console.log("incorrecto");
        }
        console.log("resultado :" ,resultado);

    }
    function comprobarpacman (pc) {

        if ((pc.coordX  >= 0 ) && (pc.coordX < myJuego.columnGame* myJuego.sizeImage)) {

            console.log("x correcta");
            if((pc.coordY  >= 0 ) && (pc.coordY < myJuego.rowsGame* myJuego.sizeImage)) {
                console.log(" y correcta");
                return 0;
            }
            else {
                console.log(" error en las y");
                return 1;
            }
        } else {
            console.log(" incorrecto x");
            return 2;

        }

}
    function direccionPacman(){  //imagen del pacman según la dirección
        switch (myPacman.direction){ // dirección pacman imagen

            case 1:
                myPacman.showInstanceMode(p, imgPacman);
                break;
            case 2:
                myPacman.showInstanceMode(p, imgPacman2);
                break;
            case 3:
                myPacman.showInstanceMode(p, imgPacman3);
                break;
            case 4:
                myPacman.showInstanceMode(p, imgPacman4);
                break;
        }
    }





/*
function moverPacman ()
    {
        switch (myPacman.direction)
        {
         case 1: {
             //Derecha
                     if ((myPacman.coordX + myPacman.speed) >= (myJuego.columnGame * myJuego.sizeImage)) {


                     } else if ((myPacman.coordX + myPacman.speed) < 0) {
                         console.log("me paso en el eje izquierda");
                     } else {
                         console.log("correcto");
                         myPacman.moveRight();
                         myPacman.showInstanceMode(p, imgPacman);

                     }
                     break;
                 }

         case 2: {
             //Izquierda
                     if ((myPacman.coordX - myPacman.speed) > (myJuego.columnGame * myJuego.sizeImage)) {

                         console.log("me paso en el eje derecho");
                     } else if ((myPacman.coordX - myPacman.speed) < 0) {
                         console.log("me paso en el eje izquierda");
                     } else {
                         console.log("correcto");
                         myPacman.moveLeft();
                         myPacman.showInstanceMode(p, imgPacman);

                     }
                     break;
                 }
            case 3: {
                //Mover arriba
                if ((myPacman.coordY + myPacman.speed) <= myJuego.sizeImage) {

                    console.log("me paso arriba");
                } else if ((myPacman.coordY + myPacman.speed) < 0) {
                    console.log("me paso abajo");
                } else {
                    console.log("correcto" ,myPacman.coordY);
                    myPacman.moveUp();
                    myPacman.showInstanceMode(p, imgPacman);

                }
                break;
            }

         case 4: {
                //Mover abajo
                if ((myPacman.coordY - myPacman.speed) < 0) {

                    console.log("me paso ");
                } else if ((myPacman.coordY+myPacman.speed) >= (myJuego.rowsGame*myJuego.sizeImage)) {
                    console.log("me paso ");
                } else {
                    console.log("correcto abajo" ,myPacman.coordY);
                    myPacman.moveDown();
                    myPacman.showInstanceMode(p, imgPacman);

                }
                break;
            }

         default:
            console.log("nada");

        } //Acabo swith

    }*/
}

var myp5 = new p5(s,'myContainer');