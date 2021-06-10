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

    function handleChange(e) {
        const type = e.target.value
        setTypeFilter(type);
    }

  return (
    <BaseLayout>
        <select onChange={handleChange}>
            <option>movie</option>
            <option>serie</option>
        </select>

        {typeFilter === 'movie' && <h1>Browse movies: </h1> || <h1>Browse series: </h1>}
        {typeFilter === 'movie' && <PopularMovies /> || <PopularSeries />}
        {typeFilter === 'movie' && <UpComingMovies /> ||  <UpComingSeries />}
        {typeFilter === 'movie' && <TopRatedMovies /> || <TopRatedSeries />}
      
      {/* <h1>Browse movies: </h1>
      <PopularMovies />
      <UpComingMovies />
      <TopRatedMovies />
      <h1>Browse series: </h1>
      <PopularSeries />
      <UpComingSeries />
      <TopRatedSeries /> */}
    </BaseLayout>
  );
};

export default Browse;