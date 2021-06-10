import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './PopularSeries.module.scss'


const PopularSeries = ({score}) => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(async () => {
        fetchPopularSeries();
    }, [score])

    const [popularSeries, setPopularSeries] = useState([])


    const fetchPopularSeries = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            const scoreFiltered = await filterScore(data.results)
            setPopularSeries(scoreFiltered)
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
