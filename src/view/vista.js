import React, { useState } from "react";
import '../App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Boton from '../componentes/Boton/Button';
import InputFormulario from '../componentes/Input/Imput';
import { Calculadora } from '../controller/calculadora';

function Views() {
    const calcular = new Calculadora();

    const log = () => {
        console.log('Hola mundo');
    }
    
    return (
        <div className="App">
            <header>
                <Container maxWidth="lg">
                    <form>

                        <Grid container spacing={1}>
                            <InputFormulario value="" />
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Boton nameBoton="AC" event={log()}/>
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="CE" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="%" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="/" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3} >
                                <Boton nameBoton="7"> </Boton>
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="8" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="9" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="X" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Boton nameBoton="4" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="5" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="6" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="-" />
                            </Grid>

                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Boton nameBoton="1" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="2" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="3" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="+" />
                            </Grid>

                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Boton nameBoton="0" />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="." />
                            </Grid>
                            <Grid item xs={3}>
                                <Boton nameBoton="=" />
                            </Grid>

                        </Grid>
                    </form>
                </Container>
            </header>
        </div>

    );

}
export default Views;