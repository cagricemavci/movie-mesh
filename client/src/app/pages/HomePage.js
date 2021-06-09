import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import TrendingMovies from '../components/movies/TrendingMovies'

const HomePage = () => {
  return (
    <BaseLayout>
      <p>HOME PAGE</p>
      <PopularMovies />
      <TrendingMovies />
    </BaseLayout>
  );
};

export default HomePage;