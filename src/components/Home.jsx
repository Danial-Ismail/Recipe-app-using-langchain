import React from 'react';
import bgimage from "../assets/homebg.avif";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen overflow-hidden relative'>
        <img src={bgimage} className="object-cover w-full h-full absolute inset-0 z-0" alt="background" />
        <div className="absolute inset-0 flex justify-center items-center z-10">
        <Link to="/chefbot">
              <button className='bg-black text-white py-4 px-6 rounded-md border-black hover:bg-gray-800 hover:border-gray-800'>
                Get Your Recipe Now
              </button>
            </Link>
        </div>
    </div>
  );
};

export default Home;
