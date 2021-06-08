import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './PopularMovies.module.scss'


const PopularMovies = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchPopularMovies();
    }, [])

    const [popularMovies, setPopularMovies] = useState([])


    const fetchPopularMovies = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPopularMovies(data.results)
    }   

    return (
        <div className={styles.PopularMovies}>
            <ul>
                {popularMovies.map(movie => (
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
