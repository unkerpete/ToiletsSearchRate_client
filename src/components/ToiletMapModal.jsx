import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import heartIcon from '../assets/icons/heart.png';
import poopIcon from '../assets/icons/poop.png';

const ToiletMapModal = (props) => {
  const { id, sex, bidet, _location, _address, imgurl, details } = props.item;
  const [comments, setComments] = useState();
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();

  const getLikesAPI = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/likes/getlikes/${id}`);
      const json = await res.json();
      setLikes(json);
    } catch (err) {
      alert(err.message);
    }
  };

  const getDislikesAPI = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/likes/getdislikes/${id}`);
      const json = await res.json();
      setDislikes(json);
    } catch (err) {
      alert(err.message);
    }
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
    getLikesAPI();
    getDislikesAPI();
    getCommentsAPI();
  }, []);

  return (
    <div className="">
      <div className="text-center">{_location}</div>
      <div className="text-center">{_address}</div>
      <br />
      <span>Bidet: {bidet}</span>
      <br />
      <span>Sex: {sex}</span>
      <div>
        <img src={imgurl} alt="" className="rounded h-auto" />
      </div>
      <div className="text-center text-xs">Toilet ID [ {id} ]</div>
      <div className="text-center">
        <p className="inline-block">
          {likes}
          <img
            src={heartIcon}
            alt=""
            className="inline-block h-4 w-auto mr-5 ml-2"
          />
        </p>
        <p className="inline-block">
          {dislikes}{' '}
          <img src={poopIcon} alt="" className="inline-block h-4 w-auto ml-2" />
        </p>
      </div>
      <div className="">
        Last 3 comments
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.slice(0, 3).map((item) => {
            return (
              <div className="text-left" key={item.id}>
                <span className="font-bold">{item.users_username} </span> :{' '}
                {item.message}
              </div>
            );
          })
        ) : (
          <p className="text-left">No comments</p>
        )}
      </div>
    </div>
  );
};

export default ToiletMapModal;
