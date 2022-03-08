import React, { useContext } from 'react';

import { AppContext } from '../Context';

function Selection() {
  const { fetchEntrepreneur } = useContext(
    AppContext
  ) as unknown as AppContextType;

  const handleFetchEntrepreneur = () => {
    fetchEntrepreneur('HYUJH');
  };
  return (
    <div>
      <select onChange={handleFetchEntrepreneur}>
        <option>mklnoes</option>
        <option>ffbsjoze</option>
      </select>
    </div>
  );
}

export default Selection;
