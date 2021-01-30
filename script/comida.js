const  COMIDASCORE=5;
class Comida extends Gameobject
{
    constructor(x,y){
        super(x,y);
        this.score=COMIDASCORE;
    }
    /*show() {
       image(imgComida,this.coordX,this.coordY);
}*/
    showinstanceMode(p, imgComida) {
        p.image(imgComida,this.coordX,this.coordY);
    }

}