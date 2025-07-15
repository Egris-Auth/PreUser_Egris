import React from 'react'
import { CiUnlock } from "react-icons/ci";

const RenderEmailContent = ({selectedEmail, emailData}) => {
    
    if (!selectedEmail) {
        return <p className="text-gray-500 dark:text-gray-400">Select an email to view its content.</p>;
    }

    switch (selectedEmail.type) {
        case "linkverification":
            return (
            <div>
                <h3 className="flex justify-left items-center gap-2 text-md mb-2"><CiUnlock size={15}/> Email verification</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">From: Apify <span className="text-gray-500 dark:text-gray-400">| 2 min ago</span></p>
                <div className="bg-white dark:bg-transparent rounded-lg">
                    <div
                        style={{
                        background: emailData.color.background,
                        padding: "10px",
                        fontFamily: "Arial, sans-serif",
                        }}
                    >
                    <div>
                    <div>
                        {/* Logo Section */}
                        <div className='p-[15px]'>
                            <img
                            src={emailData.logoUrl}
                            alt="Logo"
                            style={{ maxWidth: "40px", display: "block",}}
                            />
                        </div>

                        <hr className='border-gray-700 mt-4 mb-4 ml-[15px]'/>

                        {/* Title Section */}
                        <p className='text-lg font-bold p-[15px] '>
                            Verify email for {emailData.brand}!
                        </p>

                        {/* Content Section */}
                        <p className='text-sm ml-[15px] mt-2 mb-4'>
                            We’re excited to have you on board.
                        </p>
                        <p className='text-sm ml-[15px] mb-8'>
                            Click the button below to complete the email verification for Apify
                        </p>

                        {/* Button Section */}
                        <div>
                        {emailData.isUrl ? (
                            <a
                            href={emailData.url}
                            style={{
                                color: emailData.color.linkText,
                                textDecoration: "underline",
                                padding: "15px",
                            }}
                            >
                            {emailData.url}
                            </a>
                        ) : (
                            <a
                            href={emailData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 20px",
                                marginLeft: "15px",
                                fontSize: "14px",
                                color: emailData.color.buttonText,
                                backgroundColor: emailData.color.primary,
                                textDecoration: "none",
                                borderRadius: "4px",
                            }}
                            >
                                Verify email
                            </a>
                        )}
                        </div>

                        {/* Footer Section */}
                        <p className="text-white p-[15px] mt-[40px] font-bold text-sm">
                            Don't request this?
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 ml-[15px] text-sm">
                            {emailData.footerMessage}
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            );
        
        
        case "codeverification":
            return (
            <div>
                <h3 className="flex justify-left items-center gap-2 text-md mb-2"><CiUnlock size={15}/> Email verification</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">From: Apify <span className="text-gray-500 dark:text-gray-400">| 2 min ago</span></p>
                <div className="bg-white dark:bg-transparent rounded-lg">
                    <div
                        style={{
                        background: emailData.color.background,
                        padding: "10px",
                        fontFamily: "Arial, sans-serif",
                        }}
                    >
                    <div>
                    <div>
                        {/* Logo Section */}
                        <div className='p-[15px]'>
                            <img
                            src={emailData.logoUrl}
                            alt="Logo"
                            style={{ maxWidth: "40px", display: "block",}}
                            />
                        </div>

                        <hr className='border-gray-700 mt-4 mb-4 ml-[15px]'/>

                        {/* Title Section */}
                        <p className='text-lg font-bold p-[15px] '>
                            Verify email for {emailData.brand}!
                        </p>

                        {/* Content Section */}
                        <p className='text-sm ml-[15px] mt-2 mb-4'>
                            We’re excited to have you on board.
                        </p>
                        <p className='text-sm ml-[15px] mb-8'>
                            Click the button below to complete the email verification for Apify
                        </p>

                        {/* Button Section */}
                        <p 
                        style={{
                            display: "inline-block",
                            marginLeft: "15px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: emailData.color.primary,
                        }}>
                            854862
                        </p>

                        {/* Footer Section */}
                        <p className="text-white p-[15px] mt-[40px] font-bold text-sm">
                            Don't request this?
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 ml-[15px] text-sm">
                            {emailData.footerMessage}
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            );

        case "welcome":
            return (
            <div>
                <h3 className="text-lg font-semibold mb-2">🔐 Security Alert</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">From: Google Security <span className="text-gray-500 dark:text-gray-400">| 2 min ago</span></p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-900 dark:text-gray-100">
                    Your verification code is: <span className="font-bold text-blue-500">7646</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                    Please enter this code to verify your identity. If you did not request this, please ignore this email.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500">
                    Verify Now
                </button>
                </div>
            </div>
            );

        default:
            return <p className="text-gray-500 dark:text-gray-400">Unknown email format.</p>;
        }
};

export default RenderEmailContent;