import React, {Component}  from 'react';

import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer'

class Layout extends Component{

    render () {
        return (
            <Aux>
                <Header />
                <Content />
                <Footer />
            </Aux>
        )
    }
}

export default Layout;