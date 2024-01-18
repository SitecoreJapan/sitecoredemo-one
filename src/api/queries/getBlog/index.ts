import { fetchGraphQL } from "@/api";
import { AllBlogResponse, AllBlogQuery, Blog } from "@/interfaces/blog";

export async function getAllBlog() {
  const results: AllBlogResponse = (await fetchGraphQL(
    AllBlogQuery
  )) as AllBlogResponse;

  const posts: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    posts.push({
      id: post.id,
      name: post.name,
      title: post.title,
      description: post.description,
      slug: post.slug,
      publishDate: post.publishDate,
    });
  });

  return posts;
}
