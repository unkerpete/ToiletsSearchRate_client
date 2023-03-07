import React from 'react';
import FilterAndDisplay from '../components/FilterAndDisplay';

const HomePage = ({ userName }) => {
  return (
    <div>
      {/* someinfo component here */}
      <div> some info component here </div>
      <FilterAndDisplay userName={userName} />
      {/* map component here */}
    </div>
  );
};

export default HomePage;
