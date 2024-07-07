import React from 'react';

function CardCategory() {
  return (
    <div className="w-64 bg-white flex justify-center items-center flex-col gap-3">
      <div className="font-bold self-start text-3xl ms-2">men's clothing</div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-[50%] flex flex-col justify-center items-center ">
          Bag
          <img
            className="w-[50%]"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          men's clothing
          <img
            className="w-[50%]"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          men's clothing
          <img
            className="w-[50%]"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          men's clothing
          <img
            className="w-[50%]"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
      <p className="self-start hover:text-blue-400 cursor-pointer ms-2">
        See more
      </p>
    </div>
  );
}

export default CardCategory;
