import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    container: {
        padding: 0,
        backgroundColor: '#E5E5E5',
        textAlign: "center"
    },
    smallfont: {
        fontSize: '0.7em',
    },
    initialBtn: {
        background: '#1E51AB',
        color: 'white'
    }
});


function createData(name, type, size, pricePrint, shipping) {
    return { name, type, size, pricePrint, shipping};
}

const rows = [
    createData('Phoenix of the Burning Forests', 'watercolour', '31.6 x 23.8', 6000, 1500),
    createData('Magic Deer', 'watercolour', '25.4 x 16.4', 5000, 1500),
    createData('Take off the Mask', 'acrylic', '23.8 x 29.8', 7000, 1500),
    createData('Land of the Blue Volcanoes', 'watercolour', '23.8 x 17.9', 5000, 1500),
    createData('Grace', 'acrylic', '40 x 60', 8000, 1500),
    createData('Floating Dreams', 'watercolour', '25.4 x 17.9', 5000, 1500),
    createData('Desire', 'graphite', '59 x 42', 7000, 1500),
    createData('The Way of the Falcon', 'graphite', '59 x 42', 7000, 1500),
    createData('The Long Road', 'watercolour', '23.8 x 17.9', 7000, 1500),
];

export default function SimpleTable() {
    const classes = useStyles();

    const [ currencyState, setCurrencyState ] = useState({
        currency: 'HUF',
        multiplier: 1,
        shippingFee: 1600,
        hufBtn: {
            background: '#1E51AB',
            color: 'white'
        },
        gbpBtn: {}
    })

    const currency = (huf) => (Math.round(huf * currencyState.multiplier));

    const gbp = () => setCurrencyState({ 
        currency: '£', 
        multiplier: 0.0026,
        gbpBtn: { background: '#1E51AB', color: 'white' },
        shippingFee: '£4 - 19'
    });
    const huf = () => setCurrencyState({
        currency: 'HUF',
        multiplier: 1,
        hufBtn: { background: '#1E51AB', color: 'white' },
        shippingFee: 1600
    });


    return (
        <TableContainer className={classes.container} component={Paper}>
            <h3>Pricelist <button style={currencyState.hufBtn} onClick={huf} type="button" >HUF</button> <button style={currencyState.gbpBtn} onClick={gbp} type="button">GBP (£)</button></h3>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="right">Size (cm)</TableCell>
                        <TableCell align="right">Price print ({currencyState.currency})</TableCell>
                        <TableCell align="right">Shipping fee </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                            <TableCell align="right">{currency(row.pricePrint)}</TableCell>
                            <TableCell align="right">{currencyState.shippingFee}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
