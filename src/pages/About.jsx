// src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white text-black min-h-screen">
              <h1 className="text-4xl font-bold mb-4">Paul Elisha</h1>

        <div className='flex'>

      {/* Profile Image */}
      <div className="mr-8">
        <img
          src="/src/assets/LLW_3833.jpg" // replace with the actual path to your image
          alt="Paul Elisha"
          className="w-64 h-full rounded-lg object-cover"
        />
        
      </div>

      {/* About Text */}
      <div className="max-w-3xl text-center text-lg leading-relaxed">
        <p className="mb-4">
        I am a Software Engineer with a background in computer science. <br /> I am currently an undergraduate of Miva Open University, <br /> pursuing a Bachelor's degree in <br />Software Engineering with a focus on Distributed Softwares.     
        </p>
        <p className="mb-4">
        Currently, I mainly work as a core smart contract engineer.
        </p>
        <p className="mb-4">
        Another of many technical skill sets are Technical Research and <br />Technical Writing crafting API documentations, <br />and breaking down the workflow and architecture of protocols.
        </p>
        <p className="mb-4">
        Interested in Open source development and DeFi. <br />I have built smart contract modules and tools, <br /> backend SDKs for Blockchain platform. <br />
        <a href="https://github.com/PaulElisha" className="underline text-black hover:text-blue-600">Github - @paulelishaa</a>.
        </p>
        <p className="italic mb-4">Chess player and problem solver.</p>
      </div>
      </div>

      <Link to="/Articles">
      <button className="mt-8 px-6 py-2 bg-black text-white rounded-full text-lg hover:bg-gray-800">
        Articles →
      </button>
      </Link>
    </div>
  );
};

export default About;
