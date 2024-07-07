import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import CardCategory from '../components/CardCategory';
import Card from '../components/Card';
import axios from 'axios';
import { CiSearch } from 'react-icons/ci';

function Home() {
  const urlItems = 'https://fakestoreapi.com/products';
  const [data, setdata] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(urlItems).then((response) => {
      setdata(response.data);
      setFilteredData(response.data);
    });
  }

  function handleSearch() {
    let filtered = data;
    // console.log(filtered);
    if (searchInput === '') {
      filtered = data;
    } else {
      filtered = filtered.filter((e) => {
        return e.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filtered);
    }
    setFilteredData(filtered);
  }

  return (
    <div className="mb-44">
      <NavBar />

      <Carousel />
      {/* <div className="flex justify-center items-center gap-4">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div> */}
      <div className="flex w-full flex-col border-opacity-50">
        <div className="divider">All products</div>
      </div>
      <div className="flex justify-center items-center my-4">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="input input-bordered w-[50%] bg-base-200 rounded-r-none focus:outline-none"
        />
        <div
          className="bg-[#FEBD69] p-4 rounded-r-[0.5rem] cursor-pointer hover:bg-[#eca74d]"
          onClick={() => {
            handleSearch();
          }}
        >
          <CiSearch />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {filteredData.length < 1 ? (
          <div>
            <div className="text-center">
              <p className="mb-4 text-lg text-gray-600">
                Oops! No result found
              </p>
              <div className="animate-bounce">
                <svg
                  className="mx-auto h-16 w-16 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          filteredData.map((item) => {
            return (
              <Card
                key={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                id={item.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
