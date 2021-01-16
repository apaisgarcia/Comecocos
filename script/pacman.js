const speed=32;
class Pacman extends Gameobject
{
    constructor(x,y){
        super(x,y);

        this.lives=3; //esto son las vidas
        this.score=0; //son las vidas
        // this.direction=0; // para cada direccdion (1,2..)
    }
    showInstanceMode(p, imgPacman) {
        p.image(imgPacman,this.coordX,this.coordY);
    }

//keypresed es la funcion para mover con la flecha

    moveRight(){
        {
            this.coordX = this.coordX + speed;
            console.log("avanzo derecha", this.coordX);
            //  this.direction=1;// pongo d
        }

    }
    moveLeft(){

        this.coordX = this.coordX - speed;
        console.log("avanzo izquierda", this.coordX);

    }
    moveDown(){ //mover abajo
        this.coordY=this.coordY+speed;
    }
    moveUp(){ //mover arriba
        this.coordY=this.coordY-speed;
    }
}