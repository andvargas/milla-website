import React, {Component}  from 'react';

import Aux from '../Aux/Aux';

import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer'
import Topnav from '../../components/Navigation/Topnav';
import classes from './Layout.module.css';
import Sidenav from '../../components/Navigation/Sidenav';

class Layout extends Component{

    render () {
        return (
            <Aux>
                <Topnav />
                <div className={classes.Layout}>
                    <Sidenav />
                    <Content />
                </div>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;