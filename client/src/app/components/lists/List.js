import React from 'react'
import {Link} from 'react-router-dom'

import styles from './List.module.scss'

import {useFetch} from '../../hooks/useFetch'

const List = ({link, type, score}) => {
    const [data, isLoading, error] = useFetch(link);

    return (
        <div className={styles.List}>
            <div>
                 <h2>{link}</h2>
            </div>
            <ul>
                {data && data.filter(item => {return Number(item.vote_average) >= Number(score)}).map(d => (
                    <li key={d.id}>
                        <Link to={`/${type}/${d.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} alt={d.title && d.title || d.name}/>
                        </Link>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

export default List
