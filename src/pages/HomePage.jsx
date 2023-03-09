import React from 'react';
import FilterAndDisplay from '../components/FilterAndDisplay';

const HomePage = ({ userName }) => {
  return (
    <div>
      <FilterAndDisplay userName={userName} />
    </div>
  );
};

export default HomePage;
