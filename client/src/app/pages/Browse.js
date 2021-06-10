import React, { useState } from "react"
import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import UpComingMovies from '../components/movies/UpComingMovies';
import TopRatedMovies from '../components/movies/TopRatedMovies';

import PopularSeries from '../components/series/PopularSeries'
import UpComingSeries from '../components/series/UpComingSeries';
import TopRatedSeries from '../components/series/TopRatedSeries';

const Browse = () => {
    const [typeFilter, setTypeFilter] = useState('movie');
    const [scoreFilter, setScoreFilter] = useState('');

    function handleChangeType(e) {
        const type = e.target.value
        setTypeFilter(type);
    }

    function handleChangeScore(e) {
        const score = e.target.value
        setScoreFilter(score.replace("/\D"+"/g", ""))
    }

  return (
    <BaseLayout>
        <div>
            <select onChange={handleChangeType}>
                <option>movie</option>
                <option>serie</option>
            </select>

            <input type='number' onChange={handleChangeScore} value={scoreFilter} min='0' max='10'  step='1'/>
        </div>

        {typeFilter === 'movie' && <h1>Browse movies: </h1> || <h1>Browse series: </h1>}
        {typeFilter === 'movie' && <PopularMovies score={scoreFilter}/> || <PopularSeries  score={scoreFilter} />}
        {typeFilter === 'movie' && <UpComingMovies  score={scoreFilter} /> ||  <UpComingSeries  score={scoreFilter} />}
        {typeFilter === 'movie' && <TopRatedMovies  score={scoreFilter} /> || <TopRatedSeries  score={scoreFilter} />}
      
    </BaseLayout>
  );
};

export default Browse;