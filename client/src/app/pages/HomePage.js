import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import TrendingMovies from '../components/movies/TrendingMovies'
import LatestMovies from '../components/movies/LatestMovies';
import {auth} from '../utilities/firebase'

const HomePage = () => {
    auth.createUserWithEmailAndPassword("cca@cca.inc", "wegotthisyouknow");
  return (
    <BaseLayout>
      <p>HOME PAGE</p>
      <PopularMovies />
      <LatestMovies />
      <TrendingMovies />
    </BaseLayout>
  );
};

export default HomePage;
