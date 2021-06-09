import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import UpComingMovies from '../components/movies/UpComingMovies';
import TopRatedMovies from '../components/movies/TopRatedMovies';

const Browse = () => {
  return (
    <BaseLayout>
      <h1>Browse</h1>
      <PopularMovies />
      <UpComingMovies />
      <TopRatedMovies />
    </BaseLayout>
  );
};

export default Browse;