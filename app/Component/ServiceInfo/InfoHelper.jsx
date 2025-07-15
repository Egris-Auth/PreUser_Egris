import React from 'react'

export const InfoHelper = () => {
  return (
    <main className="bg-transparent flex items-center justify-center relative">
      {/* SVG Lines */}
      <svg
        className="absolute"
        width="200"
        height="250"
        style={{
          left: '50%',
          top: '100%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        <path d="M 100 50 C 100 150, 20 150, 20 150" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <path d="M 100 50 C 100 320, 880 220, 900 940" stroke="#facc15" strokeWidth="2" fill="none" />
        <path d="M 100 85 C 100 500, 80 200, 300 800" stroke="#ec4899" strokeWidth="2" fill="none" />
      </svg>

      {/* SVG Middle Lines */}
      <svg
        className="absolute"
        width="4"
        height="100"
        style={{
          left: '50%',
          top: 'calc(90% - 150px)', // Adjust this based on your layout
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      >
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="100"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>


      {/* Main Layout */}
      <div className="flex flex-col items-center w-full gap-10 mt-4 relative z-10">

        {/* Top Box */}
        <div className="w-52 h-32 bg-neutral-900 rounded-xl p-4 relative">
          <div className="space-y-3">
            <div className="w-1/2 h-4 bg-neutral-800 rounded"></div>
            <div className="w-3/4 h-4 bg-neutral-800 rounded"></div>
            <div className="w-1/3 h-4 bg-neutral-800 rounded"></div>
          </div>
        </div>

        {/* Center Button */}
        <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
          <img src='/EgrisIcon.png' alt='egris' className='w-6 h-6'/>
        </div>

        {/* Bottom Options */}
        <div className="relative h-full sm:w-full max-w-140 bg-red-500 flex justify-center items-start">
          {/* First card - right and higher */}
          <div className="absolute top-0 left-2 flex items-center">
            <div className="flex justify-center items-center gap-2 bg-neutral-900 text-white px-4 py-3 rounded-xl text-sm ml-2">
              <div className='w-1 h-1 rounded-full bg-[#3b82f6]'/>
              Custom service providers
            </div>
          </div>

          {/* Second card - left and slightly lower */}
          <div className="absolute -top-[-10px] sm:top-10 right-10 flex items-center">
            <div className="flex justify-center items-center gap-2 bg-neutral-900 text-white px-4 py-3 rounded-xl text-sm ml-2">
              <div className='w-1 h-1 rounded-full bg-[#facc15]'/>
              Custom mail type
            </div>
          </div>

          {/* Third card - centered and lowest */}
          <div className="absolute top-30 flex items-center">
            <div className="flex justify-center items-center gap-2 bg-neutral-900 text-white px-4 py-3 rounded-xl text-sm ml-2">
              <div className='w-1 h-1 rounded-full bg-[#ec4899]'/>
              Single function call
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}