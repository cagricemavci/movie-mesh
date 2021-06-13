import React from 'react'
import {Link} from 'react-router-dom'

import styles from '../movies/PopularMovies.module.scss'

import {useFetch} from '../../hooks/useFetch'

const List = ({link, type, score}) => {
    const [data, isLoading, error] = useFetch(link);
    
    return (
        <div className={styles.PopularMovies}>
            <h2>{link}</h2>
            <ul>
                {data && data.filter(item => {return Number(item.vote_average) >= Number(score)}).map(d => (
                    <li key={d.id}>
                        <Link to={`/${type}/${d.id}`}>
                            {d.title && d.title || d.name}
                        </Link>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

export default List
