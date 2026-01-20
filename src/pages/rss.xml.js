import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "EFEELE | Web Development & Tech Blog",
    description: "Personal portfolio and blog of Fernando López, sharing insights on web development and design.",
    site: context.site,
    items: blog.map((post) => {
      const [lang, ...slugParts] = post.slug.split("/");
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/${lang}/blog/posts/${slugParts.join("/")}`,
      };
    }),
    customData: `<language>es-es</language>`,
  });
}
