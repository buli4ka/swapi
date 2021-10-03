import React from 'react';
import {Link} from "react-router-dom";

import styles from './List.module.css'

export const List = ({entity}) => {
    const name = entity.name ? entity.name : entity.title
    return (
        <article className={styles.article}>
            <div>
                <Link className={styles.link} to={process.env.REACT_APP_CLIENT_PERSON + name}><h1>{name}</h1></Link>
            </div>
        </article>
    );
};

