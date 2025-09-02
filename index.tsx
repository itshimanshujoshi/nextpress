"use client";

import { useQuery } from "@tanstack/react-query";
import { getNews } from "../api/index";

export default function Index() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
  
  if (isLoading) return <p className="p-4 text-gray-600">Loading news...</p>;
  if (isError) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
}

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Headlines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.articles?.map((article: Article, index: number) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            )}
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-3">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
