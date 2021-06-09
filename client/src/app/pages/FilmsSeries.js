import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import UpComingMovies from '../components/movies/UpComingMovies';
import TopRatedMovies from '../components/movies/TopRatedMovies';

const FilmsSeries = () => {
  return (
    <BaseLayout>
      <h1>FilmsSeries</h1>
      <PopularMovies />
      <UpComingMovies />
      <TopRatedMovies />
    </BaseLayout>
  );
};

export default FilmsSeries;