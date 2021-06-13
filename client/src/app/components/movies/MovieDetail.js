import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './MovieDetail.module.scss'

const MovieDetail = ({matchData}) => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const API_URL = `https://api.themoviedb.org/3/movie/${matchData.params.id}?api_key=${API_KEY}&language=en-US`
    const API_REVIEWS = `https://api.themoviedb.org/3/movie/${matchData.params.id}/reviews?api_key=${API_KEY}&language=en-US`
    const API_CREDITS = `https://api.themoviedb.org/3/movie/${matchData.params.id}/credits?api_key=${API_KEY}&language=en-US`
    
    const [movieDetail, setMovieDetail] = useState([])
    const [movieReviews, setMovieReviews] = useState([])
    const [movieCredits, setMovieCredits] = useState([])


    useEffect(() => {
        fetchMovieDetail();
        fetchMovieReviews();
        fetchMovieCredits();
    }, [])

    const fetchMovieDetail = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setMovieDetail(data)
        } catch (error) {
            
        }
    }

    const fetchMovieReviews = async () => {
        try {
            const response = await fetch(API_REVIEWS);
            const data = await response.json()
            setMovieReviews(data.results)
        } catch (error) {
            
        }
       
    }

    const fetchMovieCredits = async () => {
        try {
            const response = await fetch(API_CREDITS);
            const data = await response.json()
            setMovieCredits(data.cast)
        } catch (error) {
            
        }
       
    }
    
    return (
        <div className={styles.MovieDetail}>
            <div>
                <div>

                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt={movieDetail.title}/>
                </div>
                <div>
                    <h1>{movieDetail.title}</h1>
                    <p>{movieDetail.release_date}</p>
                    <p>{movieDetail.vote_average}</p>
                    <ul>
                        {movieDetail.genres && movieDetail.genres.map(genre => 
                            <li key={genre.id}>{genre.name}</li>
                        )}
                    </ul>
                </div>
            </div>

            <div>
                <h2>About</h2>
                <p>{movieDetail.overview}</p>
            </div>

            <div>
                <h2>Cast:</h2>
                <ul>
                    {movieCredits.map( (cast, index) => (
                        <li key={cast.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>
                            <p>{cast.name}</p>
                            <p>As {cast.character}</p>
                        </li>    
                    ))}
                </ul>
            </div>
           
            <div>
                <h2>reviews:</h2>
                <ul>
                    {movieReviews.map( (review, index) => (
                        <li key={index}>
                            <div>
                                <p>{review.author}</p>
                                <p>({review.author_details.rating}/10)</p>
                            </div>
                            <p>{review.content}</p>
                        </li>    
                    ))}
                </ul>
            </div>
            </div>
    )
}

export default MovieDetail
