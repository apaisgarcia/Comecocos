
const ROWS=16;
const COLUMNS=21;
const SIZE_IMAGE=32;

class Game {

    constructor(filas,columnas) {

         if (arguments.length === 0) {
             try {

                    console.log("Game con cero argumentos");
                    this.rowsGame = ROWS; /* O Puedo poner el número.. yo defino arriba la constante*/
                    this.columnGame = COLUMNS;
                    this.sizeImage = SIZE_IMAGE; //imagen
                    this.dificulty=1;
                    //array bidimensional 0-> roca 1-> pasillo
                    this.mapa = [
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1],
                        [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,0, 0, 0, 0, 0, 1],
                        [1, 6, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0,1, 1, 0, 0, 1, 1],
                        [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 2, 1,0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 1, 0, 1],
                        [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0,0, 0, 0, 1],
                        [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0,1, 0, 0, 1],
                        [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1,0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1,0, 0, 0, 1, 1],
                        [1, 0, 1, 2, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0,0, 0, 0, 0, 1],
                        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,0, 1, 0, 1],
                        [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 1],
                        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,0, 0, 0, 1],
                        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1],
                    ];
             }catch (error) {
                 console.error("error en el constructor 0 argumentos");
             }
        }else if (arguments.length === 2) {
             try {
                 console.log("Game con dos argumentos");
                 this.rowsGame = filas;
                 this.columnGame = columnas;
                 this.sizeImage = SIZE_IMAGE;
                 this.mapa = [];
                 let i, j;
                 for (i = 0; i < filas; i++) {
                     let fila = [];
                     for (j = 0; j < columnas; j++) {

                         let num = Math.round(Math.random(0, 1) * 1); // numero aleatorio y redondeando (entre 0 y 3) sino aparecen muchas rocas
                         //console.log("Numero aleatorio asigandao; ", num);
                         fila.push(num);
                     } //cierro j
                     this.mapa.push(fila);
                 }//cierro i
                 console.log('i', i);
                 console.log('j', j);

                 // this.imprimirMapa();
             }catch (error){
                 console.error("error constructor 2 argumentos")
             }

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
        return Math.floor((Math.random() * (max - min +1)) + min);
    }



}