import { useEffect } from "react";
import ArticleCard from "../components/articles/ArticleCard";
import { postsData } from "../data/posts-data";

const ArticlesScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-10">
        <h1 className="text-3xl font-bold text-gray-900">All Articles</h1>
        <p className="text-gray-600">
          A collection of all my articles and writings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsData.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default ArticlesScreen;
