import React, { useState } from 'react';

const AdminPage = () => {
  const [showToiletsMgmt, setShowToiletsMgmt] = useState(true);
  const [showUserMgmt, setShowUsersMgmt] = useState(false);

  const handleToiletsMgmtBtn = () => {
    setShowUsersMgmt(false);
    setShowToiletsMgmt(true);
  };

  const handleUserMgmtBtn = () => {
    setShowToiletsMgmt(false);
    setShowUsersMgmt(true);
  };

  return (
    <div className="mt-20">
      <div className="buttons-container">
        <div className="inline-block m-10">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-xl"
            onClick={handleToiletsMgmtBtn}
          >
            Toilets Management
          </button>
        </div>
        <div className="inline-block m-10">
          <button
            className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-xl"
            onClick={handleUserMgmtBtn}
          >
            User Management
          </button>
        </div>
      </div>
      {showToiletsMgmt && (
        <div className="toiletmgmt-container">
          <div className="w-full bg-white px-8 py-8">
            <form>
              <h2 className="text-3xl font-medium mb-4">Add Toilet</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="imgurl"
                >
                  Image URL
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="imgurl"
                  type="text"
                  placeholder="Enter Image URL"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="location"
                >
                  Sex
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sex"
                  defaultValue="male"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="unisex">unisex</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="details"
                >
                  Details
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="details"
                  type="text"
                  placeholder="Enter Details"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="bidet"
                >
                  Bidet
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bidet"
                  defaultValue="manual"
                >
                  <option value="manual">manual</option>
                  <option value="automatic">automatic</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Enter Address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="postalcode"
                >
                  Postal Code
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="postalcode"
                  type="text"
                  placeholder="Enter Postal Code"
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showUserMgmt && (
        <div className="usermgmt-container">
          <div className="w-full bg-white px-8 py-8">
            <form>
              <h2 className="text-3xl font-medium mb-4">Add User</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="imgurl"
                >
                  Image URL
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="imgurl"
                  type="text"
                  placeholder="Enter Image URL"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="location"
                >
                  Sex
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sex"
                  defaultValue="male"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="unisex">unisex</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="details"
                >
                  Details
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="details"
                  type="text"
                  placeholder="Enter Details"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="bidet"
                >
                  Bidet
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bidet"
                  defaultValue="manual"
                >
                  <option value="manual">manual</option>
                  <option value="automatic">automatic</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Enter Address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="postalcode"
                >
                  Postal Code
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="postalcode"
                  type="text"
                  placeholder="Enter Postal Code"
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
