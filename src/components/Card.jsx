import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 w-80 shadow-xl ">
      <figure className="w-full">
        <img
          className="h-44 w-full object-fill"
          src={props.image}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">{props.title}</h2>
        <p>{props.price} SAR</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              navigate(`../details/${props.id}`);
            }}
            className="btn btn-primary"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
