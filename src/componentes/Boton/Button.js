import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
// import { Calculadora } from '../../controller/calculadora';
import EventEmitter from "reactjs-eventemitter";

// const calcular = new Calculadora();


function Boton(props) {

    

    // const accion = (boton) => {
    //     console.log(boton);
    //     if (boton !== '' && boton !== null && boton !== undefined) {
    //         if (!isNaN(boton)) {
    //             calcular.ingresarValor(boton);
    //         } else {
    //             calcular.operacion(boton);
    //         }
    //     }
    // }

    return (
        <Button variant="contained" fullWidth="{true}" size="large" onClick={(event) => EventEmitter.emit( console.log(event), event)} color="primary">
            {props.nameBoton}
        </Button>
    );
}

export default Boton;