import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
/* eslint-disable no-unused-vars */
import React from "react";
import wallpaper from "../assets/images/wallpaper.png";
import womenModel from "../assets/images/womenModel.png";
import section1Img from "../assets/images/section1.png";
import section2Img from "../assets/images/section2.png";
import ShowreelButton from "../components/Button/ShowreelButton";

//for image if needed
            /*
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 1"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              */

const Home = () => {
  const {data, loading} = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);
  return (
    <>
      {/* Hero Section */}
      <header className='bg-white shadow flex flex-col min-w-full h-screen relative overflow-hidden'>
        <img
          src={wallpaper}
          alt='wallpaper'
          className='w-full h-full absolute z-0 top-0 left-0 object-cover opacity-90'
        />
        <div className='py-8 px-4 sm:px-6 lg:px-8 w-full h-full text-center z-10 flex justify-center items-center flex-wrap md:flex-nowrap'>
          <div className='container relative z-20'>
            <h1 className='text-4xl sm:text-6xl font-bold text-gray-900 mb-6 sm:mb-4'>
              Welcome to our Boutique Store!
            </h1>
            <p className='text-base sm:text-lg text-gray-900'>
              Discover timeless elegance and unique style at our boutique shop.
              Explore our curated collection of fashion-forward pieces,
              handpicked just for you.
            </p>
            <ShowreelButton />
          </div>
          <div className='overflow-hidden relative z-20'>
            <img
              src={womenModel}
              alt='frame'
              className='w-full object-cover fill-white'
            />
          </div>
        </div>
      </header>

      <main>
        {/* Section 1 */}
        <section className='w-full h-screen flex justify-center items-center relative'>
          <img
            src={section1Img}
            alt='section1'
            className='w-full h-full absolute z-0 top-0 left-0 object-cover opacity-90'
          />
          <div className='relative z-20 text-center'>
            <h1 className='text-xl text-orange-300'>Find Unique Designs</h1>
            <h2 className='text-4xl lg:text-4xl text-orange-300'>
              Discover hand craftsmanship
            </h2>
          </div>
        </section>

        {/* Section 2 */}
        <section className='w-full h-screen flex justify-center items-center relative'>
          <img
            src={section2Img}
            alt='section2'
            className='w-full h-full absolute z-0 top-0 left-0 object-cover opacity-90'
          />
          <div className='absolute bottom-20 right-20 z-20 text-right'>
            <h2 className='text-xl text-teal-300'>Designed by Maya</h2>
            <h1 className='text-4xl sm:text-8xl text-teal-200'>
              DISCOUNT FOR T-SHIRTS
            </h1>
          </div>
        </section>

        {/* Feature Items */}
        <section className="flex-grow w-full flex justify-center items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white font-bold mb-4 text-center">
            Our Inventory
          </h2>
          {data &&
           data.products.map((product, index) => {
           return (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'  key={index}>
            <div className='card card-compact w-full bg-base-100 shadow-xl rounded-t-xl'>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className='card-body bg-gray-800 p-4 rounded-b-xl'>
                <h2 className='card-title text-white'>{product.name}</h2>
                <p className='text-white'>{product.description}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
            </div>
           )
          })}
        </div>
      </section>
      </main>
      <style jsx>{`
        @keyframes autoRotate {
          0%,
          100% {
            transform: rotate(-12) scale(1);
          }
          50% {
            transform: rotate(0) scale(1.1);
          }
        }

        .feature-item {
          transition: transform 0.5s;
        }

        .feature-item:hover,
        .feature-item:active {
          transform: rotate(0) scale(1.1) translateY(-2px);
        }

        @media (max-width: 768px) {
          .feature-item {
            animation: autoRotate 5s infinite;
          }

          .feature-item:nth-child(1) {
            animation-delay: 0s;
          }

          .feature-item:nth-child(2) {
            animation-delay: 1s;
          }

          .feature-item:nth-child(3) {
            animation-delay: 2s;
          }

          .feature-item:nth-child(4) {
            animation-delay: 3s;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
