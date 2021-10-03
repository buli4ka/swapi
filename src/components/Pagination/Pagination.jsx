import React from 'react';
import styles from './Pagination.module.css'

export const Pagination = ({number, changePage}) => {
    let content = [];

    for (let i = 1; i <= number; i++) {
        content.push(<li onClick={e => {
            changePage(e.target.value)
        }}
                         key={i}
                         className={styles.list}
                         value={+i}>
            {i}</li>)
    }
    return (

        <ul>
            {content}
        </ul>


    )

}



