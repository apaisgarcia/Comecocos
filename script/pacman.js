const speed=32;
class Pacman extends Gameobject
{
    constructor(x,y){
        super(x,y);
        this.speed=32;
        this.lives=3; //esto son las vidas
        this.score=0; //son las vidas
        //este es el constructor
        this.direction=0; //(1: drch, 2: izq, 3: arriba, 4:abajo)
    }

//keypresed es la funcion para mover con la flecha
    showInstanceMode(p, imgPacman) {
        p.image(imgPacman,this.coordX,this.coordY);
    }
//keypresed es la funcion para mover con la flecha



//keypresed es la funcion para mover con la flecha

   moveRight(){

            this.coordX = this.coordX + speed;
            this.direction=1;
            console.log("avanzo derecha", this.coordX);
            //  this.direction=1;// pongo d

    }
    moveLeft(){


        this.coordX = this.coordX - speed;
        this.direction=2;
        console.log("avanzo izquierda", this.coordX);

    }


    moveUp(){ //mover arriba
        this.coordY=this.coordY-speed;
        this.direction=3;
    }
    moveDown(){ //mover abajo

        this.coordY=this.coordY+speed;
        this.direction=4;
    }
}