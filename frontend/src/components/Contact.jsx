import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const res = await fetch("https://dhruv-website.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="Contact" className="card w-full max-w-7xl min-h-[400px] mx-auto mt-10 mb-16 text-center">
      <h2 className="text-3xl mb-4 text-yellow-400">Contact</h2>
      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="text-2xl px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="text-2xl px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="text-2xl px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md"
          required
        />
        <button type="submit" className="btn px-6 py-2 self-center text-2xl">
          Send
        </button>
        {status && <p className="mt-2 text-xl text-yellow-400">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
