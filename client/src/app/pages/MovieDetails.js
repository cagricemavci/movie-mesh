import { BaseLayout } from '../layouts';
import MovieDetail from '../components/movies/MovieDetail'


const MovieDetails = ({match}) => {
  return (
    <BaseLayout>
      <p>Movie detail</p>

      <MovieDetail matchData={match} />
    </BaseLayout>
  );
};

export default MovieDetails;