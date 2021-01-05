
const ROWS=4;
const COLUMNS=4;
const SIZE_IMAGE=32;

class Game {

    constructor(rowsGame,columnGame) {
        if (!arguments.length) {
            console.log("Game con cero argumentos");
            this.rowsGame = ROWS; /* O Puedo poner el número.. yo defino arriba la constante*/
            this.columnGame = COLUMNS;
            this.sizeImage = SIZE_IMAGE; //imagen
            //array bidimensional 0-> roca 1-> pasillo
            this.mapa = [
                [0, 0, 0, 1],
                [1, 0, 0, 0],
                [0, 0, 1, 0],
                [1, 0, 1, 1],
            ];
        } else if (arguments.length === 2) {
            console.log("Game con dos argumentos");
            this.rowsGame = rowsGame;
            this.columnGame = columnGame;
            this.sizeImage = SIZE_IMAGE;
            this.mapa =[];
            for (let i = 0; i < rowsGame; i++) {
                let fila =[];
                for (let j = 0; j < columnGame; j++) {

                    let num = Math.random(1,9)*10 ;
                    console.log("Numero aleatorio asigandao; ", num);
                    fila.push(num);
                } //cierro j
                this.mapa.push(fila);
            }//cierro i
            this.imprimirMapa();


        } else {
            console.log("Número de argumentos no valido");

        }
    }//cierro constructor
        imprimirMapa()
        {
            console.log("[");
            for (let i = 0; i < this.mapa.length; i++) { //entro en i y j
                console.log("[");
                for (let j = 0; j < this.mapa.length; j++) {
                    let str = this.mapa[i][j] + ",";
                    console.log(str);

                }//cierro j
                console.log("]");
            }// cierro i
            console.log("]");
        } //cierro imprimirmapa

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }



}