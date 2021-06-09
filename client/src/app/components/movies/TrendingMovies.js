import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './TrendingMovies.module.scss'


const TrendingMovies = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchTrendingMovies();
    }, [])

    const [trendingMovies, setTrendingMovies] = useState([])


    const fetchTrendingMovies = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setTrendingMovies(data.results)
    }   

    return (
        <div className={styles.TrendingMovies}>
            <h2>Trending movies:</h2>
            <ul>
                {trendingMovies.map(movie => (
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

export default TrendingMovies
