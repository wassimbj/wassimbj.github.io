import { useRouter } from "next/router";
import ErrorPage from "next/error";
import markdownToHtml, { getAllPosts, getPostBySlug } from "../../utils";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import dayjs from "dayjs";
import "prismjs/themes/prism-tomorrow.min.css";

type TPost = {
  title: string;
  content: string;
  slug: string;
  date: string;
  keywords: string;
};

type Props = {
  post: TPost;
  morePosts: TPost[];
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const pageTitle = `${post.title} | Wassim Ben Jdida`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={post.content.substring(0, 100) + "..."}
        />
        <meta
          property="og:url"
          content={`https://wassimbj.github.io/blog/${post.slug}`}
        />

        <meta name="twitter:site" content="wassimbj.github.io" />
        <meta name="twitter:creator" content="@bjwassim" />
        <meta name="twitter:title" content={pageTitle} />
        <meta
          name="twitter:description"
          content={post.content.substring(0, 100) + "..."}
        />

        <meta
          name="description"
          content={post.content.substring(0, 100) + "..."}
        />
        <meta name="keywords" content={post.keywords} />
      </Head>
      <Navbar />
      <div className="mx-auto mt-5 max-w-3xl p-2 py-10">
        <Link
          href="/blog"
          className="p-2 text-sm text-slate-500 underline hover:text-[#1d7d68]"
        >
          ← Back
        </Link>
        <div className="mb-4 border-b border-[#cfece5] pb-4">
          <span className="block text-3xl font-bold text-[#1a3a39]">
            ↬ {post.title}
          </span>
          <span className="mt-3 inline-block rounded-full bg-[#edf9f5] px-3 py-1 text-sm text-slate-700">
            {dayjs(post.date).format("DD MMM YYYY")}
          </span>
        </div>
        <div
          id="blog-content"
          className="prose prose-lg prose-strong:font-bold prose-hr:border-[#d9ece7] prose-li:text-base prose-code:!text-base prose-code:!bg-transparent prose-code:inline-block prose-code:rounded-md prose-p:text-lg prose-a:text-[#2fa88a] prose-li:text-slate-700 prose-headings:text-slate-900 hover:prose-a:text-[#1d7d68] prose-strong:text-slate-800 prose-p:text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="#"
          className="underline text-lightGreen/70 p-2 text-sm hover:text-lightGreen"
        >
          Top 👆
        </Link>
      </div>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
