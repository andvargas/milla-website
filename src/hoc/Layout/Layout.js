import React, {Component}  from 'react';

import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

class Layout extends Component{
    render () {
        return (
            <Aux>
                <Header />
                <Content />
            </Aux>
        )
    }
}

export default Layout;