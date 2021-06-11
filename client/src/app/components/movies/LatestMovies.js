import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './LatestMovies.module.scss'


const LatestMovies = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=1`

    const [latestMovies, setLatestMovies] = useState([])

    useEffect(() => {
        fetchLatestMovies();
    }, [])

    const fetchLatestMovies = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setLatestMovies(data)
        } catch (error) {
            
        }
        
    }

    return (
        <div className={styles.LatestMovies}>
            <h2>Latest Movies:</h2>
            <Link to={`/movies/${latestMovies.id}`}>
                <p>{latestMovies.title}</p>
            </Link>
                <p>{latestMovies.overview}</p>
                {latestMovies.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${latestMovies.poster_path}`} alt={latestMovies.title}/>}
                {latestMovies.genres && latestMovies.genres.map(genre => (
                    <li key={genre.id}>
                        {genre.name}
                    </li>    
                ))}
          
        </div>
    )
}

export default LatestMovies
