import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './PopularSeries.module.scss'


const PopularSeries = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(async () => {
        fetchPopularSeries();
    }, [])

    const [popularSeries, setPopularSeries] = useState([])


    const fetchPopularSeries = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setPopularSeries(data.results)
        } catch (error) {
            
        }
      
    }

    return (
        <div className={styles.PopularSeries}>
             <h2>Popular Series:</h2>
            <ul>
                {popularSeries.map(serie => (
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

export default PopularSeries
