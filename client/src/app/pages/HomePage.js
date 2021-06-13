import { BaseLayout } from '../layouts';

import Lists from '../components/lists/Lists';
import HeroImage from "../components/layout/HeroImage";

const HomePage = () => {
  return (
    <BaseLayout>
        <HeroImage />
        <Lists type='movies' score="0"/>
    </BaseLayout>
  );
};

export default HomePage;
