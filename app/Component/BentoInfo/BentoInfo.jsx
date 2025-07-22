import React from 'react';
import { FaLock, FaGoogle, FaGithub, FaFacebook, FaDiscord, FaTwitch, FaLinkedin } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import PhoneM from '../PhoneMockup/PhoneM';


const BentoInfo = () => {
  const blockedUsers = [
    { email: "berry42@email.com", action: "Signup at Aug 4 at 14:09", by: "Authenticate by Credential" },
    { email: "bad.actor@throwaway.com", action: "Aug 4 at 14:12", by: "Authenticate by Magic link" },
  ];

  const icons = [
    { icon: <FaGoogle size={26} />, top: "30%", left: "2%" },
    { icon: <FaGithub size={26} />, top: "20%", left: "70%" },
    { icon: <FaFacebook size={26} />, top: "95%", left: "20%" },
    { icon: <FaTwitch size={26} />, top: "50%", left: "90%" },
    { icon: <FaDiscord size={26} />, top: "80%", left: "52%" },
    { icon: <FaLinkedin size={26} />, top: "50%", left: "35%" },
  ];

  // 🎨 Configurable style fields
  const bgColorClass = "bg-transparent";
  const borderColorClass = "border-[#1f1f1f]";
  const textColorClass = "text-white";
  const roundedClass = "";
  const gridContainerClass = `relative bg-transparent`;

  return (
    <div className="bg-black-50 mb-8 border-b border-neutral-800">
      <div className="mx-auto max-w-2full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* 🧩 Grid Item 1: Session Management */}
          <div className={`${gridContainerClass}`}>
            <div className={`absolute inset-px bg-transparent border-r ${borderColorClass}`}></div>
            <div className={`relative flex h-full flex-col overflow-hidden ${roundedClass}`}>
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className={`mt-2 text-lg font-medium tracking-tight ${textColorClass} max-lg:text-center`}>Session Management</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Egris handles the entire session lifecycle & seamlessly managing key security features for robust user protection.
                </p>
              </div>
              <div className="relative h-50 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden border-transparent bg-transparent">
                  <div className={`absolute ${bgColorClass} ${roundedClass} shadow-md w-full h-full max-w-md mx-auto shadow-2xl`}>
                    <div className="absolute left-4 top-10 bottom-0 border border-gray-700"></div>
                    <ul className="space-y-4">
                      {blockedUsers.map((user, index) => (
                        <li key={index} className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full">
                              <span className="text-xl font-bold">✓</span>
                            </div>
                          </div>
                          <div>
                            <p className={`${textColorClass} text-sm`}>{user.email}</p>
                            <p className="text-gray-400 text-sm">{user.action}</p>
                            <p className="text-gray-400 text-sm">{user.by}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🧩 Grid Item 2: Social Sign-On */}
          <div className={gridContainerClass}>
            <div className={`absolute inset-px bg-transparent`} />
            <div className='relative flex h-full flex-col overflow-hidden'>
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className={`mt-2 text-lg font-medium tracking-tight ${textColorClass} max-lg:text-center`}>
                  Social Sign-On
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-400 max-lg:text-center">
                Simplify user onboarding with one-click login through trusted platforms.
                </p>
              </div>
              <div className="relative flex-1 bg-gradient-to-t from-red-500/40 via-red-400/20 to-transparent px-8 sm:px-10 max-lg:pt-10 max-lg:pb-12 lg:pb-2 overflow-hidden">
                <div className="relative w-full h-full">
                  {icons.map((item, i) => (
                    <div
                      key={i}
                      className="absolute shadow-md"
                      style={{
                        top: item.top,
                        left: item.left,
                        width: `${24 + i * 2}px`,
                        height: `${24 + i * 2}px`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    >
                      <div className="flex items-center justify-center w-full h-full text-white">
                        {item.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 🧩 Grid Item 3: Multi Factor */}
          <div className={gridContainerClass}>
            <div className={`absolute inset-px bg-[#0a0a0a] border-l ${borderColorClass}`}></div>
            <div className={`relative flex h-full flex-col overflow-hidden`}>
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className={`mt-2 text-lg font-medium tracking-tight ${textColorClass} max-lg:text-center`}>Multi Factor</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Add an extra layer of security with flexible multi-factor authentication options.</p>
              </div>
              <div className="h-50">
                {/* Laptop */}
                <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] aspect-[4/3] rounded-lg bg-black border-4 border-black">
                  {/* Laptop screen */}
                  <div className="h-4/5 bg-neutral-900 flex flex-col items-center justify-center rounded-lg px-4 py-2">
                    <div className="absolute -top-5 flex items-center justify-center">
                        <div className='w-8 h-2 mt-4 bg-black rounded-full'/>
                    </div>
                    <FaLock size={14}/>
                    <div className="text-sm font-semibold text-gray-700">2FA</div>
                    <div className="mt-2 w-4/5 h-5 rounded-full bg-neutral-700 flex items-center justify-center">
                      <span className="tracking-widest text-white text-sm">••••••</span>
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className="h-1/5 bg-gray-300" />
                </div>

                {/* Phone */}
                <div className="absolute bottom-[-15%] left-[60%] sm:left-[65%] w-[70px] sm:w-[90px] aspect-[9/16] rounded-2xl bg-black border-4 border-black shadow-lg z-10">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center rounded-xl px-2">
                    <div className="absolute -top-5 flex items-center justify-center">
                        <div className='w-8 h-2 mt-4 bg-black rounded-full'/>
                    </div>
                    <div className="flex justify-center items-center w-5 h-5 rounded-full bg-emerald-500 mb-2" >
                      <FaLock size={12}/>
                    </div>
                    <div className="w-4/5 h-4 rounded-sm bg-neutral-700 flex items-center justify-center">
                      <span className="text-xs tracking-widest text-white">••••••</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🧩 Grid Item 6: Magic Link */}
          <div className={gridContainerClass}>
            <div className={`absolute inset-px ${roundedClass} bg-transparent border-r border-t ${borderColorClass}`}></div>
            <div className={`relative flex h-full flex-col overflow-hidden ${roundedClass}`}>
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className={`mt-2 text-lg font-medium tracking-tight ${textColorClass} max-lg:text-center`}>Magic Link</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Fast & Secure way to increase user signup conversion.</p>
              </div>
              <div className='h-38 lg:h-full'>
                <div className='absolute bottom-[23%] left-[-10%] bg-black border border-neutral-800 p-4 rounded-2xl shadow-[0px_0px_30px_rgba(108,92,132,0.5)]'>
                  <span className='flex pl-10'>
                    <p className='font-bold text-md text-green-500'>https://</p>
                    <p className='font-bold text-md text-white/70 underline'>zMqGx7Jm2jT24YbQ8$FwRyvlKxq</p>
                  </span>
                </div>
                <img
                  className='absolute bottom-[23%] left-[50%] w-8'
                  src='https://img.icons8.com/?size=100&id=11945&format=png&color=000000' alt='cursor'/>
              </div>
            </div>
          </div>

          {/* 🧩 Grid Item 7: Fraud Detection */}
          <div className={gridContainerClass}>
            <div className={`absolute inset-px ${roundedClass} bg-transparent border-t ${borderColorClass}`}></div>
            <div className={`relative flex h-full flex-col overflow-hidden ${roundedClass}`}>
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className={`mt-2 text-lg font-medium tracking-tight ${textColorClass} max-lg:text-center`}>Fraud Detection</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Proactively identify and block suspicious login attempts.</p>
              </div>
              <div className='px-6 pt-18 pb-34'>
                {/* big ring */}
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 rounded-full flex-1 bg-gradient-to-t from-gray-500 via-gray-500/20 to-transparent'>
                  <div className="w-94 h-94 rounded-full border border-1 border-gray-800"></div>
                </div>
                {/* small ring*/}
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 rounded-full'>
                  <div className="w-64 h-64 rounded-full border border-1 border-gray-700"></div>
                </div>
                {/* Email Tags */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-5 flex flex-col items-center space-y-6">
                  {/* Green email */}
                  <div className="absolute bottom-10 left-17 transform -translate-x-1/2 flex items-center space-x-2">
                    <div className="bg-green-600 text-white px-4 py-1.5 rounded-sm text-sm font-medium">
                      berry_@gmail.com
                    </div>
                    <div className='bg-green-600 rounded-full p-2'><AiOutlineCheck /></div>
                  </div>

                  {/* Red email */}
                  <div className="absolute bottom-0 left-[-27px] transform -translate-x-1/2 flex items-center space-x-2">
                    <div className='bg-red-600 rounded-full p-2'><AiOutlineClose /></div>
                    <div className="bg-red-600 text-white px-4 py-1.5 rounded-sm text-sm font-medium">
                      jhon10@freemail.ms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* 🧩 Grid Item 9: Control user data */}
          <div className={gridContainerClass}>
            <div className={`absolute inset-px ${roundedClass} bg-transparent border-l border-t ${borderColorClass}`}></div>
            <div className={`relative flex h-full flex-col overflow-hidden ${roundedClass}`}>
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className={`mt-2 text-lg font-medium tracking-tight ${textColorClass} max-lg:text-center`}>Control user data</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Connect your own SMS or email provider—giving you full control over delivery, pricing, and compliance.</p>
              </div>
              <div className='px-6 pt-16 pb-34'>
                <div className="flex justify-center items-center h-full bg-red-500">
                  {/* center line */}
                  <div className='absolute bottom-26 left-1/2 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 border border-gray-800 w-full'></div>
                  {/* 1st point */}
                  <div className='absolute bottom-31 left-14 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 h-10'></div>
                  <div className='absolute bottom-38 left-14 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 bg-gray-800 px-4 py-1 text-sm rounded-sm'>Sendgrid</div>
                  {/* 2nd point */}
                  <div className='absolute bottom-21 left-30 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 h-10'></div>
                  <div className='absolute bottom-13 left-30 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 bg-gray-800 px-4 py-1 text-sm rounded-sm'>Vonage</div>
                  {/* 3rd point */}
                  <div className='absolute bottom-31 left-46 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 h-10'></div>
                  <div className='absolute bottom-38 left-46 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 bg-gray-800 px-4 py-1 text-sm rounded-sm'>Mailjet</div>
                  {/* 4th point */}
                  <div className='absolute bottom-21 left-60 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 h-10'></div>
                  <div className='absolute bottom-13 left-60 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 bg-gray-800 px-4 py-1 text-sm rounded-sm'>Twilio</div>
                  {/* 5th point */}
                  <div className='absolute bottom-31 left-75 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 h-10'></div>
                  <div className='absolute bottom-38 left-75 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 bg-gray-800 px-4 py-1 text-sm rounded-sm'>SMTP</div>
                  {/* 4th point */}
                  <div className='absolute bottom-21 left-88 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 border border-gray-800 h-10'></div>
                  <div className='absolute bottom-13 left-88 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-1 bg-gray-800 px-4 py-1 text-sm rounded-sm'>Sinch</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BentoInfo;