import React, { useEffect, useState } from 'react';

const FilterAndDisplay = () => {
  const [toiletsResults, setToiletsResults] = useState([]);

  const getToilets = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/toilets/getalltoilets`);
      const json = await res.json();
      console.log(json);
      setToiletsResults(json);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getToilets();
  }, []);

  return (
    <>
      <div className="m-28">
        <input type="text" label="hello" placeholder="location" />
        <button>filter</button>
      </div>
      <div className="m-28 bg-amber-300">
        results here
        {toiletsResults &&
          toiletsResults.map((item) => {
            return <h3>{item._location}</h3>;
          })}
      </div>
    </>
  );
};

export default FilterAndDisplay;
