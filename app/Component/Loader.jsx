import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-row gap-2 mt-4">
    <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce"></div>
    <div
        className="w-2 h-2 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
    ></div>
    <div
        className="w-2 h-2 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
    ></div>
    </div>
  )
}

export default Loader;