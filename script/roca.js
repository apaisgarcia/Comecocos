class Roca extends Gameobject
{
    constructor(x,y){
        super(x,y);
    }

 show(){
        image(imgRoca,this.coordX,this.coordY);
 }
}