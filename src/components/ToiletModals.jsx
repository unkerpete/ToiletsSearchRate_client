import React from 'react';

const ToiletModals = (props) => {
  const { id, sex, bidet, _location, _address, imgurl } = props.item;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center z-10">
      <div className="bg-white rounded-lg p-4 h-full w-1/2">
        <div className="img-container w-2/3 mx-auto">
          <img src={imgurl} alt="" className="shadow-lg rounded-lg" />
        </div>
        <div className="comment-container">
          <p className="text-xl text-left font-medium mt-2">Leave a Comment</p>
          <textarea
            type="text"
            placeholder="Write your comment here"
            className="w-full rounded-lg border-gray-300 px-3 py-2 mb-4 resize-y outline-dotted min-h-20"
          ></textarea>
        </div>
        <div className="buttons-container flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg mr-2"
            onClick={props.handleCloseModal}
          >
            Close
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg"
            onClick={props.handleCloseModal}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToiletModals;
