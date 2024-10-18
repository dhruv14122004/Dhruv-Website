const Contact = () => {
    return (
      <div
        id="Contact"
        className="md-12 lg:px-44 px-[20px] custom_yellow pt-28 justify-center flex flex-col items-center"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Contact</h2>
        <form action="" className="w-full max-w-lg">
          <div className="pb-10">
            <label htmlFor="name" className="block text-lg font-medium pb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border-red-500 border-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
            />
          </div>
          <div className="pb-10">
            <label htmlFor="email" className="block text-lg font-medium pb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border-red-500 border-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
            />
          </div>
          <div className="pb-10">
            <label htmlFor="message" className="block text-lg font-medium pb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className="w-full p-3  border-red-500 border-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Contact;
  