import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Debounce API call using setTimeout
    
    // Submit form data to server or email address for processing
    const data = {
      name,
      email,
      message,
    };

    axios
      .post("https://portfolio-17n9.onrender.com/portfolio", data)
      .then((res) => {
        console.log(res.data);
        setName("");
        setEmail("");
        setMessage("");
        setFormSubmitted(true);
        setIsLoading(false);

        // Display success message to user
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        // Display error message to user
      });
  };

  return (
    <section id="contact" className="py-0">
      <div
        className="container lg:w-1/2 mx-auto sm:p-0 lg:p-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,54,211,1) 0%, rgba(99,5,181,1) 100%)",
        }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center pt-6 text-white">
          Get in Touch
        </h2>
        {formSubmitted ? (
          <p className="text-white font-bold text-center pb-5 lg:text-2xl sm:test-lg">
            Thank You for Contacting Us!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className=" w-md mx-auto p-4   rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-indigo-200 font-bold mb-2"
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
                className="block text-indigo-200 font-bold mb-2"
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
                className="block text-indigo-200 font-bold mb-2"
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
                className="bg-gray-800 flex gap-2 hover:bg-gray-900 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isLoading && (
                  <div className="ml-4">
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
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.352 5.792 3.499 7.709l2.5-2.418zm2.564-2.483l-2.5 2.418A7.962 7.962 0 018 12h4c0 3.042-1.352 5.792-3.499 7.709z"
                      ></path>
                    </svg>
                  </div>
                )}
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
