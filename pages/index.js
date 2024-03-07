/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";

// Material UIs
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

// Components
import Project1 from "./components/project_1";
import Project2 from "./components/project_2";

// PNG
import akhta from "../pages/assets/akhta-profile.png";

// SVG FILES
import bootstrap from "../pages/assets/bootstrap.svg";
import html5 from "../pages/assets/html5.svg";
import css from "../pages/assets/css.svg";
import js from "../pages/assets/javascript.svg";
import python from "../pages/assets/python.svg";
import node from "../pages/assets/node.svg";
import react from "../pages/assets/react.svg";
import postgresql from "../pages/assets/postgresql.svg";
import typescript from "../pages/assets/typescript.svg";
import nest from "../pages/assets/nestjs.svg"
import django from "../pages/assets/django.svg";
import tailwind from "../pages/assets/tailwind.svg";
import mongodb from "../pages/assets/mongodb.svg";
import figma from "../pages/assets/figma.svg";
import next from "../pages/assets/nextjs.svg"
import photoshop from "../pages/assets/photoshop.svg";
import linkedin from "../pages/assets/linkedin.svg";
import gitlab from "../pages/assets/gitlab.svg";
import github from "../pages/assets/github.svg";
import instagram from "../pages/assets/instagram.svg";
import quora from "../pages/assets/quora.svg";
import freecodecamp from "../pages/assets/freecodecamp.svg";
import hackerrank from "../pages/assets/hackerrank.svg";
import connected from "../pages/assets/connected.svg";
import disconnected from "../pages/assets/disconnected.svg"

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.imageURL} alt={props.item.name}/>
        </Paper>
    )
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Akosovski - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
                  href="https://storage.googleapis.com/universal_static/Akosovski-Portfolio/CV%20Updated.pdf">
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
            currently advancing on <span class="text-blue-600 font-bold">Django</span> and <span class="text-blue-600 font-bold">Next.js</span>.
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
              Hover or select any icon to see further details.
            </p>

            {/* FLEX BOX PROGRAMMING LANGUAGES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-2 -m-2 sm:m-2">
              
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

              {/* Typescript */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-2">Typescript</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={typescript} width={100} height={87} alt="py-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
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

            </div>

            {/* FLEX BOX FRAMEWORK & LIBRARIES */}
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-2 -m-2 sm:m-2">
              
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

              {/* NEST */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-1">Nest JS</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={nest} width={100} height={97} alt="dj-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
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
            <div className="box-border border-1 flex flex-row flex-wrap justify-center p-2 -m-2 sm:m-2">
            
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

              {/* POSTGRESQL */}
              <div className="box-border border-1 m-2 mx-4">
                <h3 className="text-lg dark:text-white font-semibold text-center mb-3">PostgreSQL</h3>
                <a class="tooltip cursor-pointer box-border p-2 w-20 h-20 md:h-32 md:w-32 md:p-4">
                  <Image src={postgresql} width={100} height={100} alt="sql-icon" className="transition ease-in-out delay-50 duration-200 hover:brightness-50"/>
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
            <h3 className="font-abel text-xl py-1 dark:text-gray-200 font-bold">Project Portfolios</h3>
            <p id="port-desc" className="text-justify py-2 leading-8 text-gray-800 dark:text-gray-200">
              I already completed a handful of projects which were used for college and my own side projects I made in my free time.
              Here is the list of projects that I have completed, I also linked them to the codebase in my Github. 
              Some of them which were already deployed into production are tagged with <span className="text-green-500 font-bold">green</span> icons, 
              while <span className="text-red-500 font-bold">red</span> ones are currently offline.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            <Project1></Project1>

            <Project2></Project2>

          </div>
        </section>

        {/* EXPERIENCES */}
        <section className="-mt-4">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-gray-200 font-bold">Experiences</h3>
            <p className="xp-desc text-justify py-2 leading-8 text-gray-800 dark:text-gray-200 mb-5">
            I also have several years of work experience started from the third year of my study dated back in 2021.
            Since then I&#39;ve been constantly involved in many projects or events related to my position.
            </p>

            <hr className="border-1 border-gray-400"></hr>

            {/* KODEKIDDO */}
            <div className="grid md:grid-cols-4 grid-cols-3 sm:gap-y-5 gap-x-5 mt-4">
              <div className="flex-initial md:col-span-1 col-span-4 w-100 p-3 pb-3 md:p-3">
                <h3 className="xp-dets text-blue-600 dark:text-blue-600 font-bold">February 2021 - February 2022</h3>
                <h3 className="xp-dets text-gray-800 dark:text-gray-200">Coding Instructor Intern</h3>
                <br></br>
                <h3 className="xp-dets text-blue-600 dark:text-blue-600 font-bold">March 2022 - December 2022</h3>
                <h3 className="xp-dets text-gray-800 dark:text-gray-200">Coding Instructor Part-Time</h3>
              </div>
              <div className="flex-initial col-span-3 w-100 p-3 pt-2 md:p-3 pr-1 ">
                <a href="https://kodekiddo.com/" target="_blank" rel="noreferrer"><h3 className="xp-dets-selector text-gray-800 font-bold dark:text-gray-200">KodeKiddo</h3></a>
                <ul className="list-disc p-2 pr-0">
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Teaching students ranging from elementary up to high school, about problem-solving 
                  and the basic logic of how computer programming languages work through various lessons, 
                  practices, and projects across many different learning platforms</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">Participated in Kodekiddo events such as ZIP Classes, and Holiday Programs.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">Teaching students from school intra-curricular activities which collaborate with Kodekiddo.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">Participated as a coordinator in school intra-curricular activities such as arranging schedules 
                    with the school and organizing the material being taught.</li>
                </ul>
              </div>
            </div>

            <hr className="border-1 border-gray-400"></hr>

            {/* CODE.ID */}
            <div className="grid md:grid-cols-4 grid-cols-3 sm:gap-y-5 gap-x-5 mt-4">
              <div className="flex-initial md:col-span-1 col-span-4 w-100 p-3 pb-3 md:p-3">
                <h3 className="xp-dets text-blue-600 dark:text-blue-600 font-bold">May 2023 - November 2023</h3>
                <h3 className="xp-dets text-gray-800 dark:text-gray-200">Full-Stack Developer</h3>
              </div>
              <div className="flex-initial col-span-3 w-100 p-3 pt-2 md:p-3 pr-1 ">
                <a href="https://www.code.id/" target="_blank" rel="noreferrer"><h3 className="xp-dets-selector text-gray-800 font-bold dark:text-gray-200">Code Indonesia</h3></a>
                <ul className="list-disc p-2 pr-0">
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Participated in training to develop back-end application and API with Nest.js framework in TypeScript.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Participated in training to develop front-end application with Next.js framework in JavaScript.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Participated in the front-end and back-end development of client applications which were then 
                  divided into several modules where each module will later be merged into one application.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Participated in training to develop a database based on Entity Relationship Diagram with PostgreSQL 
                  through pgAdmin which will be used to store data for the application.</li>
                </ul>
              </div>
            </div>

            <hr className="border-1 border-gray-400"></hr>

            {/* CODING LAB */}
            <div className="grid md:grid-cols-4 grid-cols-3 sm:gap-y-5 gap-x-5 mt-4">
              <div className="flex-initial md:col-span-1 col-span-4 w-100 p-3 pb-3 md:p-3">
                <h3 className="xp-dets text-blue-600 dark:text-blue-600 font-bold">December 2023 - Present</h3>
                <h3 className="xp-dets text-gray-800 dark:text-gray-200">Coding Educator</h3>
              </div>
              <div className="flex-initial col-span-3 w-100 p-3 pt-2 md:p-3 pr-1 ">
                <a href="https://www.codinglab.com.sg" target="_blank" rel="noreferrer"><h3 className="xp-dets-selector text-gray-800 font-bold dark:text-gray-200">Coding Lab</h3></a>
                <ul className="list-disc p-2 pr-0">
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Inspiring and teaching coding to students.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Participate and assist in the further development of the curriculum.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Participate and assist in logistical support for key classes and events.</li>
                  <li className="xp-dets text-gray-800 dark:text-gray-200 text-justify">
                  Performing the necessary administrative and operational work to effectively run the classes.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-10 pt-8">
          <div>
            <h3 className="font-abel text-xl py-1 dark:text-white font-bold">Certifications</h3>
            <p id="port-desc" className="text-justify py-2 leading-8 text-gray-800 dark:text-gray-200">
            Apart from working on side projects in my free time, I also take several online courses that were available 
            on learning websites such as Udemy, HackerRank, and freeCodeCamp.
            Below is the list of certificates I received after completing the courses.
            </p>
            <p id="initiator" className="font-bold py-2 leading-8 text-blue-600 dark:text-blue-600 mt-1 mb-5 text-center">
              Select one from the list to see further details.
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
        <div className="flex justify-center py-7 -mt-2 px-4">
          <a class="sosmed box-border p-3 sm:p-3" id="github-sosmed" href="https://github.com/Akosovski" target="_blank" rel="noreferrer">
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
          © 2024 <span className="font-semibold">Akosovski</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
