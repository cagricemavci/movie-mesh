import React from 'react'
import List from './List'

const lists = ({type, score}) => {
    const lists = {
        movies: [
            'movie/popular', 'movie/top_rated', 'movie/upcoming'
        ],
        series:[
            'tv/popular','tv/top_rated','tv/on_the_air'
        ]
     }

    return (
        <div>
            {lists[type].map(link => <List type={type} link={link} score={score}/>)}
        </div>
    )
}

export default lists
