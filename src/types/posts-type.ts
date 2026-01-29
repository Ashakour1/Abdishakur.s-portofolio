export type PostSection = {
  topic: string;
  image?: string;
  content: string;
};

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
  content?: string; // Keep for backward compatibility
  sections?: PostSection[]; // New section-based structure
  author?: {
    name: string;
    avatar: string;
  };
};
