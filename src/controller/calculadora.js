import React from "react";

export class Calculadora {

    constructor() { }

    operacion(accion) {
        console.log('No es un numero');
        return null;
    }

    ingresarValor(numero) {

        switch (numero) {
            case '1':
                console.log('Boton 1');
                break;
            case '2':
                console.log('Boton 2');
                break;
            case '3':

                break;
            case '4':

                break;
            case '5':

                break;
            case '6':

                break;
            case '7':

                break;
            case '8':

                break;
            case '9':

                break;

            default:
                break;
        }
        return null;
    }

}