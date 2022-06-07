export interface Blog {
  posts: Post[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}
