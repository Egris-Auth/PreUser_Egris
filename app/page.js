import React from 'react';
import styles from "./page.module.css";
import Navbar from './Component/navbar/Navbar';
import BentoGrid from './Component/BentoGrid/BentoGrid';
import Footer from './Component/Footer/Footer';
import { HeroSection } from './Component/HeroSection/HeroSection';
import CommitTimeline from './Component/Commit';
import ServiceInfo from './Component/ServiceInfo/ServiceInfo';


export default function LoopsLandingPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <div className={styles.RedGlows}></div>
      {/* Header */}
      <header>
          <Navbar/>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Dashboard Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-xl p-6 shadow-2xl">
            <img src='./dashboardSnap.png' alt='Dashboard' className='rounded-lg'/>
          </div>
        </div>
      </section>

      {/* work flow Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-4">
        <BentoGrid/>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-28">
        <ServiceInfo/>
      </section>
      
      <CommitTimeline/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}