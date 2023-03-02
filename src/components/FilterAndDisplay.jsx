import React, { useEffect, useState } from 'react';

const FilterAndDisplay = () => {
  const [toiletsResults, setToiletsResults] = useState([]);
  const [sexFilter, setSexFilter] = useState(null);
  const [bidetFilter, setBidetFilter] = useState(null);

  // on render, fetches all the toilets in database
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

  // changes the sexFilter state upon user selection
  const handleSexChange = (e) => {
    if (e.target.value === 'all sex') {
      setSexFilter(null);
    } else {
      setSexFilter(e.target.value);
    }
  };

  // changes the bidetFilter state upon user selection
  const handleBidetChange = (e) => {
    if (e.target.value === 'all bidets') {
      setBidetFilter(null);
    } else {
      setBidetFilter(e.target.value);
    }
  };

  return (
    <>
      <div className="m-28">
        <input
          className="block m-auto"
          type="text"
          label="hello"
          placeholder="location"
        />
        <button>Search</button>
        <br />
        <span>Sex</span>
        <select className="border-2 ml-2" onChange={handleSexChange}>
          <option value="all sex">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <span>Bidet</span>
        <select className="border-2 ml-2" onChange={handleBidetChange}>
          <option value="all bidets">all</option>
          <option value="manual">manual</option>
          <option value="automatic">automatic</option>
        </select>
      </div>
      <div className="bg-amber-300 grid grid-cols-3 gap-1 lg:gap-8">
        {toiletsResults &&
          toiletsResults
            .filter((item) => {
              if (sexFilter && item.sex !== sexFilter) {
                return false;
              }
              if (bidetFilter && item.bidet !== bidetFilter) {
                return false;
              }
              return true;
            })
            .map((item) => {
              return (
                <div>
                  <img
                    src={item.imgurl}
                    alt={item.location}
                    // width="300"
                    // className="m-auto"
                  />
                  <h3>{`${item.id} ${item.sex} ${item.bidet} ${item._location}`}</h3>
                  <h3>{`${item._address}`}</h3>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default FilterAndDisplay;
