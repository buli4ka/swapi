import React, {useState} from 'react';
import styles from './Main.module.css'
import {useHistory} from "react-router-dom";

export const Main = () => {
    const history = useHistory()
    const [entityType] = useState([
        'people',
        'planets',
        'films',
        'species',
        'vehicles',
        'starships'
    ])


    return (
        <div>
            <h1>Star Wars Entities</h1>
            <ul>
                {entityType.map((type, index) => {
                    return (<li key={index} className={styles.listItem} onClick={() => {
                        history.push(process.env.REACT_APP_CLIENT_HOME + type)
                        window.location.reload()


                    }}>{type}</li>)
                })}
            </ul>

        </div>
    );
};


