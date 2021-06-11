import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './TrendingSeries.module.scss'


const TrendingSeries = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/tv/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchTrendingSeries();
    }, [])

    const [trendingSeries, setTrendingSeries] = useState([])


    const fetchTrendingSeries = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setTrendingSeries(data.results)
        } catch (error) {
            
        }
    
    }   

    return (
        <div className={styles.TrendingSeries}>
            <h2>Trending Series:</h2>
            <ul>
                {trendingSeries.map(serie => (
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

export default TrendingSeries
