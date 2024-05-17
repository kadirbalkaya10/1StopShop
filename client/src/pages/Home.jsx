/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

import React from "react";
import wallpaper from "../assets/images/wallpaper.png";
import frameImg from "../assets/images/frame.png";
import womenModel from "../assets/images/womenModel.png";

const Home = () => {
  const {data, loading} = useQuery(QUERY_ALL_PRODUCTS);
console.log(data);
  return (
    <div className='skeleton w-full h-full min-h-screen flex flex-col justify-center items-center'>
      {/* Hero Section */}
      <header className='bg-white shadow  flex   w-screen h-screen relative overflow-hidden'>
        <img
          src={wallpaper}
          alt='wallpaper'
          className='w-screen h-screen absolute z-0 top-0 left-0 object-cover max-w-max opacity-90'
        />
        <div className='  py-8 px-4 sm:px-6 lg:px-8  w-full h-screen text-center z-10 flex   justify-center  items-center flex-wrap  md:flex-nowrap '>
          <div className='container'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 z-10'>
              Discover Tops, Bottoms, and Shoes
            </h1>
            <p className='text-base sm:text-lg text-gray-600 z-10'>
              Explore our latest collection and find your style.
            </p>
            <button className='btn btn-active mt-4'>Find your style</button>
          </div>
          <div className='overflow-hidden relative'>
            <img
              src={womenModel}
              alt='frame'
              className='w-full object-cover  fill-white'
            />
          </div>
        </div>
      </header>

      {/* Feature Items */}
      <section className='flex-grow w-full flex justify-center items-center py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl text-white font-bold mb-4 text-center'>
            Featured Items
          </h2>

          {data && 
           data.products.map((product, index) => {
           console.log(products);
           return (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'  key={index}>

          
            <div className='card card-compact w-full bg-base-100 shadow-xl rounded-t-xl'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Clothing 1'
                className='w-full h-48 object-cover rounded-t-xl'
              />
              <div className='card-body bg-gray-800 p-4 rounded-b-xl'>
                <h2 className='card-title text-white'>{product.name}</h2>
                <p className='text-white'>{product.description}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          
           
            {/* <div className='card card-compact w-`2full bg-base-100 shadow-xl rounded-t-xl'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Clothing 2'
                className='w-full h-48 object-cover rounded-t-xl'
              />
              <div className='card-body bg-gray-800 p-4 rounded-b-xl'>
                <h2 className='card-title text-white'>Clothing 2</h2>
                <p className='text-white'>A description of the item.</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div> */}
            {/* <div className='card card-compact w-full bg-base-100 shadow-xl rounded-t-xl'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Clothing 3'
                className='w-full h-48 object-cover rounded-t-xl'
              />
              <div className='card-body bg-gray-800 p-4 rounded-b-xl'>
                <h2 className='card-title text-white'>Clothing 3</h2>
                <p className='text-white'>A description of the item.</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div> */}
            {/* <div className='card card-compact w-full bg-base-100 shadow-xl rounded-t-xl'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Clothing 4'
                className='w-full h-48 object-cover rounded-t-xl'
              />
              <div className='card-body bg-gray-800 p-4 rounded-b-xl'>
                <h2 className='card-title text-white'>Clothing 4</h2>
                <p className='text-white'>A description of the item.</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div> */}
          
          </div>
           )
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
