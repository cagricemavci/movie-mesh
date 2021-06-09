import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './TopRatedSeries.module.scss'


const TopRatedSeries = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchTopRatedSeries();
    }, [])

    const [topRatedSeries, setTopRatedSeries] = useState([])


    const fetchTopRatedSeries = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setTopRatedSeries(data.results)
    }   

    return (
        <div className={styles.TopRatedSeries}>
            <h2>TopRated Series:</h2>
            <ul>
                {topRatedSeries.map(serie => (
                    <li key={serie.id}>
                        <Link to={`/series/${serie.id}`}>
                            {serie.name}
                        </Link>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

export default TopRatedSeries
