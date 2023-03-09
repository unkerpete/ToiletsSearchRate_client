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
      <div key={id} className="py-5">
        <div className="modal-container">
          {showModal && (
            <ToiletModals
              item={props.item}
              handleCloseModal={handleCloseModal}
              userName={props.userName}
            />
          )}
        </div>
        <div
          className="card-container hover:cursor-pointer"
          onClick={handleCardClicked}
        >
          <img src={imgurl} alt={location} width="350" className="m-auto" />
          <h3 className="text-xl font-semibold text-gray-800">{_location}</h3>
          <h3 className="text-xs font-semibold text-gray-800">{`${sex} toilet with ${bidet} bidet`}</h3>
          <h3 className="text-gray-600">{`${_address}`}</h3>
        </div>
      </div>
    </>
  );
};

export default ToiletCards;
