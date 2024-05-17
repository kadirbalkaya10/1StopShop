/* eslint-disable no-unused-vars */
import React from "react";
import wallpaper from "../assets/images/wallpaper.png";
import womenModel from "../assets/images/womenModel.png";
import section1Img from "../assets/images/section1.png";
import section2Img from "../assets/images/section2.png";
import ShowreelButton from "../components/Button/ShowreelButton";

const Home = () => {
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
        <section className='w-full flex flex-col justify-around items-center py-20 skeleton   '>
          <h1 className='text-4xl sm:text-8xl mb-12 text-orange-200'>
            Featured Items
          </h1>
          <div className='grid mt-12 lg:grid-cols-4 mx-auto p-10 gap-6'>
            <a href='#'>
              <img
                src={section1Img}
                className='feature-item rounded-xl w-full transform transition-transform duration-500 rotate-12 hover:rotate-0 hover:scale-110 hover:-translate-y-2 active:rotate-0 active:scale-110 active:-translate-y-2 origin-bottom'
                alt='Product1'
              />
            </a>
            <a href='#'>
              <img
                src={section2Img}
                className='feature-item rounded-xl w-full transform transition-transform duration-500 -rotate-12 hover:rotate-0 hover:scale-110 hover:-translate-y-2 active:rotate-0 active:scale-110 active:-translate-y-2 origin-bottom'
                alt='Product2'
              />
            </a>
            <a href='#'>
              <img
                src={section2Img}
                className='feature-item rounded-xl w-full transform transition-transform duration-500 rotate-12 hover:rotate-0 hover:scale-110 hover:-translate-y-2 active:rotate-0 active:scale-110 active:-translate-y-2 origin-bottom'
                alt='Product3'
              />
            </a>
            <a href='#'>
              <img
                src={section1Img}
                className='feature-item rounded-xl w-full transform transition-transform duration-500 -rotate-6 hover:rotate-0 hover:scale-110 hover:-translate-y-2 active:rotate-0 active:scale-110 active:-translate-y-2 origin-bottom'
                alt='Product4'
              />
            </a>
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
