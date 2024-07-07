import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import ItemInCart from '../components/ItemInCart';

function CartPage() {
  const { id } = useParams();
  const urlFound = `https://fakestoreapi.com/products/${id}`;
  const [itemFound, setItemFound] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(urlFound).then((response) => setItemFound(response.data));
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center flex-col mx-10 my-10 bg-white">
        <div className="self-start text-3xl font-semibold m-4 max-md:text-lg">
          Shopping Cart
        </div>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <div className="w-full p-4">
          <ItemInCart />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
