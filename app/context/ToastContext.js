"use client";
import { createContext, useContext, useState } from "react";
import ToastContainer from "../Component/ToastContainer/ToastContainer";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Function to add toast
  const showToast = (message, type = "success", duration = 8000) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    // Remove toast after duration
    setTimeout(() => removeToast(id), duration);
  };

  // Function to remove toast
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast}/>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
