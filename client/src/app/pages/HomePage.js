import { BaseLayout } from '../layouts';

import Lists from '../components/lists/Lists';

const HomePage = () => {
  return (
    <BaseLayout>
      <h1>HOME</h1>
      <Lists type='movies' />
    </BaseLayout>
  );
};

export default HomePage;
