import React, { useState } from "react";
import axios from "axios";
import Socialicons from "./Socialicons";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server or email address for processing
    const data = {
      name,
      email,
      message,
    };
    axios
      .post("/api/contact", data)
      .then((res) => {
        console.log(res.data);
        // Display success message to user
      })
      .catch((err) => {
        console.error(err);
        // Display error message to user
      });
  };

  return (
    <section id="contact" className="py-0">
      <div className="container lg:w-1/2 mx-auto sm:p-0 lg:p-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className=" w-md mx-auto p-4 border border-gray-300 rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
          </div>
          <Socialicons/>
    </section>
  );
}

export default ContactForm;
