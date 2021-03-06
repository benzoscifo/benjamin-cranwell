import React from "react"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
      <h1 className="sr-only">Contact Form</h1>
      <section className="text-gray-700">
        <div className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl">
          <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <form
              accept-charset="UTF-8"
              action="https://getform.io/f/b9a6314e-2785-4a82-b122-b58dea000ee7"
              method="POST"
              target="_blank"
              className="bg-blue shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block">
                  <h2 className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 text-lg">
                    Name
                  </h2>
                  <input
                    type="text"
                    name="fullname"
                    className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter name"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label className="block">
                  <h2 className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 text-lg">
                    Email
                  </h2>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter email"
                  />
                </label>
              </div>
              <div className="mb-6">
                <h2 className="sr-only">Message</h2>
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  for="exampleInputMessage"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your message"
                  className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 leading-8"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-argos text-white rounded p-2 w-full text-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full self-center text-center md:text-left">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Say hello
            </h2>
            <p className="pb-4 text-lg leading-relaxed">
              Send me a message or an email and we can chat.
            </p>
            <p>
              <b>Email: </b>
              <a
                href="mailto:bdcranwell@gmail.com"
                className="underline text-blue"
              >
                bdcranwell@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around">
        <div className="block text-center text-blue hover:text-white border-2 border-blue py-2 px-6 focusring hover:bg-blue rounded text-lg">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-blue hover:text-white border-2 border-blue py-2 px-6 focusring hover:bg-blue rounded text-lg">
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </div>
    </Layout>
  )
}
