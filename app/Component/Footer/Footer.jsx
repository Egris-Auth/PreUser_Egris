'use client';
import React, { useState } from "react";
import { useToast } from "@/app/context/ToastContext";
import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';
import Loader from "../Loader";

const Footer = () => {
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
    <div className="relative flex-1 bg-gradient-to-t from-red-500/30 via-red-500/10 to-transparent px-8 sm:px-10 max-lg:pt-6 max-lg:pb-12 lg:pb-2">
      <div className='flex flex-col justify-center items-center text-center text-gray-300 px-6 mt-64 mb-26'>
        {/* Main footer content */}
        <h2 className="text-4xl font-bold mb-6">Join the waitlist</h2>
        <p className="text-gray-400 mb-8 max-w-150">Next-generation authentication service provider delivering secure, scalable identity solutions for modern applications.</p>
        <div className="w-full">
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
              <button type='submit' className="w-full w-auto px-4 py-2 cursor-pointer bg-red-500 text-black hover:shadow-[0px_0px_10px_rgba(255,58,58,0.5)] transition">
                JOIN WAITLIST
              </button>
            )}
          </form>
        </div>

        <div className="mt-12 space-y-3">
          <p className="text-gray-400 max-w-150 text-sm">• Be the first to use a modern authentication platform.</p>
          <p className="text-gray-400 max-w-150 text-sm">• Register now and get 20% off on your first project.</p>
          <p className="text-gray-400 max-w-150 text-sm">• Invite your developer friends—earn an extra 10% off.</p>
        </div>

        {/* Bottom bar with copyright and social icons */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaDiscord size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;