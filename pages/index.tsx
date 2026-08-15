/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialMediaLinks from "../components/SocialMediaLinks";
import WorkCard from "../components/WorkCard";
import works from "../meta/works.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wassim Ben Jdida | Home</title>
        <meta
          name="description"
          content="Hey there, my name is wassim and i'm a software engineer. I'm interested in software, cloud, games and startups"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ----- Nav ------ */}
      <Navbar />
      {/* ----- Nav ------ */}

      <main className="mx-auto max-w-3xl px-2">
        {/* ----- About ------ */}
        <section id="about" className="mt-5 md:mt-10">
          <div className="flex flex-wrap items-center">
            <Image
              src="/me.png"
              title="That's me :D"
              width={170}
              height={170}
              className="mr-3 block rounded-full border-4 border-[#dff5ee] bg-white object-cover"
              alt="My pic"
            />
            <div>
              <h1 className="text-3xl font-black text-[#1a3a39] md:text-4xl lg:text-5xl">
                Wassim Ben Jdida
              </h1>
              <span className="mt-1 block text-xl font-semibold text-slate-600 md:text-2xl lg:text-3xl">
                Software Engineer
              </span>
            </div>
          </div>
          <p className="bio mt-7 max-w-2xl text-slate-700">
            Hey, I'm wassim, I love building software that solves real world
            problems, I also enjoy building helpful tools and simple fun games.
            I'm currently working as a software engineer at{" "}
            <a
              href="https://misraj.sa/"
              rel="noreferrer"
              className="text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5]"
              target="_blank"
            >
              Misraj↗
            </a>
            .I'm always looking for new opportunities to learn and grow as a
            developer and as a person. If you have any cool ideas, projects in
            mind or just want to say hi, feel free to reach out to me.
          </p>

          <div className="mt-5 flex items-center">
            <SocialMediaLinks />
          </div>
        </section>
        {/* ----- About ------ */}

        {/* ----- Works ------ */}
        <section id="work" className="mt-32">
          <div className="mb-5">
            <span className="rounded-full bg-[#dff5ee] px-3 py-1 text-xl font-semibold text-[#1a3a39] sm:text-3xl">
              /Things i made
            </span>
          </div>

          <div className="space-y-3">
            {works.map((work, i) => (
              <WorkCard
                code={work.code}
                demo={work.demo}
                description={work.description}
                title={work.title}
                key={i}
              />
            ))}
          </div>
        </section>
        {/* ----- Works ------ */}
      </main>
      <Footer />
    </div>
  );
}
