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
import django from "../public/django.svg";
import tailwind from "../public/tailwind.svg";
import mongodb from "../public/mongodb.svg";
import vscode from "../public/vscode.svg";
import figma from "../public/figma.svg";

// WEB PNG PORTFOLIOS
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Muhammad Akhta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
                  href="https://cdn.discordapp.com/attachments/995173807750926346/1078502004369920052/CV_AKHTA_CAESAR.pdf">
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
            <p className="text-md py-5 text-justify md:text-center leading-loose text-gray-800 dark:text-gray-200 max-w-m mx-auto md:text-lg">
            Bachelor of Computer Science from <strong>BINUS University. </strong>
            Web developer who already worked on several web application projects and 
            has prior experience in teaching computer programming, 
            currently advancing on <span class="text-teal-500 font-bold">Node.js</span> and <span class="text-teal-500 font-bold">Django</span>.
            </p>
            
          </div>
        </section>

        <section>
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Skills & Proficiencies</h3>
            
            <p className="text-md sm:text-lg py-2 leading-loose md:leading-relaxed text-gray-800 dark:text-gray-200 text-justify mb-3">
              Since I first learned programming, Google and Youtube have been my best friends in understanding more
              deeply about the material I&apos;m studying besides the main college material. As time goes by I understand more about the concepts and 
              shortcuts while working on a project so that it can be completed more efficiently.
            </p>

            {/* FLEX BOX PROGRAMMING LANGUAGES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
              
              {/* HTML5 */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center">HTML5</h3>
                <a href="https://en.wikipedia.org/wiki/HTML" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={html5} width={100} height={100} alt="html5-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* CSS */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center">CSS</h3>
                <a href="https://en.wikipedia.org/wiki/CSS" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={css} width={100} height={100} alt="css-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              
              {/* JAVASCRIPT */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Javascript</h3>
                <a href="https://en.wikipedia.org/wiki/JavaScript" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={js} width={100} height={87} alt="js-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* PYTHON */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Python</h3>
                <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                <Image src={python} width={100} height={87} alt="py-icon"/>
              </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

            </div>

            {/* FLEX BOX FRAMEWORK & LIBRARIES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
              
              {/* REACT */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center">React JS</h3>
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={react} width={100} height={100} alt="react-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* NODE */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Node JS</h3>
                <a href="https://en.wikipedia.org/wiki/Node.js" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={node} width={100} height={96} alt="node-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* DJANGO */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Django</h3>
                <a href="https://en.wikipedia.org/wiki/Django_(web_framework)" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={django} width={100} height={97} alt="dj-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* TAILWIND */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Tailwind</h3>
                <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={tailwind} width={100} height={97} alt="tailwind-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* BOOTSTRAP */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Bootstrap</h3>
                <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={bootstrap} width={100} height={85} alt="bootstrap-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              
            </div>

            {/* FLEX BOX DATABASES & TOOLS */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
            
              {/* MONGODB */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">MongoDB</h3>
                <a href="https://en.wikipedia.org/wiki/MongoDB" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={mongodb} width={100} height={100} alt="mongo-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* FIGMA */}
              <div className="box-border border-1 m-2 mx-5">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Figma</h3>
                <a href="https://en.wikipedia.org/wiki/Figma_(software)" class="transition ease-in-out delay-50 duration-200 cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4 hover:brightness-50">
                  <Image src={figma} width={100} height={100} alt="figma-icon"/>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

            </div>

            <p className="text-lg font-bold py-2 leading-8 text-teal-600 dark:text-gray-200 mt-3 text-center">
              Click or tap the icon to see the details.
            </p>
          </div>
        </section>

        

        <section className="py-10">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Project Portfolios</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consect et nesciunt et justo sed
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet, consect et nesciunt et justo sed
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
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt=""
              />
            </div>
          </div>
        </section>

        {/*} This Section will be moved to footer */}
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://www.linkedin.com/in/muhammad-akhta/" target="_blank" rel="noreferrer"><AiFillLinkedin className="transition ease-in-out delay-50 duration-200 cursor-pointer text-xxl text-teal-500 drop-shadow-lg hover:text-teal-400 active:text-teal-700"/></a>
          <a href="https://www.instagram.com/akhta.cr/" target="_blank" rel="noreferrer"><AiFillInstagram className="transition ease-in-out delay-50 duration-200 cursor-pointer text-xxl text-teal-500 drop-shadow-lg hover:text-teal-400 active:text-teal-700"/></a>
          <a href="https://github.com/Akosovski" target="_blank" rel="noreferrer"><AiFillGithub className="transition ease-in-out delay-50 duration-200 cursor-pointer text-xxl text-teal-500 drop-shadow-lg hover:text-teal-400 active:text-teal-700"/></a>

          <div class="wrapper">
            <div class="icon facebook">
                <div class="tooltip">
                  Facebook
                </div>
                <span><i class="fab fa-facebook-f"></i></span>
            </div>
            <div class="icon twitter">
                <div class="tooltip">
                  Twitter
                </div>
                <span><i class="fab fa-twitter"></i></span>
            </div>
            <div class="icon instagram">
                <div class="tooltip">
                  Instagram
                </div>
                <span><i class="fab fa-instagram"></i></span>
            </div>
            <div class="icon github">
                <div class="tooltip">
                  Github
                </div>
                <span><i class="fab fa-github"></i></span>
            </div>
            <div class="icon youtube">
                <div class="tooltip">
                  YouTube
                </div>
                <span><i class="fab fa-youtube"></i></span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
