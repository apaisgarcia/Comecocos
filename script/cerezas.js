
const CEREZASCORE=7;
class Cerezas extends Gameobject {

    constructor(x, y) {
        super(x, y);
        this.score=CEREZASCORE;

    }

    showinstanceMode(p, imgCerezas) {
        p.image(imgCerezas, this.coordX, this.coordY);
    }
}