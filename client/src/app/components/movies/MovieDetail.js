import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const MovieDetail = ({matchData}) => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const API_URL = `https://api.themoviedb.org/3/movie/${matchData.params.id}?api_key=${API_KEY}&language=en-US`
    
    useEffect(() => {
        fetchMovieDetail();
    }, [])

    const [movieDetail, setMovieDetail] = useState([])


    const fetchMovieDetail = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("data::::", data);
        setMovieDetail(data)
    }   
    
    return (
        <div>
            <p>{movieDetail.title}</p>
        </div>
    )
}

export default MovieDetail
