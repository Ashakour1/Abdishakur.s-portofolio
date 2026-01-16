import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TagsScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTagClick = (tag: string) => {
    const encodedTag = encodeURIComponent(tag);
    navigate(`/tag/${encodedTag}`);
  };

  const tags = [
    "Data Science",
    "Fintech",
    "Courses",
    "AI",
    "Machine Learning",
    "Blockchain",
  ];

  return (
    <main className="max-w-[1020px] h-[500px]  mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5">
        <h1 className="font-bold text-sm text-gray-700">Tags</h1>
        <p>
          Technologies, tools, and skills I work with. Click on a tag to filter
          or explore related content.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="inline-flex items-center rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
};

export default TagsScreen;
