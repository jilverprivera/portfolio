export interface Blog {
  posts: Post[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  cover_image: string;
  description: string;
  tags: string[];
}
