import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-parallax"
import Shapes from "../images/light.jpg"

export default function about() {
  return (
    <Layout>
      <Parallax bgImage={Shapes} bgImageAlt="argos logo" strength={800}>
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="py-10 text-center sm:text-left">
            <p className="text-3xl text-white">
              UX Designer and Front-End Web Developer
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mx-auto max-w-screen-xl py-12">
          <div className="md:w-1/2 p-8 text-center sm:text-left text-white">
            <h2 className="text-3xl">Me</h2>
            <p className="text-lg pb-4">
              I am a UX Developer and Front-End Web Developer that has been
              working for a Design and Development Agency in south London for
              the past 7 years. I enjoy spending my time simplifying complex
              designs and improving page load times.
            </p>
            <p className="text-lg pb-4">
              I was born in Ireland to an Irish mother and Kiwi father and have
              two brothers and a sister. I have spent my life split between
              Ireland, New Zealand, Australia and the UK.
            </p>
            <p className="text-lg">
              I now live in North London with my Greek partner and two children
              all the while trying to understand them when they speak Greek to
              me.
            </p>
          </div>
          <div className="md:w-1/2 px-8">
            <StaticImage
              className="object-cover object-center rounded"
              alt="family at a waterfall"
              src="../images/family.jpg"
              rotate="90"
            />
          </div>
        </div>
      </Parallax>
      <div className="flex flex-wrap mx-auto py-6 px-6 w-full max-w-screen-xl justify-around">
        <div className="block text-center text-white bg-darkPastelGreen hover:text-darkPastelGreen border-2 border-white py-2 px-6 focusring hover:bg-white rounded text-lg">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-white bg-darkPastelGreen hover:text-darkPastelGreen border-2 border-white py-2 px-6 focusring hover:bg-white rounded text-lg">
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
