import React from 'react';

function HomepageImage() {
    const url = 'https://kamilla.s3.eu-west-2.amazonaws.com/pinktree-whitebg.jpg';
    return (
        <img src={url} style={{ height: 100 }} alt='Main' />
    );
}

export default HomepageImage;