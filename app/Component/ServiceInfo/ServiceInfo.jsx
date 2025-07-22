// app/page.jsx
import React from "react";
import OverlappingCards from "../OverlappingCards/OverlappingCards";
import { FaUser } from 'react-icons/fa';
import { InfoHelper } from "./InfoHelper";
import LineGraph from "../LineGraph/LineGraph";

export default function ServiceInfo() {
    return (
        <div className="bg-transparent text-white grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-[10px] lg:gap-[1px] border-b border-neutral-800 mb-8">
            <Section className="flex flex-col justify-between p-6 border-b border-neutral-900">
                <div>
                    <h2 className="text-sm text-neutral-400 mb-6 ">No Pre-build UI</h2>
                    <h1 className="text-lg lg:text-2xl font-semibold mb-4">Design your own custom auth experience.</h1>
                    <p className="text-neutral-400 mb-6">Full UI control—integrate authentication into your own design with zero enforced templates or styles.</p>
                    <div className="flex justify-center lg:flex-col">
                    <div className="relative flex h-100 overflow-hidden">
                        {/* Back Card */}
                        <div
                            className="absolute top-0 left-0 lg:top-[25px] lg:left-[30px] w-full h-[200px] max-w-[400px] rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg">
                            <div className="flex items-center">
                                <div className="flex items-center space-x-1 p-2">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                                </div>
                                <p className='w-full pr-4 text-sm text-gray-400 flex items-center justify-center'>
                                    heelo.com
                                </p>
                            </div>
                            <div className="flex justify-center items-center bg-neutral-700 w-full h-full">
                                <div className="w-45 h-40 bg-gray-500 rounded-xl space-y-4 p-4">
                                    <div className="h-4 bg-gray-600 rounded w-full pl-2 text-[8px] text-gray-700">Email</div>
                                    <div className="h-4 bg-gray-600 rounded w-full pl-2 text-[8px] text-gray-700">Password</div>
                                </div>
                            </div>
                        </div>

                        {/* Front Card */}
                        <div
                            className="relative top-30 left-0 lg:top-[140px] lg:left-[90px] w-full h-max max-w-[400px] max-h-[278px] rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg">
                            <div className="flex items-center">
                                <div className="flex items-center space-x-1 p-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                </div>
                                <p className='w-full pr-4 text-sm text-gray-400 flex items-center justify-center'>
                                    wheelo.com
                                </p>
                            </div>
                            <section>
                                <div className="max-w-6xl mx-auto">
                                <img src='./figmaform.jpeg' alt='Dashboard' className='rounded-lg'/>
                                </div>
                            </section>
                        </div>
                    </div>
                    </div>
                </div>
            </Section>
    
            <Section className="flex flex-col justify-between border-b border-l border-neutral-900">
                <div className="p-6">
                    <h2 className="text-sm text-neutral-400 mb-6">No Extra Charges</h2>
                    <h1 className="text-2xl font-semibold mb-4">Full features included in one plan.</h1>
                    <p className="text-neutral-400 mb-6">Transparent pricing—access all core authentication features without hidden fees for essentials like MFA or custom branding.</p>
                    {/* Simulate chat bubbles */}
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="p-4 w-100 bg-neutral-900 border border-neutral-800 shadow-[0px_0px_30px_rgba(0,204,0,0.3)] rounded-md text-white flex justify-center gap-4 items-center">
                        <div className='bg-green-700 p-3 rounded-full'><FaUser size={20}/></div>
                        <div>
                            <p className='text-sm'>Access granted for User_berry214523</p>
                            <p className='text-sm text-gray-700'>Role: admin Permission: full access</p>
                        </div>
                    </div>
                </div>
                <OverlappingCards/>
            </Section>
    
            <Section className="flex flex-col justify-between p-6 border-r border-neutral-900">
            <div>
                <h2 className="text-sm text-neutral-400 mb-6">Developer friendly</h2>
                <h1 className="text-2xl font-semibold mb-4">Simple integration with clean developer tools.</h1>
                <p className="text-neutral-400 mb-6">Simple SDKs, clear docs, and flexible APIs—designed to make authentication easy for developers, not harder.</p>
                {/* Placeholder for model flow */}
                <div className="h-120 lg:h-100">
                    <InfoHelper/>
                </div>
            </div>
            </Section>
    
            <Section className="flex flex-col justify-between p-6">
            <div>
                <h2 className="text-sm text-neutral-400 mb-6">Analytics</h2>
                <h1 className="text-2xl font-semibold mb-4">Understand user behavior and login trends.</h1>
                <p className="text-neutral-400 mb-6">Gain insights into signups, logins, and security events with real-time authentication analytics.</p>
                {/* Placeholder for rollback timeline */}
                <div className="h-100 mt-26">
                    <LineGraph/>
                </div>
            </div>
            </Section>
        </div>
    );
  }
  
function Section({ children, className }) {
    return (
        <section className={`bg-[#0a0a0a] ${className}`}>
        {children}
        </section>
    );
}