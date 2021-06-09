import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './UpComingSeries.module.scss'


const UpComingSeries = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/tv/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchUpComingSeries();
    }, [])

    const [upComingSeries, setUpComingSeries] = useState([])


    const fetchUpComingSeries = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setUpComingSeries(data.results)
        } catch (error) {
            
        }
       
    }   

    return (
        <div className={styles.UpComingSeries}>
            <h2>UpComing Series:</h2>
            <ul>
                {upComingSeries && upComingSeries.map(serie => (
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

export default UpComingSeries
