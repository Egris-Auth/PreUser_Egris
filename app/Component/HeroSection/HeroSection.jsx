'use client'
import React, { useState } from 'react';
import { useToast } from "@/app/context/ToastContext";
import { FaVuejs } from 'react-icons/fa';
import { SiReact, SiJavascript, SiSvelte, SiNextdotjs, SiNuxtdotjs } from 'react-icons/si';
import Loader from '../Loader';


export const HeroSection = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!email?.trim()) {
        showToast("Please enter your email address.", "error");
        return;
      }
  
      try {
        setLoading(true);
        await fetch('/api/registor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });
  
        setEmail('');
        setLoading(false);
  
        showToast("Thanks for joining—watch your inbox for early access.", "success");
      } catch (error) {
        console.error('Error calling API:', error);
        showToast("Fail to register your email", "error");
      }
    };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">  
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Authentication for modern apps
          </h1>
          
          <p className="text-md text-gray-400 mb-12 max-w-2xl mx-auto">
          Scalable. Secure. Developer-First.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-borderColor focus:outline-none focus:border-red-500"
            />
            {loading && (
              <Loader/>
            )}
            {!loading && (
              <button type='submit' className="w-full w-auto px-4 py-2 cursor-pointer bg-red-600 hover:shadow-[0px_0px_30px_rgba(255,58,58,0.5)] transition">
                JOIN WAITLIST
              </button>
            )}
          </form>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <SiReact title="React.js"/>
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiNextdotjs title="Next.js" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaVuejs title="Vue.js" />
              <span>Vue</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiNuxtdotjs title="Nuxt.js" />
              <span>Nuxt.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiSvelte title="Svelte" />
              <span>Svelte</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiJavascript title="JavaScript" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </section>
  )
}