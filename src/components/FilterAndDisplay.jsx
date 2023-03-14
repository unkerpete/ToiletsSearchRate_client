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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="mt:0 flex items-center justify-center">
            <a
              href="https://www.kohler.co.in/browse/Bathroom/Toilets"
              target="_blank"
            >
              <img
                src="https://iili.io/HXCDp6b.jpg"
                alt=""
                className="w-full"
              />
            </a>
          </div>
          <div className="text-sm sm:text-base">
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-4 md:mb-2 md:mr-4 space-x-4">
                <label className="text-gray-700" for="sex">
                  Sex:
                </label>
                <select
                  id="sex"
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="all sex">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex items-center mb-4 md:mb-2 md:mr-4 space-x-4">
                <label className="text-gray-700" for="bidet">
                  Bidet:
                </label>
                <select
                  id="bidet"
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="all bidets">All</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
              </div>

              <div className="flex w-full sm:pr-4 items-center sm-4 md:sm-2 justify-end">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  type="text"
                  placeholder="Search by location, address, or postal code"
                  onChange={handleLocationPostalChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
