"use client";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { CiWarning, CiWavePulse1 } from "react-icons/ci";

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-5 right-5 z-[50000] flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} message={toast.message} type={toast.type} removeToast={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem = ({ message, type, removeToast }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // Delay for slide-up effect
    setTimeout(() => setVisible(false), 5000); // Start slide-down before removing
    setTimeout(() => removeToast(), 8000);
  }, []);

  // Icons for different types
  const icons = {
    success: <FaCheckCircle color="green"/>,
    error: <CiWarning color="orange"/>,
    info: <CiWavePulse1/>,
  };

  return (
    <div
      className={`flex items-center gap-2 px-5 py-3 rounded-md shadow-lg text-white text-sm transition-all duration-500 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${
        type === "success"
          ? "bg-black ring-1 ring-borderColor"
          : type === "error"
          ? "bg-black ring-1 ring-borderColor"
          : "bg-black ring-1 ring-borderColor showdow-sm"
      }`}
    >
        <span className="text-xl">{icons[type] || <CiWavePulse1/>}</span>
        {message}
    </div>
  );
};

export default ToastContainer;

// shadow-[0px_0px_30px_rgba(46,204,113,0.5)] green
//shadow-[0px_0px_30px_rgba(211,84,0,0.5)] red