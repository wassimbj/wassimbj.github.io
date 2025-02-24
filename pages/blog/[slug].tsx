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
      <div className="max-w-3xl py-10 mx-auto p-2 mt-5">
        <Link
          href="/blog"
          className="underline text-sm p-2 text-gray-400 hover:text-gray-300"
        >
          ← Back
        </Link>
        <div className="border-b border-lightGreen/25 pb-3 mb-4">
          <span className="font-bold text-3xl text-lightGreen block">
            ↬ {post.title}
          </span>
          <span className="inline-block text-sm bg-white/5 px-3 mt-2 rounded-md">
            {dayjs(post.date).format("DD MMM YYYY")}
          </span>
        </div>
        <div
          id="blog-content"
          className="prose prose-strong:font-bold prose-hr:border-white/10 prose-li:text-base prose-code:!text-base prose-code:!bg-transparent prose-code:inline-block prose-code:rounded-md prose-p:text-lg prose-a:text-lightGreen prose-li:text-gray-400 prose-headings:text-gray-400 hover:prose-a:text-lightGreen/80 prose-strong:text-gray-400 prose-p:text-gray-400"
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
