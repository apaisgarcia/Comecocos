class Roca extends Gameobject
{
    constructor(x,y){
        super(x,y);
    }

 show(p) {
        p.image(imgRoca,this.coordX,this.coordY);
 }
}