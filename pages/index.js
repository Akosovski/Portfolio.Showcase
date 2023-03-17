import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

// PNG
import akhta from "../public/akhta-profile.png";
import bootstrap from "../public/bootstrap.png";

// SKILLS SVG
import html5 from "../public/html5.svg";
import css from "../public/css.svg";
import js from "../public/javascript.svg";
import python from "../public/python.svg";
import node from "../public/node.svg";
import react from "../public/react.svg";
import sql from "../public/sql.svg";
import php from "../public/php.svg";
import laravel from "../public/laravel.svg";
import django from "../public/django.svg";
import tailwind from "../public/tailwind.svg";
import mongodb from "../public/mongodb.svg";
import figma from "../public/figma.svg";

// WEB PNG PORTFOLIOS
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Muhammad Akhta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* JAVASCRIPT MODULES */}
        <script type="text/javascript" src="/static/script.js" async />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 sm:px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-8 flex justify-between dark:text-white">
            <h1 className="font-abel text-xl font-bold">Introduction</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="transition ease-in-out delay-50 duration-200 cursor-pointer text-2xl text-teal-600 hover:text-teal-300 active:text-teal-700"
                />
              </li>
              <li>
                <a className="transition ease-in-out delay-50 duration-200 px-4 py-2 border-none rounded-md ml-8 cursor-pointer text-xxl text-white bg-teal-500 hover:bg-teal-600 hover:drop-shadow-xl active:bg-teal-800"
                  href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/069f81aaff82a167820afa9b0b1fdacf.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center sm:p-10 py-10">
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl" id="greet-1">
              Hi, my name is
            </h3>
            <h2 className="text-4xl py-2 text-teal-500 font-medium dark:text-teal-400 md:text-5xl drop-shadow-md" id="name-title">
              Muhammad Akhta
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl" id="greet-2">
              I&apos;m a <strong className="text-teal-500">Web Developer.</strong>
            </h3>
            <div className="mx-auto bg-gradient-to-b drop-shadow-lg from-teal-500 rounded-full w-52 h-52 relative overflow-hidden mt-5 mb-5 md:mb-8 md:h-96 md:w-96" id="profile-pic">
              <Image src={akhta} layout="fill" objectFit="cover" alt="profile-pic"/>
            </div>
            <p id="intro-desc" className="py-5 text-justify md:text-center leading-loose text-gray-800 dark:text-gray-200 max-w-m mx-auto">
            Bachelor of Computer Science from <strong>BINUS University. </strong>
            Already worked on several web application projects and 
            has prior experience in teaching computer programming, 
            currently advancing on <span class="text-teal-500 font-bold">Node.js</span> and <span class="text-teal-500 font-bold">React.js</span>.
            </p>
            
          </div>
        </section>
        

        <section>
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Skills & Proficiencies</h3>
            
            <p id="skillpros" className="py-2 leading-loose md:leading-relaxed text-gray-800 dark:text-gray-200 text-justify mb-3">
              Since I first learned programming, Google and Youtube have been my best friends in understanding more
              deeply about the material I&apos;m studying besides the main college material. As time goes by, I understand more about the concepts and 
              shortcuts while working on a project so that it can be completed more efficiently. Here are the visualizations of my skills that I have made.
            </p>

            <p id="initiator" className="font-bold py-2 leading-8 text-teal-600 dark:text-teal-600 mt-3 text-center">
              Hover or click the icon to see further details.
            </p>

            {/* FLEX BOX PROGRAMMING LANGUAGES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
              
              {/* HTML5 */}
                <div className="box-border border-1 m-2 mx-5">
                  <h3 className="text-lg dark:text-white font-semibold text-center">HTML5</h3>
                  <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">              
                    <Image src={html5} width={100} height={100} alt="html5-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                    <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★80 I have advance skill in this language</span>
                  </a>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                    <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
             

              {/* CSS */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center">CSS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={css} width={100} height={100} alt="css-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★75 I have advance skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-2" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              
              {/* JAVASCRIPT */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Javascript</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={js} width={100} height={87} alt="js-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★60 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-3" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* PHP */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">PHP</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={php} width={100} height={87} alt="py-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★60 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-12" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* PYTHON */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Python</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={python} width={100} height={87} alt="py-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★50 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-4" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

            </div>

            {/* FLEX BOX FRAMEWORK & LIBRARIES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
              
              {/* REACT */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center">React JS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={react} width={100} height={100} alt="react-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★40 I have intermediate skill in this library</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-5" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* NODE */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Node JS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={node} width={100} height={96} alt="node-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★35 I have basic skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-6" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* DJANGO */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Django</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={django} width={100} height={97} alt="dj-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★50 I have intermediate skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-7" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* LARAVEL */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Laravel</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={laravel} width={100} height={97} alt="dj-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★50 I have intermediate skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-13" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* TAILWIND */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Tailwind</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={tailwind} width={100} height={97} alt="tailwind-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★30 I have basic skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-8" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* BOOTSTRAP */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Bootstrap</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={bootstrap} width={100} height={85} alt="bootstrap-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★75 I have advance skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-9" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              
            </div>

            {/* FLEX BOX DATABASES & TOOLS */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
            
              {/* MONGODB */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">MongoDB</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={mongodb} width={100} height={100} alt="mongo-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★30 I have beginner skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-10" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* SQL */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">SQL</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={sql} width={100} height={100} alt="sql-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★50 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-13" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* FIGMA */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Figma</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={figma} width={100} height={100} alt="figma-icon"/>
                  <span className="tooltiptext text-white bg-teal-300 dark:text-white font-bold">★50 I have intermediate skill in this tool</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-11" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>
        </section>    

        <section className="py-10">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Project Portfolios</h3>
            <p id="port-desc" className="text-justify py-2 leading-8 text-gray-800 dark:text-gray-200">
              I already completed some large scale and small scale projects which some of them are for college and my own side projects I made in my free time.
              Here are the list of projects that I have completed, I also linked them to the codebase in my Github. 
              Some of them are already deployed, while most of them are currently offline.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            
          </div>
        </section>

      </main>
    </div>
  );
}
