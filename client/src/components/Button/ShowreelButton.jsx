import React, { useState } from "react";
import ink from "../../assets/images/ink.mp4";

const ShowreelButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex items-center justify-center h-48  mt-24'>
      <div className='relative w-full h-screen'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <svg className='h-80 w-80' viewBox='0 0 500 500'>
            <defs>
              <path
                d='M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250'
                id='textcircle_top'>
                <animateTransform
                  attributeName='transform'
                  begin='0s'
                  dur='20s'
                  type='rotate'
                  from='0 250 250'
                  to='360 250 250'
                  repeatCount='indefinite'
                />
              </path>
            </defs>
            <text className='circle-text' dy='70' textLength='1220'>
              <textPath xlinkHref='#textcircle_top' className='text-3xl'>
                DISCOVER YOUR STYLE
              </textPath>
            </text>
          </svg>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div
            className='relative h-40 w-40 rounded-full'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <video
              className={`h-full w-full rounded-full object-cover transition-opacity duration-500 border-2 border-teal-50 ${
                isHovered ? "opacity-80" : "opacity-0"
              }`}
              loop
              autoPlay
              muted>
              <source src={ink} type='video/mp4' />
              <p>Please Update Your Browser</p>
            </video>
            {!isHovered && (
              <img
                alt='play'
                className='absolute h-1/4 w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-55'
                src='https://github.com/ahampriyanshu/gfg/raw/main/media/play.png'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowreelButton;
