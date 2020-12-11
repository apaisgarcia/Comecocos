var x=0;
var mapajuego = new Mapa();

function preload(){ // cargar antes de comenzar
 //img = loadImage("images/pacman32.png");k
 imgPacman=loadImage("images/pacman32.png");
 imgRoca=loadImage("images/roca.jpg");
}
function setup(){ //crear la pantalla
    let myCanvas;
    myCanvas = createCanvas( COLUMNS*SIZE_IMAGE,ROWS*SIZE_IMAGE);
    image(imgPacman, 0,0);
}
function draw(){ //
  clear(); // le quita el rastro
  background(20);
   // console.log(mapajuego.maze.length);
    /*  for(let i=0;i < mapajuego.maze.length ;i++){
         console.log(maze.length);
      if (mapajuego.maze[i] === 1)
       {
           image(imagenRoca, ,0,);
       }
       {
           console.log("ladrillo");
       }else{
           console.log("libre");
       }



       }*/
      x=x+1; // para ir avanzando  si pongo +4 tiene más velocidad


  image(imgPacman, x ,0); //si en el cero pongo x baja de lado
}
