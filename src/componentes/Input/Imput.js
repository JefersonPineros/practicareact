import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import styles from './Input.module.css';

function InputFormulario() {
    return (
        <Grid className={styles.input_prueba} sm={12}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    labelWidth={60}
                />
            </FormControl>
        </Grid>
    );
}
export default InputFormulario;