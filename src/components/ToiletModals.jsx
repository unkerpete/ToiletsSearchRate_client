import React, { useState, useEffect } from 'react';

const ToiletModals = (props) => {
  const { id, sex, bidet, _location, _address, imgurl } = props.item;
  const [comments, setComments] = useState();

  const getCommentsAPI = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:5001/comments/getcomments/${id}`
      );
      const json = await res.json();
      setComments(json);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getCommentsAPI();
  }, []);

  const handleSubmitNewCommentClick = {};

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center z-10 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 h-5/6 max-h-fit w-1/3 relative">
        <div className="absolute top-0 right-0 p-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg"
            onClick={props.handleCloseModal}
          >
            Close
          </button>
        </div>
        <div className="img-container w-1/2 mx-auto">
          <img src={imgurl} alt="" className="shadow-lg rounded-lg" />
        </div>
        <div className="newcomment-container">
          <p className="text-xl text-left font-medium mt-2 px-2">
            Leave a Comment
          </p>
          <textarea
            type="text"
            id="newcomment"
            placeholder="Write your comment here"
            className="w-full rounded-lg px-3 py-2 mb-1 resize-y border min-h-20"
          ></textarea>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg flex mt-0"
          onClick={props.handleCloseModal}
        >
          Submit
        </button>
        <div className="comments-container mt-2">
          {comments.map((item) => {
            return (
              <p className="text-left">
                <span className="font-bold">{item.user_username}</span>:{' '}
                {item.message}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToiletModals;
