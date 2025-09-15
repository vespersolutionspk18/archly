'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header />
    <div className="w-full bg-white">
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Contact background"
          fill
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 md:px-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tighter mb-4 text-white">
              GET IN TOUCH
            </h1>
            <h5 className="text-sm md:text-lg lg:text-xl text-white font-mono">
              LET&apos;S BRING YOUR VISION TO LIFE
            </h5>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white">
        <div className="w-full p-4 md:p-8 lg:p-16 flex flex-col lg:flex-row gap-6 lg:gap-16">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h5 className="font-mono text-lg md:text-xl text-black">CONTACT INFORMATION</h5>
            <div className="text-black space-y-6">
              <div>
                <h6 className="font-mono text-md mb-2">HEADQUARTERS</h6>
                <p className="text-lg">15260 Ventura Blvd, Suite 1200<br/>Sherman Oaks, CA 91403</p>
              </div>
              <div>
                <h6 className="font-mono text-md mb-2">EMAIL</h6>
                <p className="text-lg">hello@archuviz.co</p>
              </div>
              <div>
                <h6 className="font-mono text-md mb-2">PHONE</h6>
                <p className="text-lg">(818) 925-7842</p>
              </div>
              <div>
                <h6 className="font-mono text-md mb-2">WEBSITE</h6>
                <p className="text-lg">www.archuviz.co</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-sm text-black block mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-black font-sans focus:outline-none focus:border-black transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-mono text-sm text-black block mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-black font-sans focus:outline-none focus:border-black transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-sm text-black block mb-2">COMPANY</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-black font-sans focus:outline-none focus:border-black transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-black block mb-2">SUBJECT</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-black font-sans focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="design-services">Design Services</option>
                  <option value="3d-rendering">3D Rendering</option>
                  <option value="website-setup">Website Setup</option>
                  <option value="crm-demo">CRM Demo</option>
                  <option value="project-quote">Project Quote</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-sm text-black block mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-black font-sans focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="font-mono text-md px-6 py-3 rounded-sm tracking-tighter cursor-pointer transition-all duration-200 bg-black text-white hover:bg-gray-900"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;