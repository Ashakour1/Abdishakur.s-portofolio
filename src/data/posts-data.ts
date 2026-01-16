import { Post } from "../types/posts-type";

export const postsData: Post[] = [
  {
    id: "1",
    title: "My Machine Learning Journey Begins",
    description: "I've just started my journey in Machine Learning, and I'm excited to share this new chapter of my academic and professional growth.",
    thumbnail: "/machine-learning-journey.jpg",
    date: "15 Jan 2025",
    readTime: "3 min read",
    comments: 0,
    tags: ["Machine Learning"],
    link: "/post/1",
    category: "Machine Learning",
    author: {
      name: "Abdishakur Mohamed",
      avatar: "/image-prof.jpg",
    },
    content: `I've just started my journey in Machine Learning, and I'm excited to share this new chapter of my academic and professional growth.

This marks the beginning of my Master's program in Machine Learning. I'm embarking on this path with enthusiasm and determination to deepen my understanding of machine learning algorithms, neural networks, and the powerful tools that drive modern AI technology.

Throughout this journey, I'll be exploring fundamental concepts in supervised and unsupervised learning, deep learning architectures, model optimization, and practical applications. I'm looking forward to working with Python, TensorFlow, PyTorch, and other essential tools in the machine learning ecosystem.

This is just the start, and I'm committed to sharing my learning experiences, challenges, and discoveries along the way. Stay tuned for updates as I progress through this exciting educational journey.`,
  },
];
