const ROWS=4;
const COLUMNS=10;
const SIZE_IMAGE=32;


class Mapa {

    maze = [0,0,0,1,
        1,1,0,0,
        0,0,0,0,
        1,1,1,1
    ]

    constructor(mapaNuevo) {
        this.maze = MapaNuevo;
    }

    get maze() {
        return this.maze;
    }

    set maze(value) {
        this.maze = value;
    }
}




