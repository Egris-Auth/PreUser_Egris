import React from 'react'
import styles from "./page.module.css";
import AgentLayout from './Component/AgentLayout/AgentLayout';
import Flickering from './Component/Flickering/Flickering';
import BentoInfo from './Component/BentoInfo/BentoInfo';
import ServiceInfo from './Component/ServiceInfo/ServiceInfo';
import { HeroSection } from './Component/HeroSection/HeroSection';
import CommitTimeline from './Component/Commit';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/navbar/Navbar';

export default function HomePage() {

    const logos = [
        { name: 'Google', src: '/firebase.png' },
        { name: 'Microsoft', src: '/supabase.png' },
        { name: 'Amazon', src: '/neon.png' },
        { name: 'Netflix', src: '/convex.png' },
        { name: 'YouTube', src: '/firebase.png' },
        { name: 'Instagram', src: '/supabase.png' },
    ];

  return (
    <div>
        {/* Header */}
        <header className='fixed border-b border-neutral-800 w-full bg-[#0a0a0a] z-100'>
            <Navbar/>
        </header>

        {/* Border section */}
        <div className='w-full h-full bg-transparent pt-12 px-0 md:px-16 lg:px-46'>
            <div className='w-full h-full border-l border-t border-r border-neutral-800'>
                {/* Hero section */}
                <div className='w-full h-108 px-8 mt-2 flex flex-col justify-center items-center gap-4'>
                    <div className='flex justify-center items-center gap-2 mt-4 mb-2'> 
                        <img src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' alt='nextjs' className='w-10 h-10 border border-neutral-800 rounded-full'/>
                        +
                        <img src='./egrisIcon.png' alt='nextjs' className='w-10 h-10 border border-neutral-800 p-1 rounded-full'/>
                    </div>
                    <h1 className='text-5xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>Auth Made Simple</h1>
                    <p className='max-w-130 text-center text-neutral-500'>Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes.</p>
                    {/* Form */}
                    <HeroSection/>
                    <div className={styles.RedGlows}></div>
                </div>
                {/* Service section */}
                <div className='w-full bg-[#0a0a0a] border-t border-b border-neutral-800'>
                    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                        {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex items-center justify-center gap-2 h-20 border border-neutral-800 shadow-sm"
                        >
                            <img
                            src={logo.src}
                            alt={logo.name}
                            width={30}
                            height={30}
                            className="object-contain grayscale opacity-80"
                            />
                            <p>{logo.name}</p>
                        </div>
                        ))}
                    </div>
                </div>
                {/* Agent layout section */}
                <AgentLayout/>

                <Flickering title={'Flexible Authentication for Any Flow'}/>

                {/* Bento section */}
                <BentoInfo/>

                <Flickering title={'Flexible Authentication for Any Flow'}/>

                {/* Service info section */}
                <ServiceInfo/>

                <Flickering title={'Flow every developer wants'}/>

                {/* Commit section */}
                <CommitTimeline/>

                <Footer/>
            </div>
        </div>
    </div>
  )
}