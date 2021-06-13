import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './PopularMovies.module.scss'

import {useFetch} from '../../hooks/useFetch'


const PopularMovies = ({score}) => {
    const [data, isLoading, error] = useFetch('movie/popular');
    

    return (
        <div className={styles.PopularMovies}>
             <h2>Popular movies:</h2>
            <ul>
                {data && data.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

export default PopularMovies
