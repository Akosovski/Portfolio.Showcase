import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import * as React from 'react';
import { useState } from "react";
import Image from "next/image";

// Material UIs
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import 'tailwindcss/tailwind.css';

// PNG
import akhta from "../public/akhta-profile.png";

// SVG FILES
import bootstrap from "../public/bootstrap.svg";
import html5 from "../public/html5.svg";
import css from "../public/css.svg";
import js from "../public/javascript.svg";
import python from "../public/python.svg";
import node from "../public/node.svg";
import react from "../public/react.svg";
import sql from "../public/sql.svg";
import php from "../public/php.svg";
import java from "../public/java.svg"
import laravel from "../public/laravel.svg";
import django from "../public/django.svg";
import tailwind from "../public/tailwind.svg";
import mongodb from "../public/mongodb.svg";
import figma from "../public/figma.svg";
import next from "../public/nextjs.svg"
import photoshop from "../public/photoshop.svg";
import linkedin from "../public/linkedin.svg";
import gitlab from "../public/gitlab.svg";
import github from "../public/github.svg";
import instagram from "../public/instagram.svg";
import quora from "../public/quora.svg";
import freecodecamp from "../public/freecodecamp.svg";
import hackerrank from "../public/hackerrank.svg";
import connected from "../public/connected.svg";
import disconnected from "../public/disconnected.svg"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modal_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 335,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Muhammad Akhta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* JAVASCRIPT MODULES */}
        <script type="text/javascript" src="/static/script.js" async />

      </Head>
      <main className=" bg-white px-5 dark:bg-gray-900 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-8 flex justify-between dark:text-white">
            <h1 className="font-abel text-xl font-bold">Introduction</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="transition ease-in-out delay-50 duration-200 cursor-pointer text-2xl text-blue-600 hover:text-blue-300 active:text-blue-700"
                />
              </li>
              <li>
                <a className="transition ease-in-out delay-50 duration-200 px-4 py-2 border-none rounded-md ml-8 cursor-pointer sm:text-xl text-xxl text-white bg-blue-600 hover:bg-blue-700 hover:drop-shadow-xl active:bg-teal-800"
                  href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/069f81aaff82a167820afa9b0b1fdacf.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* INTRODUCTION */}
          <div className="text-center sm:p-10 py-10">
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl" id="greet-1">
              Hi, my name is
            </h3>
            <h2 className="text-4xl py-2 text-blue-500 font-medium dark:text-blue-600 md:text-5xl drop-shadow-md" id="name-title">
              Muhammad Akhta
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl" id="greet-2">
              I&apos;m a <strong className="text-blue-500">Web Developer.</strong>
            </h3>
            <div className="mx-auto bg-gradient-to-b drop-shadow-lg from-blue-700 rounded-full w-52 h-52 relative overflow-hidden mt-5 mb-5 md:mb-8 md:h-96 md:w-96" id="profile-pic">
              <Image src={akhta} layout="fill" objectFit="cover" alt="profile-pic"/>
            </div>
            <p id="intro-desc" className="py-5 text-justify md:text-center leading-loose text-gray-800 dark:text-gray-200 max-w-m mx-auto">
            Graduated Bachelor of Computer Science from <strong>BINUS University. </strong>
            Already worked on several web application projects and 
            has prior experience in teaching computer programming, 
            currently advancing on <span class="text-blue-600 font-bold">Node.js</span> and <span class="text-blue-600 font-bold">React.js</span>.
            </p>
            
          </div>
        </section>
        
        {/* SKILLS & PROFICIENCIES */}
        <section className="m-0">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Skills & Proficiencies</h3>
            
            <p id="skillpros" className="py-2 leading-loose md:leading-relaxed text-gray-800 dark:text-gray-200 text-justify mb-3">
              Since I first learned programming, Google and Youtube have been my best friends in understanding more
              deeply about the material I&apos;m studying besides the main college material. As time goes by, I understand more about the concepts and 
              shortcuts while working on a project so that it can be completed more efficiently. Here are the visualizations of my skills that I have made.
            </p>

            <p id="initiator" className="font-bold py-2 leading-8 text-blue-600 dark:text-blue-600 mt-3 text-center">
              Hover or click the icon to see further details.
            </p>

            {/* FLEX BOX PROGRAMMING LANGUAGES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-2 -m-1 sm:m-2">
              
              {/* HTML5 */}
                <div className="box-border border-1 m-2 mx-4">
                  <h3 className="text-lg dark:text-white font-semibold text-center">HTML5</h3>
                  <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">              
                    <Image src={html5} width={100} height={100} alt="html5-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                    <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★80 I have advance skill in this language</span>
                  </a>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                    <div id="progress-bar-1" class="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
             

              {/* CSS */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center">CSS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={css} width={100} height={100} alt="css-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★75 I have advance skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-2" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              
              {/* JAVASCRIPT */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Javascript</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={js} width={100} height={87} alt="js-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★60 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-3" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* PHP */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">PHP</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={php} width={100} height={87} alt="py-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-12" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* PYTHON */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Python</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={python} width={100} height={87} alt="py-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★50 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-4" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* JAVA */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Java</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={java} width={100} height={87} alt="py-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-15" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

            </div>

            {/* FLEX BOX FRAMEWORK & LIBRARIES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
              
              {/* REACT */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center">React JS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={react} width={100} height={100} alt="react-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★50 I have intermediate skill in this library</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-5" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* NODE */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Node JS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={node} width={100} height={96} alt="node-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-6" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* NEXT */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Next JS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={next} width={97} height={97} alt="node-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-16" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* DJANGO */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Django</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={django} width={100} height={97} alt="dj-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★50 I have intermediate skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-7" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* LARAVEL */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Laravel</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={laravel} width={100} height={97} alt="dj-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have intermediate skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-13" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* TAILWIND */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Tailwind</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={tailwind} width={100} height={97} alt="tailwind-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★50 I have intermediate skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                  <div id="progress-bar-8" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* BOOTSTRAP */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Bootstrap</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={bootstrap} width={100} height={85} alt="bootstrap-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★75 I have advance skill in this framework</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-9" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              
            </div>

            {/* FLEX BOX DATABASES & TOOLS */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-3">
            
              {/* MONGODB */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">MongoDB</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={mongodb} width={100} height={100} alt="mongo-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-10" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* SQL */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">SQL</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={sql} width={100} height={100} alt="sql-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★50 I have intermediate skill in this language</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-14" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* FIGMA */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Figma</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={figma} width={100} height={100} alt="figma-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this tool</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-11" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

              {/* PHOTOSHOP */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">Photoshop</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={photoshop} width={100} height={100} alt="photoshop-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
                  <span className="tooltiptext text-white bg-blue-500 dark:text-white font-bold">★30 I have basic skill in this tool</span>
                </a>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div id="progress-bar-17" class="bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>
        </section>    
        
        {/* PROJECT PORTFOLIOS */}
        <section className="py-10">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Project Portfolios</h3>
            <p id="port-desc" className="text-justify py-2 leading-8 text-gray-800 dark:text-gray-200">
              I already completed projects which were used for college and my own side projects I made in my free time.
              Here are the list of projects that I have completed, I also linked them to the codebase in my Github. 
              Some of them are already deployed into production, and the rest are currently offline.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

          <div className="basis-1/3 flex-1">
              <Card className="rounded-lg dark:bg-black drop-shadow-xl bg-gray-100
              transition ease-in-out delay-50 duration-200">
                <CardMedia component="img" title="web1"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="font-abel text-blue-600 dark:text-white font-bold grid grid-cols-2 justify-end mt-1">
                    UMKM Bookeeping
                    <div className="flex justify-end">
                      <Image src={connected} alt="connected-icon" width={35} height={35}/>
                      <span className="text-green-600 m-2 mt-1 text-xl deployment">Deployed</span>
                    </div>
                  </Typography>
                  <Typography variant="body2" className="dark:text-white font-abel text-lg">
                    Financial bookkeeping and product management web app for MSMEs. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Button onClick={handleOpen} className="font-bold transition ease-in-out delay-50 duration-200 dark:text-white text-lg font-abel">Learn More</Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={modal_style} className="rounded-xl bg-white">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Project Details
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          This is the details for the project complete description.
                        </Typography>
                        <Box className="flex text-center justify-end w-full mt-4">
                          <Button href="https://github.com/Akosovski" 
                          className="mt-3 mr-3 text-blue-600 font-abel font-bold -mb-3" 
                          target="_blank" rel="noreferrer">View Code</Button>
                          <Button href="https://github.com/Akosovski" 
                          className="mt-3 text-blue-600 font-abel font-bold -mb-3" 
                          target="_blank" rel="noreferrer">Production</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                </CardActions>
              </Card>
            </div>

            <div className="basis-1/3 flex-1">
              <Card className="rounded-lg dark:bg-black drop-shadow-xl bg-gray-100
              transition ease-in-out delay-50 duration-200">
                <CardMedia component="img" title="web1"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="font-abel text-blue-600 dark:text-white font-bold grid grid-cols-2 justify-end mt-1">
                    MyXP
                    <div className="flex justify-end">
                      <Image src={disconnected} alt="disconnected-icon" width={35} height={35}/>
                      <span className="text-red-500 m-2 mt-1 text-xl deployment">Offline</span>
                    </div>
                  </Typography>
                  <Typography variant="body2" className="dark:text-white text-lg font-abel">
                    Activity logging app with progress bar style leveling. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Button onClick={handleOpen} className="font-bold transition ease-in-out delay-50 duration-200 dark:text-white text-lg font-abel">Learn More</Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={modal_style} className="rounded-xl bg-white">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Project Details
                        </Typography>
                        <Typography id="modal-modal-description" className="md:text-lg text-md" sx={{ mt: 2 }}>
                          This is the details for the project complete description.
                        </Typography>
                        <Box className="flex text-center justify-end w-full mt-4">
                          <Button href="https://github.com/Akosovski" 
                          className="mt-3 mr-3 text-blue-600 font-abel font-bold -mb-3" 
                          target="_blank" rel="noreferrer">View Code</Button>
                          <Button href="https://github.com/Akosovski" 
                          className="mt-3 text-blue-600 font-abel font-bold -mb-3" 
                          target="_blank" rel="noreferrer">Production</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                </CardActions>
              </Card>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="pb-10">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Certifications</h3>
            <p id="port-desc" className="text-justify py-2 leading-8 text-gray-800 dark:text-gray-200">
            Apart from working on side projects in my free time, I also take several online courses that were available 
            on learning websites such as Udemy, HackerRank, and freeCodeCamp.
            Below is the list of certificates I received after completing the courses.
            </p>
            <p id="initiator" className="font-bold py-2 leading-8 text-blue-600 dark:text-blue-600 mt-1 mb-5 text-center">
              Click one from the list to see further details.
            </p>

            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">

                <a className="flex rounded-lg drop-shadow-lg bg-gray-100 dark:bg-black 
                transition ease-in-out delay-50 duration-200 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800" 
                href="https://www.hackerrank.com/certificates/f1b25f4ac1c5" target="_blank" rel="noreferrer">
                  <div className="col-span-2 pt-2 pl-2 w-24 flex-none m-3">
                    <Image src={hackerrank} alt="hackerrank-1" className="rounded-lg"/>
                  </div>
                  <div className="col-span-2 md:text-xl text-lg p-6 text-gray-800 dark:text-gray-300 md:mt-2 mt-1">
                    <p className="mr-3 font-semibold">HackerRank</p>
                    <p>Javascript (Basic)</p>
                  </div>
                </a>

                <a className="flex rounded-lg drop-shadow-lg bg-gray-100 dark:bg-black 
                transition ease-in-out delay-50 duration-200 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800" 
                href="https://www.hackerrank.com/certificates/7848d5a766a8" target="_blank" rel="noreferrer">
                  <div className="col-span-2 pt-2 pl-2 w-24 flex-none m-3">
                    <Image src={hackerrank} alt="hackerrank-1" className="rounded-lg"/>
                  </div>
                  <div className="col-span-2 p-6 md:text-xl text-lg text-gray-800 dark:text-gray-300 md:mt-2 mt-3">
                    <p className="mr-3 font-semibold">HackerRank</p>
                    <p>Python (Basic)</p>
                  </div>
                </a>

                <a className="flex rounded-lg drop-shadow-lg bg-gray-100 dark:bg-black 
                transition ease-in-out delay-50 duration-200 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800" 
                href="https://www.hackerrank.com/certificates/98e010e56a4a" target="_blank" rel="noreferrer">
                  <div className="col-span-2 pt-2 pl-2 w-24 flex-none m-3">
                    <Image src={hackerrank} alt="hackerrank-1" className="rounded-lg"/>
                  </div>
                  <div className="col-span-2 p-6 md:text-xl text-lg text-gray-800 dark:text-gray-300 md:mt-2 mt-3">
                    <p className="mr-3 font-semibold">HackerRank</p>
                    <p>SQL (Basic)</p>
                  </div>
                </a>

                <a className="flex rounded-lg drop-shadow-lg bg-gray-100 dark:bg-black 
                transition ease-in-out delay-50 duration-200 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800" 
                href="https://www.hackerrank.com/certificates/3bc2ef9fa951" target="_blank" rel="noreferrer">
                  <div className="col-span-2 pt-2 pl-2 w-24 flex-none m-3">
                    <Image src={hackerrank} alt="hackerrank-1" className="rounded-lg"/>
                  </div>
                  <div className="col-span-2 p-6 md:text-xl text-lg text-gray-800 dark:text-gray-300 md:mt-2 mt-3">
                    <p className="mr-3 font-semibold">HackerRank</p>
                    <p>CSS</p>
                  </div>
                </a>

                <a className="flex rounded-lg drop-shadow-lg bg-gray-100 dark:bg-black 
                transition ease-in-out delay-50 duration-200 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800" 
                href="https://www.freecodecamp.org/certification/Akosovski/responsive-web-design" target="_blank" rel="noreferrer">
                  <div className="col-span-2 pt-2 pl-2 w-24 flex-none m-3">
                    <Image src={freecodecamp} alt="hackerrank-1" className="rounded-lg"/>
                  </div>
                  <div className="col-span-2 p-6 md:text-xl text-lg text-gray-800 dark:text-gray-300 md:mt-2 mt-0">
                    <p className="mr-3 font-semibold">freeCodeCamp</p>
                    <p>Responsive Web Design</p>
                  </div>
                </a>

                <a className="flex rounded-lg drop-shadow-lg bg-gray-100 dark:bg-black 
                transition ease-in-out delay-50 duration-200 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800" 
                href="https://www.freecodecamp.org/certification/Akosovski/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">
                  <div className="col-span-2 pt-2 pl-2 w-24 flex-none m-3">
                    <Image src={freecodecamp} alt="hackerrank-1" className="rounded-lg"/>
                  </div>
                  <div className="col-span-2 p-6 md:text-xl text-lg text-gray-800 dark:text-gray-300 md:mt-2 mt-0">
                    <p className="mr-3 font-semibold">freeCodeCamp</p>
                    <p>Javascript Algorithms & Data Structures</p>
                  </div>
                </a>
                
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-solid border-t border-gray-300 bg-gray-100 dark:bg-black dark:border-gray-800 text-black">
        <div className="flex justify-center px-4 py-7">
          <h1 id="footer-desc" className="mt-3 lg:leading-normal font-abel text-gray-800 dark:text-gray-300">
            <span className="text-blue-600 font-semibold mr-1">Thank You!</span> for your visit.
          </h1>
        </div>
        <div className="flex justify-center py-7 -mt-2">
          <a class="sosmed box-border p-3" id="github-sosmed" href="https://github.com/Akosovski" target="_blank" rel="noreferrer">
            <Image src={github} width={45} height={45} alt="github-icon" className="cursor-pointer transition ease-in-out delay-50 duration-200 dark:brightness-200"/>
          </a>
          <a class="sosmed box-border p-3" href="https://gitlab.com/Akosovski" target="_blank" rel="noreferrer">
            <Image src={gitlab} width={45} height={45} alt="gitlab-icon" className="cursor-pointer transition ease-in-out delay-50 duration-200 hover:brightness-75"/>
          </a>
          <a class="sosmed box-border p-3 -mt-2" id="linkedin-sosmed" href="https://www.linkedin.com/in/muhammad-akhta/" target="_blank" rel="noreferrer">
            <Image src={linkedin} width={60} height={60} alt="linkedin-icon" className="cursor-pointer transition ease-in-out delay-50 duration-200 hover:brightness-75"/>
          </a>
          <a class="sosmed box-border p-3" href="https://www.instagram.com/akhta.cr/" target="_blank" rel="noreferrer">
            <Image src={instagram} width={45} height={45} alt="instagram-icon" className="cursor-pointer transition ease-in-out delay-50 duration-200 hover:brightness-75"/>
          </a>
          <a class="sosmed box-border p-3" href="https://id.quora.com/profile/Akosovski" target="_blank" rel="noreferrer">
            <Image src={quora} width={45} height={45} alt="quora-icon" className="cursor-pointer transition ease-in-out delay-50 duration-200 hover:brightness-75"/>
          </a>
        </div>
        <div className="font-abel text-center pt-2 text-gray-800 dark:text-white text-md pb-8 mt-3">
          © 2023 <span className="font-semibold">Akosovski</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
