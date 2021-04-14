import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    imgZoomed: {
        maxHeight: '80vh'
    },
    title: {
        textAlign: 'center'
    },
    modal: {
        padding: '10px'
    }
}));

function PhotoCarousel(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    // change the sequence of the array
    function reorder(data, index) {
        return data.slice(index).concat(data.slice(0, index))
    }
    const sortedItems = reorder(props.items, props.clicked)

    const handleClose = () => {
        setOpen(false);
        props.close()
    };

    return (
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <Carousel indicators={false} timeout={300}>
                {
                    sortedItems.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </Backdrop>
        
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.modal}>
            <img className={classes.imgZoomed} src={props.item.src} alt={props.item.title} />
            <p className={classes.title}>{props.item.title}</p>
        </Paper>
    )
}

export default PhotoCarousel