import React, { FC, useState } from 'react'


const HackerCard = () => {
  const hackCardStyle = {
    width: "172.447px",
    height: "222.928px",
    transform: "rotate(-0.047deg)",
    borderRadius: "8px",
    background: "#C95656",
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
  }

  const [hackerName, setHackerName] = useState('Tom');
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg" style={hackCardStyle}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            {hackerName}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Yuhacks</span>
        </div>
      </div>
    </>
  )
}

export default HackerCard
