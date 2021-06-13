import React, {useState, useEffect} from 'react';
import styles from './Search.module.scss';
import {Link} from 'react-router-dom';


const Search = (e) => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6";

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [search])

    const fetchData = async (e) => {
        if(search) {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`);
            const data = await response.json();
            data.results && setData(data.results);
        }
    }

    function handleChangeSearch(e) {
        const search = e.target.value
        setSearch(search)
    }

    return (
        <div className={styles.Search}>
            <input type="text" placeholder="find movie..." onChange={handleChangeSearch} value={search} />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.224" height="22.228" viewBox="0 0 22.224 22.228">
                    <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M21.922,19.218,17.594,14.89a1.041,1.041,0,0,0-.738-.3h-.708a9.025,9.025,0,1,0-1.563,1.563v.708a1.041,1.041,0,0,0,.3.738l4.328,4.328a1.038,1.038,0,0,0,1.472,0l1.229-1.229a1.047,1.047,0,0,0,0-1.476ZM9.029,14.586a5.556,5.556,0,1,1,5.556-5.556A5.553,5.553,0,0,1,9.029,14.586Z" fill="#f9f9f9"/>
                </svg>
            </button>
            <div className={styles.Search}>
                    {data.map(item => 
                    <Link key={item.id} to={`/movies/${item.id}`}>
                        {item.title}
                    </Link>)}
            </div>
        </div>
    )
}

export default Search