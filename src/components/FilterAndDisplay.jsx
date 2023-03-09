import React, { useEffect, useState } from 'react';
import ToiletCards from './ToiletCards';

const FilterAndDisplay = ({ userName }) => {
  const [toiletsResults, setToiletsResults] = useState([]);
  const [sexFilter, setSexFilter] = useState(null);
  const [bidetFilter, setBidetFilter] = useState(null);
  const [locationAddressFilter, setlocationAddressFilter] = useState(null);

  useEffect(() => {
    getToilets();
  }, []);

  // on render, fetches all the toilets in database
  const getToilets = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/toilets/getalltoilets`);
      const json = await res.json();
      setToiletsResults(json);
    } catch (err) {
      alert(err.message);
    }
  };

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

  const handleLocationPostalChange = (e) => {
    setlocationAddressFilter(e.target.value);
  };

  return (
    <>
      <div className="filters-container m-8">
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          type="text"
          placeholder="Filter by location, address, or postal code"
          onChange={handleLocationPostalChange}
        />

        <div className="flex items-center justify-start mb-4 space-x-4 pl-3">
          <span className="text-gray-700">Sex:</span>
          <select
            className="border border-gray-300 rounded-md px-4 py-2"
            onChange={handleSexChange}
          >
            <option value="all sex">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex items-center justify-start mb-4 space-x-4">
          <span className="text-gray-700">Bidet:</span>
          <select
            className="border border-gray-300 rounded-md px-4 py-2"
            onChange={handleBidetChange}
          >
            <option value="all bidets">All</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>
      </div>
      {/* <div className="filters-container m-28">
        <input
          className="inline-block mx-auto bg-white border-2 border-gray-300 rounded-md py-2 px-4 w-96 mb-4"
          type="text"
          label="hello"
          placeholder="filter by location, address, or postal code"
          onChange={handleLocationPostalChange}
        />
        <br />
        <span className="mt-4 mr-2 text-gray-700">Sex</span>
        <select
          className="border-2 border-gray-300 rounded-md px-4 py-2 ml-2"
          onChange={handleSexChange}
        >
          <option value="all sex">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <span className="mt-4 mr-2 text-gray-700">Bidet</span>
        <select
          className="border-2 border-gray-300 rounded-md px-4 py-2 ml-2"
          onChange={handleBidetChange}
        >
          <option value="all bidets">all</option>
          <option value="manual">manual</option>
          <option value="automatic">automatic</option>
        </select>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {toiletsResults &&
          toiletsResults
            .filter((item) => {
              // if sexFilter has value, filter out(return false) items that does not have the same value
              if (sexFilter && item.sex !== sexFilter) {
                return false;
              }
              // if bidetFilter has value, filter out(return false) items that does not have the same value
              if (bidetFilter && item.bidet !== bidetFilter) {
                return false;
              }
              // if locationAddressFilter has value, transform the locationAddressFilter string into Regex and test that against location + address.
              if (
                locationAddressFilter &&
                !new RegExp(
                  `.*${locationAddressFilter.split('').join('.*')}.*`,
                  'i'
                ).test(item._location + item._address)
              ) {
                return false;
              }
              return true;
            })
            .map((item) => {
              return (
                <div
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out"
                  key={item.id}
                >
                  <ToiletCards item={item} userName={userName} />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default FilterAndDisplay;
