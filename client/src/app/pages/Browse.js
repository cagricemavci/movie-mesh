import React, { useState } from "react"
import { BaseLayout } from '../layouts';

import Lists from '../components/lists/Lists';
import HeroImage from "../components/layout/HeroImage";
import styles from './Browse.module.scss';

const Browse = () => {
    const [typeFilter, setTypeFilter] = useState('movies');
    const [scoreFilter, setScoreFilter] = useState('');

    function handleChangeType(e) {
        const type = e.target.value
        setTypeFilter(type);
    }

    function handleChangeScore(e) {
        const score = e.target.value
        setScoreFilter(score.replace("/\D"+"/g", ""))
    }

  return (
      <BaseLayout>
    <HeroImage />
        <div className={styles.Browse}>

            <label>Filter: movie/serie</label>
            <select onChange={handleChangeType}>
                <option>movies</option>
                <option>series</option>
            </select>

            <label>Filter: score</label>
            <select onChange={handleChangeScore} value={scoreFilter}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
          
        </div>

        <Lists type={typeFilter} score={scoreFilter}/>
      
    </BaseLayout>
  );
};

export default Browse;