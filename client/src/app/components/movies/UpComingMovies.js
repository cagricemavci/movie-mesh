import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './UpComingMovies.module.scss'


const UpComingMovies = ({score}) => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchUpComingMovies();
    }, [score])

    const [upComingMovies, setUpComingMovies] = useState([])

    const fetchUpComingMovies = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            const scoreFiltered = await filterScore(data.results)
            setUpComingMovies(scoreFiltered)
        } catch (error) {
            
        }
    }   

    const filterScore = async (list) => {
        try {
            if (score) {
                return list.filter(item => {return Number(item.vote_average) >= Number(score)})
            } else {
                return list
            }
        } catch (error) {
            return list
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
