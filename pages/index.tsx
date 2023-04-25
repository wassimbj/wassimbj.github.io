/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../components/Navbar";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import NoteWorthyProjectCard from "../components/NoteWorthyProjectCard";
import featuredProjects from "../meta/featured-projects.json";
import noteWorthyProjects from "../meta/noteworthy-projects.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Footer from "../components/Footer";

export default function Home() {
  const myEmail = "wassimbenjdida@gmail.com";
  return (
    <div>
      <Head>
        <title>Wassim Ben Jdida | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ----- Nav ------ */}
      <Navbar />
      {/* ----- Nav ------ */}

      <main className="mx-auto max-w-5xl px-2">
        <section id="about" className="md:mt-20 mt-5">
          <h1 className="text-lightGreen lg:text-5xl md:text-4xl text-3xl font-black">
            Wassim Ben Jdida
          </h1>
          <span className="block lg:text-3xl md:text-2xl text-xl font-semibold text-gray-200">
            Software Engineer
          </span>
          <p className="font-light bio max-w-2xl mt-10">
            Hey, I'm wassim, I'm so passionate about building software that
            solves real world problems. I've studied computer science at{" "}
            <a href="https://isitcom.rnu.tn/">ISICom</a>, and I'm currently
            working as a software engineer at{" "}
            <a href="https://misraj.sa/">Misraj</a>. I enjoy building side
            projects, and recently got so interested in indie-hacking, startups
            and entrepreneurship. I'm always looking for new opportunities to
            learn and grow as a developer.
          </p>

          <div className="flex items-center space-x-5 mt-5">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/wassimbj"
              className="inline-block underline text-lightGreen/80 hover:text-lightGreen"
            >
              Github
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/in/wassimbenjdida"
              className="inline-block underline text-lightGreen/80 hover:text-lightGreen"
            >
              Linkedin
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/bjwassim"
              className="inline-block underline text-lightGreen/80 hover:text-lightGreen"
            >
              Twitter
            </a>
            <CopyToClipboard text={myEmail} onCopy={() => alert("Copied 😁✅")}>
              <button
                title="Click to copy"
                className="inline-block cursor-pointer underline text-lightGreen/80 hover:text-lightGreen"
              >
                Email
              </button>
            </CopyToClipboard>
          </div>
        </section>
        <section id="work" className="mt-40">
          <div className="block sm:text-3xl mb-5 text-xl font-semibold text-lightGreen py-2">
            <span className="text-lightGreen opacity-30 ">~$ ls</span>{" "}
            <span className="bg-lightGreen text-darkGreen">
              /Selected works
            </span>
          </div>

          {/*  className="md:-mt-10 mt-0 cursor-grab" */}
          <div role="main" className="space-y-5">
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard
                title={project.title}
                builtWith={project.builtWith}
                code={project.code}
                demo={project.demo}
                description={project.description}
                image={project.image}
                subtitle={project.subtitle}
                key={i}
                // reverse={i % 2 != 0}
              />
            ))}
          </div>
        </section>

        <section id="work" className="mt-40">
          <div className="block sm:text-3xl mb-5 text-xl font-semibold text-lightGreen py-2">
            <span className="text-lightGreen opacity-30">~$ ls </span>{" "}
            <span className="bg-lightGreen text-darkGreen">
              /Noteworthy projects
            </span>
          </div>

          {/*  className="md:-mt-10 mt-0 cursor-grab" */}
          <div role="main" className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {noteWorthyProjects.map((project, i) => (
                <NoteWorthyProjectCard
                  key={i}
                  builtWith={project.builtWith}
                  code={project.code}
                  demo={project.demo}
                  description={project.description}
                  title={project.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* <section id="contact" className="mt-40 pb-10">
          <div className="block sm:text-3xl mb-5 text-xl font-semibold text-lightGreen py-2">
            <span className="text-lightGreen opacity-30">~$ cat </span>{" "}
            <span className="bg-lightGreen text-darkGreen">/Contact.me</span>
          </div>
          <p className="max-w-lg font-light">
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/wassimbj"
              className="block hover:opacity-75 transition-opacity"
            >
              <div>
                <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                  Github
                </span>
                <p className="text-white">I&apos;m an &quot;early-bird&quot;</p>
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/bjwassim"
              className="block hover:opacity-75 transition-opacity"
            >
              <div>
                <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                  Twitter
                </span>
                <p className="text-white"> Follow me </p>
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/in/wassimbenjdida"
              className="block hover:opacity-75 transition-opacity"
            >
              <div>
                <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                  Linkedin
                </span>
                <p className="text-white"> Let&apos;s connect! </p>
              </div>
            </a>
            <CopyToClipboard text={myEmail} onCopy={() => alert("Copied 😁✅")}>
              <div
                title="Click to copy"
                className="block hover:opacity-75 cursor-pointer transition-opacity"
              >
                <div>
                  <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                    Email
                  </span>
                  <p className="text-white"> {myEmail} </p>
                </div>
              </div>
            </CopyToClipboard>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
