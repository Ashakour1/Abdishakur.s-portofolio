export type Post = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  readTime: string;
  comments: number;
  tags: string[];
  link?: string;
  category?: string;
  content?: string;
  author?: {
    name: string;
    avatar: string;
  };
};
