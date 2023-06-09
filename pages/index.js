import Head from "next/head";
import Script from "next/script";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import web9 from "../public/web9.mp4";
import web7 from "../public/web7.mp4";
import web8 from "../public/web8.mp4";
import avatar from "../public/avatar.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>DK Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script>document.documentElement.classList.add('js')</Script>
      </Head>
      <main className=" bg-gray-300 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div>
              <p className="text-sm">Built with</p>
              <h1 className="text-md">Next.Js & Tailwind</h1>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 transition ease-in-out duration-150 transform hover:-translate-y-1 hover:scale-110"
                  href="https://drive.google.com/file/d/1fjDf0i0RqGjr-q-8itPl2KB1rhUnZvoT/view?usp=drive_link"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text font-medium dark:text-teal-400 md:text-6xl">
              David Kim
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Junior Full Stack Developer
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/djk88" target="_blank">
                <AiFillGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/djk88" target="_blank">
                <AiFillLinkedin className="icon" />
              </a>
              <a href="mailto:davekim88@gmail.com">
                <AiFillMail className="icon" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-full relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} alt="" priority={true} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-500 font-medium">
              About Me
            </h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hello! My name is David Kim, and I'm a junior full stack web
              developer that recently completed the Software Systems Development
              (SSD) course at the{" "}
              <span className="text-teal-500">
                British Columbia Institute of Technology
              </span>{" "}
              (BCIT). This portfolio documents my journey through the program,
              showcasing my skills and projects I've worked on.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Prior to my foray into web development, I spent over a decade
              working in the automotive industry, with experience ranging from
              lube technician to parts manager for brands like{" "}
              <span className="text-teal-500">
                Porsche, BMW, Hyundai, and Honda
              </span>
              . Through this work, I honed my problem-solving skills, attention
              to detail, and ability to work in fast-paced environments.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My transition to web development was inspired by a{" "}
              <span className="text-teal-500">desire</span> to expand my skill
              set and <span className="text-teal-500">challenge</span> myself in
              a new field. Throughout my time in the Software Systems
              Development course, I've learned new programming languages and
              frameworks, built a variety of web applications, and collaborated
              with other student developers to create effective solutions.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a web developer, my <span className="text-teal-500">goal</span>{" "}
              is to create engaging, user-friendly applications that help solve
              real-world problems. I'm particularly interested in the
              intersection of <span className="text-teal-500">technology</span>{" "}
              and <span className="text-teal-500">design</span>, and how the two
              can work together to create intuitive and effective experiences
              for users.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="bg-gray-200 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend Development
              </h3>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">HTML5</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
            <div className="bg-gray-200 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2">
                Back End Development
              </h3>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">ASP.NET</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">Next.js</p>
            </div>
            <div className="bg-gray-200 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2">
                Amazon Web Services
              </h3>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">S3 Bucket</p>
              <p className="text-gray-800 py-1">API Gateway</p>
              <p className="text-gray-800 py-1">Lambda</p>
              <p className="text-gray-800 py-1">Cognito</p>
              <p className="text-gray-800 py-1">RDS</p>
            </div>
            <div className="bg-gray-200 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2">Database</h3>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">Microsoft SQL Server</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">CockroachDB</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-500 font-medium dark:text-teal-500 ">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              This section showcases the projects I've worked on throughout my
              web development journey, including both individual and
              collaborative projects.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Each thumbnail video (except Agilitek) below links to the
              corresponding GitHub repository, where you can view the code and
              learn more about the project. I've included a brief description of
              each project below to give you an idea of what it's all about.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/djk88/reactavision" target="_blank">
                <video
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  src={web9}
                  alt="movie website built with React and CSS"
                  autoPlay
                  loop
                  muted
                />
              </a>
              <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                <p>
                  <span className="text-teal-500 uppercase font-medium">
                    Description:{" "}
                  </span>
                  Built a movie picker web app using the TMDB (The Movie
                  Database) API. The app allows users to browse upcoming,
                  top-rated, popular, and now playing movies. Users can search
                  for movies by title and save or remove them to their favorites
                  list.
                  <span className="ml-2 items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    <a href="https://reactavision.vercel.app/" target="_blank">
                      <span className=" font-medium uppercase text-sm text-gray-200 hover:text-white dark:hover:text-teal-300  dark:text-teal-500">
                        Click here for a demo!
                      </span>
                    </a>
                  </span>
                </p>
                <p className="mt-2">
                  <span className="text-teal-500 uppercase font-medium">
                    Contribution:{" "}
                  </span>
                  Created and designed the Home, Favorite List, and Search
                  pages. Implemented the functionality for users to save movies
                  to their favorites list using local storage.
                </p>
              </div>
              <ul className="flex flex-wrap">
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    React
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    TMDB
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    CSS
                  </div>
                </li>
              </ul>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/ceilidh-ashcroft-bcit/CakeFactory"
                target="_blank"
              >
                <video
                  className="rounded-lg object-cover shadow-lg"
                  width={"100%"}
                  height={"100%"}
                  src={web8}
                  alt="fake bank website build with ASP.Net and C-Sharp"
                  autoPlay
                  muted
                  loop
                />
              </a>
              <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                <p>
                  <span className="text-teal-500 uppercase font-medium">
                    Description:{" "}
                  </span>
                  Developed a full-stack e-commerce website called The Cake
                  Factory with 4 other students. The app incorporates PayPal
                  integration, custom cake options, user registration, and order
                  history. It features a user-friendly home page where customers
                  can choose between pre-made cakes or customize their own cakes
                  by toppings, fillings, and shape.
                </p>
                <p className="mt-2">
                  <span className="text-teal-500 uppercase font-medium">
                    Contribution:{" "}
                  </span>
                  Created and designed the Home and Cake Detail pages.
                  Integrated the SendGrid API for email confirmation.
                </p>
              </div>
              <ul className="flex flex-wrap">
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    C#
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    ASP.NET
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    CSS
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    SQL Server
                  </div>
                </li>
              </ul>
            </div>
            <div className="basis-1/3 flex-1">
              <video
                className="rounded-lg object-cover shadow-lg"
                width={"100%"}
                height={"100%"}
                src={web7}
                alt="website built with react and"
                autoPlay // Add the autoPlay attribute here
                muted // Add the muted attribute here
                loop // Add the loop attribute here
              />
              <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                <p>
                  <span className="text-teal-500 uppercase font-medium">
                    Description:{" "}
                  </span>
                  This full-stack web app was developed in collaboration with
                  Agilitek Solutions. It focuses on extracting and finding
                  converging transaction and demographic data from
                  user-submitted segments. The project includes the creation of
                  a responsive dashboard with movable and resizable widgets.
                  Layouts and locations of the widgets can be saved into local
                  storage and reloaded on the next visit.
                </p>
                <p className="mt-2">
                  <span className="text-teal-500 uppercase font-medium">
                    Contribution:{" "}
                  </span>
                  Created and designed the Dashboard with widgets using the
                  React-Grid-Layout library. Integrated BarChart.js to display
                  transaction and demographic data in graph form.
                </p>
              </div>
              <ul className="flex flex-wrap">
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    React
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    Tailwind
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    SST
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    AWS
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300  bg-teal-500 text-white">
                    PostgreSQL
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <script src="https://unpkg.com/taos@1.0.2/dist/taos.js"></script>
    </div>
  );
}
