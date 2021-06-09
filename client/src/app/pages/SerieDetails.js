import { BaseLayout } from '../layouts';
import SerieDetail from '../components/series/SerieDetail'


const SerieDetails = ({match}) => {
  return (
    <BaseLayout>
      <p>Serie detail</p>

      <SerieDetail matchData={match} />
    </BaseLayout>
  );
};

export default SerieDetails;