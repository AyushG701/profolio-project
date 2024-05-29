import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_std5tbu",
        "template_qoucssm",
        form.current,
        "mK46kDwynPVdvX1Rm",
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section className="contact section py-16 bg-gray-50" id="contact">
      <h2 className="text-3xl font-bold text-center mb-4">Get in touch</h2>
      <span className="block text-center text-gray-500 mb-8">Contact Me</span>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Talk To Me</h3>
            <div className="space-y-4">
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <i className="bx bxl-messenger text-3xl text-blue-500 mb-2"></i>
                <h3 className="text-lg font-medium">Messenger</h3>
                <span className="text-gray-500">AG23</span>
                <a
                  href="#"
                  className="text-blue-500 flex items-center justify-center mt-2"
                >
                  Write me <i className="bx bx-right-arrow-alt ml-1"></i>
                </a>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <i className="bx bx-mail-send text-3xl text-red-500 mb-2"></i>
                <h3 className="text-lg font-medium">Email</h3>
                <span className="text-gray-500">
                  ayushghimire7011@gmail.com
                </span>
                <a
                  href="mailto:ayushghimire7011@gmail.com"
                  className="text-blue-500 flex items-center justify-center mt-2"
                >
                  Write me <i className="bx bx-right-arrow-alt ml-1"></i>
                </a>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <i className="bx bxl-whatsapp text-3xl text-green-500 mb-2"></i>
                <h3 className="text-lg font-medium">Phone</h3>
                <span className="text-gray-500">+984**32***</span>
                <a
                  href="#"
                  className="text-blue-500 flex items-center justify-center mt-2"
                >
                  Write me <i className="bx bx-right-arrow-alt ml-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">
              Write me your project
            </h3>

            <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Insert your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Insert your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Project</label>
                <textarea
                  name="project"
                  cols="20"
                  rows="10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none custom-scrollbar h-28"
                  placeholder="Write your project"
                ></textarea>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 flex items-center justify-center">
                Send Message
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
