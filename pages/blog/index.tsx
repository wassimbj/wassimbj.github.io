import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import { getAllPosts } from "../../utils";

export default function BlogIndex({ allPosts }: { allPosts: Array<any> }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-2xl p-2 py-5">
        <div className="mt-5">
          <span className="mb-1 inline-block rounded-full bg-[#dff5ee] px-3 py-1 text-3xl font-semibold text-[#1a3a39]">
            /Blog
          </span>
          <p className="text-sm font-light text-slate-600">
            Learning and sharing my experience along the way. {"ヾ(＠⌒ー⌒＠)ノ"}
          </p>
        </div>

        <div className="mt-10 p-2">
          <span className="block border-b border-[#d9ece7]"></span>
          {allPosts.map((post, i) => (
            <Link
              href={`/blog/${post.slug}`}
              key={i}
              passHref
              className="group block border-b border-[#e8f3ee] px-2 py-3"
            >
              <span className="block pr-5 font-semibold text-slate-800 underline decoration-[#bfe7d9] underline-offset-4 transition-all group-hover:text-[#1d7d68] group-active:text-[#1d7d68]">
                {post.title}
              </span>
              <span className="whitespace-nowrap text-xs font-light text-slate-500">
                {dayjs(post.date).format("DD MMM YYYY")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};
