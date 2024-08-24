import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeCallouts from "rehype-callouts";

const blogs_dir_name = "_blogs";
const postsDirectory = join(process.cwd(), blogs_dir_name);

type PostData = {
  date: string;
  content: string;
  slug: string;
  title: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): PostData {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as Omit<PostData, "content" | "slug">),
    content,
    slug: realSlug,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeCallouts, {
      theme: "github",
    })
    .use(rehypeFormat)
    .use(rehypePrettyCode, {
      theme: "catppuccin-mocha",
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
