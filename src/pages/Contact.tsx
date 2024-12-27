import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../components/NavBar';
import ProfilePicture from '../components/ProfileAndLinks';
import TechStack from '../components/TechStack';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_olok9kn',
      'template_chclzen', 
      formData,
      'OLABVt-IwByzKHNv3' 
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[1fr,3.5fr,1fr] md:grid-rows-[auto,1fr,auto]">
        <ProfilePicture />
        <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
          <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-4">Let's Have A Chat! ☕</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md bg-glass border text-white focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full md:w-4/4 rounded-md bg-glass border text-white focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md bg-glass border text-white focus:ring-2 focus:ring-white focus:border-transparent"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-glass rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="order-2 md:order-3 flex flex-col items-center">
          <NavBar />
        </div>
          <TechStack />
      </div>
    </div>
  );
};

export default Contact;