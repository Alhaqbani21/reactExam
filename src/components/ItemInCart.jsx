import React, { useState } from 'react';

function ItemInCart(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex w-full items-center gap-10">
      <div className="flex items-center gap-10">
        <img
          className="w-32 max-md:w-8"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
        <span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
      </div>
      <div className=" flex items-center ">
        {' '}
        Qty <button></button>
        <button
          className="btn btn-warning text-white"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
        <span className="p-5 max-md:p-1">{quantity}</span>{' '}
        <button
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
          className="btn btn-warning text-white "
        >
          -
        </button>
      </div>

      <div className="flex flex-col">
        <div
          onClick={props.onClickedit}
          className="text-yellow-800 underline cursor-pointer"
        >
          Edit
        </div>
        <div
          onClick={props.onClickdelete}
          className="text-red-800 underline cursor-pointer"
        >
          delete
        </div>
      </div>
    </div>
  );
}

export default ItemInCart;
