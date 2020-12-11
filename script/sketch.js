var x=0;
var map = new Mapa();

function preload(){ // cargar antes de comenzar
 //img = loadImage("images/pacman32.png");k
 imgPacman=loadImage("images/pacman32.png");
}
function setup(){ //crear la pantalla
    let myCanvas;
    myCanvas = createCanvas(128, 128);
  background(50);

   image(imgPacman, 0,0);
}
function draw(){ //
  clear(); // le quita el rastro
  background(20);

  /*for(let i=0;i < maze.length ;i++){
      console.log(maze.length);
    if (maze.indexOf(1))
    {
        console.log("ladrillo");
    }else{
        console.log("libre");
    }



    }*/
      x=x+1; // para ir avanzando  si pongo +4 tiene más velocidad


  image(imgPacman, x ,0); //si en el cero pongo x baja de lado
}
