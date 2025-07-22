'use client'
import React, { useState } from 'react';
import { useToast } from "@/app/context/ToastContext";
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
    <form onSubmit={handleSubmit} className="pt-4 space-y-4 w-max">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 bg-transparent border border-neutral-700 focus:outline-none focus:border-red-500"
      />
      {loading && (
        <Loader/>
      )}
      {!loading && (
        <button type='submit' className="w-full w-auto px-4 py-2 cursor-pointer bg-red-500 text-black hover:shadow-[0px_0px_10px_rgba(255,58,58,0.5)] transition">
          JOIN WAITLIST
        </button>
      )}
    </form>
  )
}