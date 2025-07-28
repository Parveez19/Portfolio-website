'use client';
import Head from 'next/head';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const result = await emailjs.send(
      'service_lgoj53u',     
      'template_k2lik64',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      '9RzVo0aa9PLglk_xj'      // e.g., 'aBcDeFgHiJK123456'
    );

    console.log('Email successfully sent:', result.text);
    setSubmitted(true);
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Something went wrong. Please try again.');
  }
};


  return (
    <>
      <Head>
        <title>Contact | Parveez</title>
        <meta name="description" content="Contact Parveez - Send a message or connect for collaboration." />
      </Head>

      <main className="min-h-screen px-6 py-12 bg-gray-900 text-white">
        <section className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="text-gray-400 text-center mb-8">
            Fill out the form below or email me at{' '}
            <a href="mailto:ahmedparveez47@gmail.com" className="text-indigo-400 underline">
      ahmedparveez47@gmail.com
                  </a>
          </p>

          {submitted ? (
            <p className="text-green-400 text-center text-xl">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 py-3 rounded-md w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </section>
      </main>
    </>
  );
}
