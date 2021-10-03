import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css'

export const Navbar = () => {


    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className={styles.navLink} style={{float: "left"}}
                         to={process.env.REACT_APP_CLIENT_HOME}>Star Wars</NavLink>





            </div>

        </nav>)


}
