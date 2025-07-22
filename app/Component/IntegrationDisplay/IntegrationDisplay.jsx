import React from 'react'

const IntegrationDisplay = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 mt-54'>
        <p className='text-4xl font-semibold mb-6'>Integrations with the tools you love</p>
        <div className='flex justify-center items-center gap-4 '>
            <div className='flex justify-center items-center gap-2 px-4 py-1 text-sm bg-neutral-900 rounded-md'>
                <img src='./firebase.png' alt='firebase' className='w-4 h-4'/>
                Firebase
            </div>
            <div className='flex justify-center items-center gap-2 px-4 py-1 text-sm bg-neutral-900 rounded-md'>
                <img src='./supabase.png' alt='supabase' className='w-4 h-4'/>
                Supabase
            </div>
            <div className='flex justify-center items-center gap-2 px-4 py-1 text-sm bg-neutral-900 rounded-md'>
                <img src='./convex.png' alt='convex' className='w-5 h-5'/>
                Convex
            </div>
        </div>
        <div className='flex justify-center items-center gap-4 '>
            <div className='flex justify-center items-center gap-2 px-4 py-1 text-sm bg-neutral-900 rounded-md'>
                <img src='./neon.png' alt='neon' className='w-3 h-3'/>
                Neon
            </div>
            <div className='flex justify-center items-center gap-2 px-4 py-1 text-sm bg-neutral-900 rounded-md'>
                <img src='./supabase.png' alt='supabase' className='w-4 h-4'/>
                Nhost
            </div>
        </div>
        <div className='flex justify-center items-center gap-4 '>
            <div className='flex justify-center items-center gap-2 px-4 py-1 text-sm bg-neutral-900 rounded-md'>
                <img src='./neon.png' alt='neon' className='w-3 h-3'/>
                More
            </div>
        </div>
    </div>
  )
}

export default IntegrationDisplay;