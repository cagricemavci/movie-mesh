import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'

const HomePage = () => {
  return (
    <BaseLayout>
      <p>HOME PAGE</p>
      <PopularMovies />
    </BaseLayout>
  );
};

export default HomePage;