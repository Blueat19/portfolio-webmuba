import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // Initial form state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending'); // Update form state to "sending"

    // ... rest of the form submission logic remains the same ...

  };

  return (
    <div className="container mx-auto max-w-md mt-10">  {/* Added container for centering */}
      <form id="form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" /> {/* Replace with your Web3Forms access key */}
        <input type="checkbox" className="hidden" style={{ display: 'none' }} name="botcheck" />

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border-2 placeholder-text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 items-center"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={`empty-feedback text-sm mt-1 ${!name && formStatus === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
            {formStatus === 'error' && !name ? (
              <FontAwesomeIcon icon={faExclamationCircle} className="mr-2 text-red-400" />
            ) : null}
            Please provide your full name.
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">Email Address</label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            required
            className="w-full px-4 py-3 border-2 placeholder-text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <div className={`empty-feedback text-sm mt-1 ${!name && formStatus === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
            {formStatus === 'error' && !name ? (
              <FontAwesomeIcon icon={faExclamationCircle} className="mr-2 text-red-400" />
            ) : null}
            Please provide your full email address.
          </div>
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 border-2 placeholder-text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className={`empty-feedback text-sm mt-1 ${!message && formStatus === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
            {formStatus === 'error' && !message ? (
              <FontAwesomeIcon icon={faExclamationCircle} className="mr-2 text-red-400" />
            ) : null}
            Please enter your message.
          </div>
        </div>

        <motion.button 
        type="submit" 
        whileHover={{ scale: 1.1}}
        initial={{ x: "-100vw"}}
        animate={{ x: 0}}
        style= {{backgroundColor:"blue"}}size="lg" 
        block className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >Send Message
        </motion.button>
      </form>
    </div>
  );
}
