import { BaseLayout } from '../layouts';
import MovieDetail from '../components/movies/MovieDetail'


const MovieDetails = ({match}) => {
  return (
    <BaseLayout>
      <p>HOME PAGE</p>

      <MovieDetail matchData={match} />
    </BaseLayout>
  );
};

export default MovieDetails;