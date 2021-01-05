


var arrayRocasMapa=[]; // esto es como un new array
var myMapa=new Game();
var myMapa2=new Game(10,20);
var imgRoca;
var imgPacman;

function preload(){ // cargar antes de comenzar img = loadImage("images/pacman32.png");k
 imgPacman=loadImage("images/pacman32.png");
 imgRoca=loadImage("images/roca.jpg");
}
function setup() { //crear la pantalla

    createCanvas(COLUMNS * SIZE_IMAGE, ROWS * SIZE_IMAGE);

    console.log("Filas :" , myMapa.mapa.length);

    for (let i = 0; i < myMapa.mapa.length; i++) { //entro en i y j
        for (let j = 0; j < myMapa.mapa.length; j++) {
            if (myMapa.mapa[i][j] === 1) {
                console.log("Añado roca en fila, ", i);
                console.log("Añado roca en columna , ", j);
                arrayRocasMapa.push(new Roca(myMapa.sizeImage * j, myMapa.sizeImage * i)); //

            } else {
                console.log("No hay roca");
            }


        }//cierro j
    }// cierro i

}

    function draw() { //
       // clear(); // le quita el rastro
        background(20);
        console.log("estoy en draw");
        for(let i= 0; i < arrayRocasMapa.length; i++){
            arrayRocasMapa[i].show();
        }





}
