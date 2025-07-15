import React from "react";

const CompareServices = () => {
  return (
    <div className="bg-transparent mt-[100px] py-20 sm:py-28">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <p className="mt-6 text-lg text-white-600">
            Compare our <span className="font-medium text-red-500">Semi-Hosted</span> and <span className="font-medium text-red-500">Fully-Hosted</span> services to find what fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:gap-20">
          {/* Semi-Hosted */}
          <div className="bg-transarent rounded-2xl p-12">
            <h3 className="text-3xl font-semibold text-gray-200">Semi-Hosted</h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Store user data in your own database and utilize our advanced session management and authentication features.
            </p>

            <ul className="mt-10 space-y-6 text-gray-200">
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Session management
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Email sending features
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Social sign-on
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Authenticate user by Email, UserName or Phone Number
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Magic link authentication
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Password recovery
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                SMS verification
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Passkey
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Fraud and Abuse Prevention
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                2FA
              </li>
            </ul>
          </div>

          {/* Fully-Hosted */}
          <div className="bg-transparent rounded-2xl p-12">
            <h3 className="text-3xl font-semibold text-gray-200">Fully-Hosted</h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Enjoy all the features of Semi-Hosted, with us handling data storage and management for your users.
            </p>

            <ul className="mt-10 space-y-6 text-gray-200">
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                All features in Semi-Hosted
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                User data storage and management
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-green">•</span>
                Role base authentication
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareServices;