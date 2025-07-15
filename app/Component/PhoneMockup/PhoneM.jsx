import React from 'react'
import './PhoneM.css'
import { CiChat1 } from "react-icons/ci";

const PhoneM = ({BrandName}) => {
  return (
    <div className="relative flex flex-col items-center m-12 w-92 h-80 bg-transparent phone-container">
    <div className="w-full flex justify-center ">
        <div className="relative flex flex-col items-center m-12 w-92 h-80 bg-[#0a0a0a] rounded-t-[2rem] shadow-[0px_0px_40px_#636e72aa] border border-8 border-black overflow-hidden">
            {/* Lock Icon */}
            <div className="absolute -top-5 flex items-center justify-center w-40 h-9 bg-black rounded-full">
                <div className='w-2 h-2 mt-4 bg-gray-700 rounded-full'/>
                <div className='w-16 h-1 mt-4 ml-2 bg-gray-700 rounded-full'/>
            </div>

            {/* Notification Card */}
            <div className="mt-10 flex items-center space-x-3 p-4 rounded-lg w-11/12">
                <div className="flex items-center justify-center w-10 h-9 bg-gray-900 rounded-full">
                    <CiChat1 size={20}/>
                </div>
                <div>
                <p className="text-blue-400 font-medium text-sm">{BrandName}</p>
                <p className="text-gray-300 text-sm">
                    Your verification code is:  <span className="underline text-white-600">764658</span>
                </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PhoneM;