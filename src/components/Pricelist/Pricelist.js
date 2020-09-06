import React from 'react';
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
    }
});

function createData(name, type, priceOriginal, pricePrint, shipping) {
    return { name, type, priceOriginal, pricePrint, shipping};
}

const rows = [
    createData('Phoenix of the Burning Forests', 'watercolour', 6000, 47, 24),
    createData('Magic Deer', 'watercolour', 5000, 37, 24),
    createData('Take off the Mask', 'watercolour', 5000.0, 29, 24),
    createData('Land of the Blue Volcanoes', 'watercolour', 5000, 67, 24),
    createData('Grace', 'acrylic', 8000, 49, 24),
    createData('Floating Dreams', 'watercolour', 5000, 49, 24),
    createData('Desire', 'graphite', 7000, 49, 24),
    createData('The Long Road', 'watercolour', 7000, 49, 24),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer className={classes.container} component={Paper}>
            <h3>Pricelist | <span className={classes.smallfont}>GBP/HUF</span></h3>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="right">Price original (£)</TableCell>
                        <TableCell align="right">Price print (£)</TableCell>
                        <TableCell align="right">Shipping fee (£)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="right">{row.priceOriginal}</TableCell>
                            <TableCell align="right">{row.pricePrint}</TableCell>
                            <TableCell align="right">{row.shipping}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
