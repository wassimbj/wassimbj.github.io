import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import { getAllPosts } from "../../utils";

export default function BlogIndex({ allPosts }: { allPosts: Array<any> }) {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl py-5 mx-auto p-2">
        <div className="mt-5">
          <span className="bg-lightGreen inline-block mb-1 text-3xl font-semibold text-darkGreen">
            /Blog
          </span>
          <p className="text-sm font-light">
            Learning and sharing my experience along the way. {"ヾ(＠⌒ー⌒＠)ノ"}
          </p>
        </div>

        <div className="p-2 mt-10">
          <span className="border-b border-white/5 block"></span>
          {allPosts.map((post, i) => (
            <Link
              href={`/blog/${post.slug}`}
              key={i}
              passHref
              className="px-2 group block py-3 border-b border-white/10"
            >
              <span className="font-semibold pr-5 group-active:scale-[.98] group-hover:text-lightGreen transition-all underline block">
                {post.title}
              </span>
              <span className="font-light text-xs whitespace-nowrap">
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
