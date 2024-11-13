import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
    <div className='text-3xl text-center font-bold text-gray-800 mb-4'>
    Projects
    </div>
       

      <p className="text-center">
        Coding is like a puzzle, and sometimes the best way to solve it is to take a step back
        and look at the big picture. <br /> - Paul Elisha
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Paul's Projects"
        className="w-full border p-2 rounded-lg mb-6"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', 'JIT Rebalancer', 'Oklink SDKs', 'KaiaScan SDKs', 'Cross-chain', 'Secp256k1'].map(tag => (
          <span
            key={tag}
            className="px-4 py-1 border rounded-xl cursor-pointer hover:bg-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Project List */}
      <div className="space-y-6 cursor-pointer">
        <motion.div className="border-b pb-4 shadow-lg" 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-semibold underline text-black">JIT Rebalancer.</h3>
          <p className="text-gray-600">The Just in Time Rebalancer is a cutting-edge Uniswap V4 Hook contract designed to optimize liquidity management and enhance trading efficiency. This innovative contract automatically adjusts liquidity positions in response to market conditions, ensuring that users maintain optimal exposure to price movements while minimizing impermanent loss.
          By leveraging the unique capabilities of Uniswap V4 Hooks, the Just in Time Rebalancer can execute precise liquidity adjustments at critical moments during trading activities. It intelligently monitors price fluctuations and executes rebalancing strategies before or after swaps, allowing for dynamic liquidity allocation tailored to real-time market data.</p>
          <p className='flex items-center gap-x-1'><span className='w-2 h-2 rounded-full block bg-[#e73c44]'></span> Solidity | <span className='w-2 h-2 rounded-full block bg-[#67FE5A]'></span>Typescript |
          <a href="https://github.com/PaulElisha/JIT-UNISWAP-V4-HOOK">Github Repo</a>
           </p>
        </motion.div>
        <motion.div className="border-b pb-4 shadow-lg" 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-semibold">Oklink SDKs</h3>
          <p className="text-gray-600">The OKLink SDK is a robust development toolkit designed to simplify the integration of Kaia blockchain data services into your applications. This SDK provides developers with streamlined access to a wide array of on-chain data, including transaction histories, NFT details, and market analysis across various blockchain networks.
          </p>
          <p className='flex items-center gap-x-1'><span className='w-2 h-2 rounded-full block bg-[#67FE5A]'></span>TypeScript | <span className='w-2 h-2 rounded-full block bg-[#7e1e69]'></span> Python | <span className='w-2 h-2 rounded-full block bg-[#4124aa]'></span> Go | <span className='w-2 h-2 rounded-full block bg-[#31d9f7]'></span> Rust |
          <a href="https://github.com/PaulElisha/oklink-kaiachain-sdk-go">Github Repo</a>
           </p>
        </motion.div>
        <motion.div className="border-b pb-4 shadow-lg" 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}> 
          <h3 className="text-lg font-semibold">KaiaScan SDKs</h3>
          <p className="text-gray-600">KaiaScan SDK is a powerful toolkit designed for developers to seamlessly integrate with the KaiaScan blockchain explorer. This SDK provides comprehensive access to on-chain data, enabling users to track and analyze transactions, fungible and non-fungible tokens, and blocks within the Kaia ecosystem.
          With features like real-time data retrieval and an Open API (OAPI) service, developers can easily build applications that leverage Kaia's blockchain capabilities. The SDK simplifies interactions with the blockchain, fostering innovation and enhancing community engagement by making blockchain data more accessible and actionable. Whether you're building dApps or analytics tools, KaiaScan SDK empowers you to harness the full potential of the Kaia platform.</p>
          <p className='flex items-center gap-x-1'> <span className='w-2 h-2 rounded-full block bg-[#4124aa]'></span> Go | <span className='w-2 h-2 rounded-full block bg-[#67FE5A]'></span>Typescript | 
          <a href="https://github.com/PaulElisha/kaiascan-sdk-ts">Github Repo</a>
          </p>
        </motion.div>
        <motion.div className="border-b pb-4 shadow-lg" 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-semibold">Cross-chain optimistic oracle data.</h3>
          <p className="text-gray-600">The Optimistic Oracle Price Data Application leverages LayerZero technology to facilitate the cross-chain transmission of real-time price data across multiple blockchain networks, including Kaia. This innovative application utilizes optimistic oracle mechanisms to ensure accurate and timely price feeds, enabling decentralized applications to access reliable market data without the need for centralized intermediaries.</p>
          <p className='flex items-center gap-x-1'><span className='w-2 h-2 rounded-full block bg-[#e73c44]'></span>Solidity | 
          <a href="https://github.com/PaulElisha/uma-pricefeed-lz-crosschain">Github Repo</a>
          </p>
        </motion.div>
        <motion.div className="border-b pb-4 shadow-lg" 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-semibold">Secp256k1, elliptic curve implementation.</h3>
          <p className="text-gray-600">The SECP256K1 Smart Contract is a specialized implementation designed to leverage the widely used SECP256K1 elliptic curve cryptography for secure digital signatures and key management within blockchain applications. This smart contract provides developers with a robust framework for generating, verifying, and managing cryptographic keys and signatures, ensuring high levels of security and integrity for transactions.</p>
          <p className='flex items-center gap-x-1'><span className='w-2 h-2 rounded-full block bg-[#e73c44]'></span>Solidity | 
          <a href="https://github.com/PaulElisha/secp256k1">Github Repo</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
