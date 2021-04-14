import React from 'react';

import classes from './Modal.module.css';

const modal = (props) => {
    const cssClasses = [
        classes.Modal,
        props.show === 'entering' ? classes.ModalOpen : props.show === 'exiting' ? classes.ModalClosed : null
    ]
    console.log(props)


    const prevImgHandler = () => {
        console.log(props)
    }
    return (

            <div className={cssClasses.join(' ')}>
                <div className={classes.Close} onClick={props.closed}></div>
                <div className={classes.ArrowLeft} onClick={prevImgHandler}></div>
                <div><img src={props.pictureObj.selectedThumbSrc} alt="Girl in a jacket" className={classes.Image} /></div>
                <div className={classes.ArrowRight} onClick={props.nextSrcMethod}></div>
            </div>
        
    )
};

export default modal;