'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const MailSender = () => {
  const formRef = useRef(null); // ❌ เอา TypeScript ออก
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_anx89qv',
        'template_fofoo2q',
        formRef.current,
        'TQk_l9CSHFIAu68r3'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Email sent successfully!');
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setStatus('❌ There was an error sending the email.');
          setIsSending(false);
        }
      );
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}

      >
        <img src="/assets/images/Logo.svg" alt="" className='w-20' />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{
          duration: 1,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        className='text-3xl mt-10 font-bold'>Contact me
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: [0, -20] }}
        transition={{
          duration: 1,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-lg mx-auto mt-10 rounded-md shadow"
      >
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border p-2 rounded-md flex-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border p-2 rounded-md flex-1"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-2 w-full h-50 rounded-md"
        />
        <button
          type="submit"
          className="bg-[#B9FF66]/90 border-b-3 border-1  text-black py-2 px-4 rounded-md hover:bg-[#B9FF66] hover:scale-102 transition-all duration-500 flex justify-center items-center"
          disabled={isSending}
        >
          {isSending ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </div>
          ) : (
            'Send'
          )}
        </button>
        <p className="text-center text-sm text-green-600">{status}</p>
      </motion.form>
    </div>
  );
};

export default MailSender;
