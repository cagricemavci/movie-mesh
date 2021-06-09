import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import UpComingMovies from '../components/movies/UpComingMovies';
import TopRatedMovies from '../components/movies/TopRatedMovies';

import PopularSeries from '../components/series/PopularSeries'
import UpComingSeries from '../components/series/UpComingSeries';
import TopRatedSeries from '../components/series/TopRatedSeries';

const Browse = () => {
  return (
    <BaseLayout>
      <h1>Browse movies: </h1>
      <PopularMovies />
      <UpComingMovies />
      <TopRatedMovies />
      <h1>Browse series: </h1>
      <PopularSeries />
      <UpComingSeries />
      <TopRatedSeries />
    </BaseLayout>
  );
};

export default Browse;