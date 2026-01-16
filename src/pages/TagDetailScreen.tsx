import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostCard from "../components/posts/PostCard";
import { postsData } from "../data/posts-data";

const TagDetailScreen = () => {
  const { tagId } = useParams<{ tagId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tagId]);

  const decodedTag = tagId ? decodeURIComponent(tagId) : "";
  const filteredPosts = useMemo(() => {
    if (!decodedTag) return [];
    return postsData.filter((post) =>
      post.tags.some(
        (tag) => tag.toLowerCase() === decodedTag.toLowerCase()
      )
    );
  }, [decodedTag]);

  if (!decodedTag) {
    return (
      <main className="max-w-[1020px] mx-auto px-5 py-10">
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">Tag not found.</p>
          <button
            onClick={() => navigate("/tags")}
            className="mt-4 text-blue-600 hover:text-blue-700"
          >
            Back to Tags
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[1020px] mx-auto px-5 py-20">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{decodedTag}</h1>
        <p className="text-gray-600 text-lg">
          A collection of {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">No posts found for this tag.</p>
          <button
            onClick={() => navigate("/tags")}
            className="mt-4 text-blue-600 hover:text-blue-700"
          >
            Back to Tags
          </button>
        </div>
      )}
    </main>
  );
};

export default TagDetailScreen;
