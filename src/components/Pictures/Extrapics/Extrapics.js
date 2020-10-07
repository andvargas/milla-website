import React from 'react';

import Smallpic from '../Smallpic/Smallpic'

function Extrapics (props) {
    const filteredThumbnails = props.data.filter(extra => extra.method === props.paintMethod)
    filteredThumbnails.splice(0, 9);
    let thumbnails = filteredThumbnails.map(thumb => {
        return (
            <div style={{ paddingRight: '10px' }} key={thumb.id}>
            <Smallpic
                src={thumb.src}
                title={thumb.title}
                clicked={() => props.setMainImg(thumb.src)} />
            </div>
        )
    })

    return (
        <div className={props.className}>{thumbnails}</div>
        )
}


export default Extrapics;