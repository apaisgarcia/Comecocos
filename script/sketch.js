
const s = (p) => {
    const FRAMERATE = 30;
    const HEIGHT_TEXT = 100;
    var pacmanprueba = new Pacman(0, 0);
    var imgRoca;
    var imgComida;
    var imgPacman;
    var imgPacman2;
    var imgPacman3;
    var imgPacman4;
    var imgCerezas;
    var arrayRocasMapa = [];
    var arrayComidaMapa = [];
    var arrayCerezasMapa = []; // esto es como un new array
    var timer=30;


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
        imgCerezas = p.loadImage("images/cerezas.png");


        // console.log("estoy en preload");
    }



    p.setup = function () {
        // console.log("estoy en setup");

        //p.createCanvas(COLUMNS * SIZE_IMAGE, ROWS * SIZE_IMAGE);
        if (localStorage.getItem('nombreJugador') != null &&  localStorage.getItem('nombreJugador') != "" && localStorage.getItem('mailJugador') != null  && localStorage.getItem ('mailJugador') !=""){

            permitirPartida=1;

            p.createCanvas(myJuego.columnGame * myJuego.sizeImage, myJuego.rowsGame * myJuego.sizeImage + HEIGHT_TEXT); // ancho y alto (el orden)
            // console.log("Filas :", myJuego.mapa.length);
            myPacman.direction = 1;
            llenarMapa();

            dificultad(localStorage.getItem("dificultadJugador"));
        }else{
            permitirPartida=0;
            alert(
                " Debes configurar el Usuario \n"



            );
            console.log(" No usuario");
            //p.noLoop();
        }


        //  p.frameRate(FRAMERATE); //60
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
        for (let x = 0; x < arrayRocasMapa.length; x++) {
            myPacman.testCollide(p, arrayRocasMapa[x]);
            //console.log ("estoy en array Rocas");
        }
        for (let w = 0; w < arrayComidaMapa.length; w++) {
            if (myPacman.testeatfood(p, arrayComidaMapa[w])) {
                myPacman.score = myPacman.score + arrayComidaMapa[w].score;
                arrayComidaMapa.splice(w, 1);

                console.log("Puntuacion", myPacman.score);
            }
        }
        for (let t = 0; t < arrayCerezasMapa.length; t++) {
            if (myPacman.testeatCereza(p, arrayCerezasMapa[t])) {
                myPacman.score = myPacman.score + arrayCerezasMapa[t].score;
                arrayCerezasMapa.splice(t, 1);
                if(myPacman.lives<3){ //doy una vida más si tienes menos de tres vidas
                    myPacman.lives ++;

                }


                // console.log("Puntuación con cerezas",myPacman.score);
            }

            console.log("Puntuacion Final " + myPacman.score);

        }
        direccionPacman(); //imagen del pacman
        pantallaPuntuar();

        if ((p.frameCount % 60 === 0) && timer >= 0) {
            timer--;
        }
        comprobarDerrota();


        comprobarVictoria();



    }//CIERRE DRAW
    function llenarMapa() {
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
                  //  console.log("No hay cerezas");
                }
            }//cierro j
        }// cierro i
    }

    function pantallaPuntuar() {

        p.textSize(32);
        p.text("Score", 75, 550);
        p.fill('green');
        p.text(myPacman.score, 270, 550);
        p.fill(0, 102, 153);
        p.text("Time:", 375, 550);
        console.log("tiempo",timer);
        let strtimer=timer.toFixed(2);
       // console.log("tiempo str",strtimer);
        p.text(timer, 550, 550);
        p.fill('green');
        p.text("Lives", 375, 600);
        p.text(myPacman.lives, 475, 600);
    }

    function comprobarVictoria() {

        if (arrayCerezasMapa.length === 0 && arrayComidaMapa.length === 0 && myPacman.lives >= 0 && timer >= 0) {
          //  console.log("Ganaste");
            //p.noloop();
            let opcion = confirm("FELICIDADES , HAS GANADO !!! \n" +"PUNTUACIÓN : "+ myPacman.score );
            reiniciar();


        }
    }
    function dificultad (diff) {

        switch ( diff) {
            case 1:
                timer = 40;
                break;
            case 2:
                timer = 30;
                break;
            case 3:
                timer = 20;
                break;
        }

    }
    function reiniciar() {

        p.noLoop();
        p.clear();
        llenarMapa();
        timer = 30;
        myPacman.lives=3;
        p.loop();
        myPacman.score=0;



    }

    function comprobarDerrota() {
        if (timer < 0) {


            if(myPacman.lives>0){
                myPacman.lives --;
                let opcion = confirm("TE QUEDAN " + myPacman.lives + " VIDAS");
                timer=30;

            }
            else{
                let opcion2 = confirm("DERROTA FINAL !!! \n" +"PUNTUACIÓN : "+ myPacman.score );
                reiniciar();

            }

            //reinicio(); // pacmancoor , llenar mapa (funcion arriba),tiempo máximo -z loop (arrancar juego)
            // reiniciar();
        }
    }


    p.keyPressed = function () {
        p.noLoop();
        let direccion = 0;
        pacmanprueba.coordX = myPacman.coordX;
        pacmanprueba.coordY = myPacman.coordY;
        pacmanprueba.speed = myPacman.speed;
        pacmanprueba.direction = myPacman.direction;
        switch (p.keyCode) {
            case p.RIGHT_ARROW:
                pacmanprueba.direction = 1;
                pacmanprueba.coordX = pacmanprueba.coordX + pacmanprueba.speed;
                console.log("flecha drch presionada");
                break;
            case p.LEFT_ARROW:
                pacmanprueba.direction = 2;
                pacmanprueba.coordX = pacmanprueba.coordX - pacmanprueba.speed;
                console.log("flecha izq presionada");
                break;
            case p.UP_ARROW:
                pacmanprueba.direction = 3;
                pacmanprueba.coordY = pacmanprueba.coordY - pacmanprueba.speed;

                console.log("flecha arriba presionada");
                break;
            case p.DOWN_ARROW:
                pacmanprueba.direction = 4;
                pacmanprueba.coordY = pacmanprueba.coordY + pacmanprueba.speed;
                //  moverPacman();
                console.log("flecha abajo presionada");
                break;

        }

        let resultado = comprobarpacman(pacmanprueba);
        if (resultado === 0) {
            console.log("correcto");
            // myPacman=pacmanprueba;
            myPacman.coordX = pacmanprueba.coordX;

            myPacman.coordY = pacmanprueba.coordY;
            myPacman.speed = pacmanprueba.speed;
            myPacman.direction = pacmanprueba.direction;
        } else {
            console.log("incorrecto");
        }
        console.log("resultado :", resultado);
        p.loop();
    }

    function comprobarpacman(pc) {

        if ((pc.coordX >= 0) && (pc.coordX < myJuego.columnGame * myJuego.sizeImage)) {

            console.log("x correcta");
            if ((pc.coordY >= 0) && (pc.coordY < myJuego.rowsGame * myJuego.sizeImage)) {
                console.log(" y correcta");
                return 0;
            } else {
                console.log(" error en las y");
                return 1;
            }
        } else {
            console.log(" incorrecto x");
            return 2;

        }

    }

    function direccionPacman() {  //imagen del pacman según la dirección
        switch (myPacman.direction) { // dirección pacman imagen

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
}
var myp5 = new p5(s,'myContainer');