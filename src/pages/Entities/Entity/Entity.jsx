import React, {useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectEntity} from "../../../store/entitiesSlice";
import styles from './Entity.module.css'

export const Entity = () => {
    const Id = useParams().id
    const [entityType] = useState([
        'people',
        'planets',
        'films',
        'species',
        'vehicles',
        'starships',
        'residents',
        'url',
        'homeworld',
        'characters'
    ])
    const entity = useSelector(state => selectEntity(state, Id))
    const history = useHistory()
    let content = [];
    if (!entity) {
        history.push('/')
    } else
        Object.keys(entity).forEach((i) => {
            if (!entityType.includes(i.toString())) {
                console.log(i)
                content.push(<li className={styles.listItem} key={i}>{entity[i]}</li>)
            }
        })


    return (
        <div className={styles.card}>
            <img
                src='https://i0.wp.com/itc.ua/wp-content/uploads/2019/12/star_wars_the_rise_of_skywalker_i00.jpg'
                alt="StarWars"
                style={{width: "100%"}}/>
            <div className={styles.container}>
                <ul>
                    {content.map(i => {
                        return (i)
                    })}
                </ul>


            </div>
        </div>
    );
};

