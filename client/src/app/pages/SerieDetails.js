import { BaseLayout } from '../layouts';
import SerieDetail from '../components/series/SerieDetail'


const SerieDetails = ({match}) => {
  return (
    <BaseLayout>
      <SerieDetail matchData={match} />
    </BaseLayout>
  );
};

export default SerieDetails;