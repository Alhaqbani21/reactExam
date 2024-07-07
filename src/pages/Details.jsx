import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { IoIosStar } from 'react-icons/io';
import AlertToast from '../components/AlertToast';

function Details() {
  const { id } = useParams();
  const urlFound = `https://fakestoreapi.com/products/${id}`;
  const [itemFound, setItemFound] = useState('');
  const [quantity, setQuantity] = useState(1);
  const userId = localStorage.getItem('userId');
  const urlUser = `https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`;
  const [userFound, setUserFound] = useState([]);
  const navigate = useNavigate();
  const [alertToast, setalertToast] = useState(false);

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);

  function fetchData() {
    axios.get(urlFound).then((response) => setItemFound(response.data));
  }
  function fetchUserData() {
    axios.get(urlUser).then((response) => setUserFound(response.data));
  }

  function handleAddCart() {
    let cartFound = userFound.cart;
    let itemExist = cartFound.find((item) => item.id === id);

    // item is there
    if (itemExist) {
      itemExist.quantity =
        parseFloat(itemExist.quantity) + parseFloat(quantity);
      cartFound = cartFound.filter((item) => item.id !== id);

      axios
        .put(urlUser, {
          cart: [itemExist, ...cartFound],
        })
        .then((response) => {
          setQuantity(1);
          console.log(response);
          setalertToast(true);
          setTimeout(() => {
            setalertToast(false);
          }, 3000);
        });

      // item not available
    } else {
      itemExist = {
        id: id,
        quantity: parseFloat(quantity),
      };

      axios
        .put(urlUser, {
          cart: [
            {
              id: id,
              quantity: parseFloat(quantity),
            },
            ...cartFound,
          ],
        })
        .then((response) => {
          fetchUserData();
          setQuantity(1);
          setalertToast(true);
          setTimeout(() => {
            setalertToast(false);
          }, 3000);
        });
    }
  }

  return (
    <div>
      <NavBar />
      {alertToast && <AlertToast text="item added to cart" />}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={itemFound.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div className="self-start">
            <h1 className="text-base text-[rgb(0,113,133)] ">
              {itemFound.category}
            </h1>
            <h1 className="text-2xl font-bold">{itemFound.title}</h1>
            <div className="flex  items-center gap-10">
              <span className=" flex items-center">
                <span className="me-2">
                  {itemFound && itemFound.rating.rate}
                </span>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </span>
              <span className="text-[rgb(0,113,133)]">
                {itemFound && itemFound.rating.count} ratings
              </span>
            </div>
            <div className="flex w-full flex-col">
              <div className="divider"></div>
            </div>

            <p className="py-6">{itemFound.description}</p>
            <div className="flex items-center  gap-5">
              <button
                onClick={() => {
                  handleAddCart();
                }}
                className="btn btn-warning text-white"
              >
                Add to cart
              </button>

              <div className="flex items-center justify-center gap-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                  htmlFor="grid-state"
                >
                  Quantity
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-row-reverse">
                <button
                  onClick={() => {
                    navigate('../');
                  }}
                  className="btn btn-warning text-white"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
