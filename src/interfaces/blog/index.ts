export interface Blog {
  id: string;
  name: string;
  title: string;
  description: string;
  publishDate: string;
  slug: string;
}

export interface AllBlogResponse {
  data: {
    allBlog: {
      total: number;
      results: Partial<Blog>[];
    };
  };
}

export const AllBlogQuery = `
query AllBlog {
    allBlog {
        total
        results {
            id
            name
            title
            description
            publishDate
            slug
        }
    }
}
`;
