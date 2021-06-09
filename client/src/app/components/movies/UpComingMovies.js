import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './UpComingMovies.module.scss'


const UpComingMovies = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchUpComingMovies();
    }, [])

    const [upComingMovies, setUpComingMovies] = useState([])

    const fetchUpComingMovies = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setUpComingMovies(data.results)
        } catch (error) {
            
        }
    }   

    return (
        <div className={styles.UpComingMovies}>
            <h2>UpComing Movies:</h2>
            <ul>
                {upComingMovies.map(movie => (
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

export default UpComingMovies
