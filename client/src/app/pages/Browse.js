import React, { useState } from "react"
import { BaseLayout } from '../layouts';

import Lists from '../components/lists/Lists';

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
        <div>
            <select onChange={handleChangeType}>
                <option>movies</option>
                <option>series</option>
            </select>

            <input type='number' onChange={handleChangeScore} value={scoreFilter} min='0' max='10'  step='1'/>
        </div>

        <h1>Browse</h1>
        <Lists type={typeFilter} score={scoreFilter}/>
      
    </BaseLayout>
  );
};

export default Browse;