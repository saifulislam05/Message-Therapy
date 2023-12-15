import React from 'react'

const Footer = () => {
    let currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center h-16 my-4 font-medium bg-gray-300">
        copyrights {currentYear} Family Wellness pvt. ltd. All Rights Reserved
      </div>
      <p className="text-center">Powered by Saiful Islam</p>
    </div>
  );
}

export default Footer