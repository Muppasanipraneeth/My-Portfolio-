import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent by ${formData.name}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
