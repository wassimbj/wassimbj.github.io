import { useRouter } from "next/router";
import ErrorPage from "next/error";
import markdownToHtml, {
  getAllPosts,
  getPostBySlug,
} from "../../utils";
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
          className="prose prose-strong:font-semibold prose-hr:border-white/10 prose-code:text-lightGreen/70 prose-code:bg-gray-900 prose-code:p-1 prose-code:rounded-md text-sm prose-a:text-lightGreen prose-headings:text-gray-200 hover:prose-a:text-lightGreen/80 prose-p:prose-blockquote:text-white/40 prose-strong:text-gray-400 prose-p:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <Link
        href="#"
        className="text-center block underline text-lightGreen/70 mt-5 py-2 text-sm hover:text-lightGreen"
      >
        Top
      </Link>
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
