import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import heartIcon from '../assets/icons/heart.png';
import poopIcon from '../assets/icons/poop.png';
import closeIcon from '../assets/icons/close.png';

const ToiletModals = (props) => {
  const { id, sex, bidet, _location, _address, imgurl } = props.item;
  const [comments, setComments] = useState();

  const showToastMessage = (type, message) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

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

  const handleSubmitNewCommentClick = async () => {
    try {
      const newCommentData = {
        toilets_id: id,
        message: document.getElementById('newcomment').value,
        users_username: props.userName,
      };
      const res = await fetch(`http://127.0.0.1:5001/comments/createcomment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(newCommentData),
      });
      const json = await res.json();
      if (json.message === 'message created') {
        showToastMessage('success', json.message);
      } else {
        showToastMessage(
          'error',
          'You need to be signed in to submit a comment.'
        );
      }
    } catch (err) {
      showToastMessage('error', 'submit message failed ' + err.message);
      console.log(err);
    }
    getCommentsAPI();
  };

  const handleHeartClicked = () => {
    console.log('heart clicked');
  };

  const handlePoopClicked = () => {
    console.log('poop clicked');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center z-10 flex justify-center items-center">
      <ToastContainer />
      <div className="bg-white rounded-lg p-4 h-5/6 max-h-fit w-1/3 relative">
        <div className="absolute top-0 right-0 p-4 h-auto w-14 hover:cursor-pointer">
          <img src={closeIcon} alt="" onClick={props.handleCloseModal} />
        </div>
        <div className="ratingsDisplay-container absolute">
          <div className="flex items-center mb-2">
            <img
              src={heartIcon}
              alt=""
              className="inline-block h-auto w-5 hover:cursor-pointer"
              onClick={handleHeartClicked}
            />
            <span className="ml-5">5</span>
          </div>
          <div className="flex items-center">
            <img
              src={poopIcon}
              alt=""
              className="inline-block h-auto w-5 hover:cursor-pointer"
              onClick={handlePoopClicked}
            />
            <span className="ml-5">5</span>
          </div>
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
            className="w-full rounded-lg px-3 py-2 mb-1 resize-y border h-10"
          ></textarea>
        </div>
        <div className="submitLikeDislike-btns-container flex justify-between">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg mt-0"
            onClick={handleSubmitNewCommentClick}
          >
            Submit
          </button>
        </div>
        <div className="comments-container mt-2">
          <p className="underline text-left mb-2">Comments history</p>
          <div className="overflow-y-scroll h-36">
            {Array.isArray(comments) && comments.length > 0 ? (
              comments.map((item) => {
                return (
                  <p className="text-left" key={item.id}>
                    <span className="font-bold">{item.users_username}</span>{' '}
                    {moment(item.created_at).format('DD/MM/YY')}: {item.message}
                  </p>
                );
              })
            ) : (
              <p className="text-left">No comments</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToiletModals;
