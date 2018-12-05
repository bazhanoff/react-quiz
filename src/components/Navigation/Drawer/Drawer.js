import React, {Component} from 'react';
import classes from './Drawer.css';

const links = [1, 2, 3];

class Drawer extends Component {

    renderLinks = () => {
        links.map((link) => {
            return (
                <li><a href={'#0'}>link</a></li>
            )
        })
    };

    render() {
        return (
            <nav className={classes.Drawer}>
                <ul>
                    {this.renderLinks}
                </ul>
            </nav>
        )
    }
}

export default Drawer;