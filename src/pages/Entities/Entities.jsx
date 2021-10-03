import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchEntities, selectAll, selectCount, selectError, selectStatus} from "../../store/entitiesSlice";
import {Preloader} from "../../components/Preloader/Preloader";
import {List} from "../../components/List/List";
import {Pagination} from "../../components/Pagination/Pagination";
import {useParams} from "react-router-dom";

import styles from './Entities.module.css'

export const Entities = () => {
    const Id = useParams().id
    const dispatch = useDispatch()
    const entities = useSelector(selectAll)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)
    const entitiesCount = useSelector(selectCount)
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (status === 'idle' && page && Id) {
            try {
                dispatch(fetchEntities([page, Id]))
            } catch (e) {
                console.log(e)
            }
        }
    }, [status, dispatch, page, Id])

    let content;
    if (status === 'loading') {
        return <Preloader/>
    } else if (status === 'success') {
        console.log(entities)
        content = entities.map((entity, index) => (
            <List key={index} entity={entity}/>
        ))
    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

    const changePage = (page) => {
        try {
            setPage(page)
            console.log(dispatch(fetchEntities([page, Id])))
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <h1>{Id}</h1>
            {content}
            <Pagination number={Math.ceil(entitiesCount / 10)} changePage={changePage}/>
        </div>
    );
};

