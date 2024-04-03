/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialMediaLinks from "../components/SocialMediaLinks";
import WorkCard from "../components/WorkCard";
import works from "../meta/works.json";

export default function Home() {
  const myEmail = "wassimbenjdida@gmail.com";
  return (
    <div>
      <Head>
        <title>Wassim Ben Jdida | Home</title>
        <meta
          name="description"
          content="Hey there, my name is wassim and i'm a software engineer. I'm interested in programming, cloud, games and business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ----- Nav ------ */}
      <Navbar />
      {/* ----- Nav ------ */}

      <main className="mx-auto max-w-3xl px-2">
        {/* ----- About ------ */}
        <section id="about" className="md:mt-10 mt-5">
          <div className="flex items-center flex-wrap">
            <Image
              src="/me.png"
              title="That's me :D"
              width={170}
              height={170}
              className="object-cover mr-3 block"
              alt="My pic"
            />
            <div>
              <h1 className="text-lightGreen lg:text-5xl md:text-4xl text-3xl font-black">
                Wassim Ben Jdida
              </h1>
              <span className="block lg:text-3xl md:text-2xl text-xl font-semibold text-gray-200">
                Software Engineer
              </span>
            </div>
          </div>
          <p className="bio max-w-2xl mt-7">
            Hey, I'm wassim, I love building software that solves real world
            problems, I also enjoy building helpful tools and simple fun games.
            I'm currently working as a software engineer at{" "}
            <a href="https://misraj.sa/" rel="noreferrer" target="_blank">
              Misraj↗
            </a>
            .I'm always looking for new opportunities to learn and grow as a
            developer and as a person. If you have any cool ideas, projects in
            mind or just want to say hi, feel free to reach out to me.
          </p>

          <div className="flex items-center space-x-5 mt-5">
            <SocialMediaLinks myEmail={myEmail} />
          </div>
        </section>
        {/* ----- About ------ */}

        {/* ----- Works ------ */}
        <section id="work" className="mt-32">
          <div className="mb-5">
            <div className="block sm:text-3xl text-xl font-semibold text-lightGreen py-2">
              <span className="text-lightGreen opacity-30 ">~$ ls</span>{" "}
              <span className="bg-lightGreen text-darkGreen">/Things i made</span>
            </div>
          </div>

          <div className="space-y-3">
            {works.map((work, i) => (
              <WorkCard
                builtWith={work.builtWith}
                code={work.code}
                demo={work.demo}
                description={work.description}
                title={work.title}
                subtitle={work.subtitle}
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
