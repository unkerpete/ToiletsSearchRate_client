import React, { useState } from 'react';
import ToiletModals from './ToiletModals';

const ToiletCards = (props) => {
  const { id, sex, bidet, _location, _address, imgurl } = props.item;
  const [showModal, setShowModal] = useState(false);

  // handle click of toilet card
  const handleCardClicked = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div key={id}>
        <div className="modal-container">
          {showModal && (
            <ToiletModals
              item={props.item}
              handleCloseModal={handleCloseModal}
            />
          )}
        </div>
        <div className="card-container" onClick={handleCardClicked}>
          <img src={imgurl} alt={location} width="300" className="m-auto" />
          <h3>{`${id} ${sex} ${bidet} ${_location}`}</h3>
          <h3>{`${_address}`}</h3>
        </div>
      </div>
    </>
  );
};

export default ToiletCards;
