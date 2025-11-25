import React from "react";
import { useParams, useLoaderData } from "react-router";
import { Link } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const news = newsData?.find((news) => news.id === id);

  if (!news) return <p>News not found...</p>;

  const { title, image_url, details, rating, total_view, author, tags, others } = news;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-3 gap-6">
      {/* LEFT SIDE - ARTICLE */}
      <div className="col-span-3 bg-white shadow-md p-5 rounded-lg">
        
        <img src={image_url} alt={title} className="w-full rounded-md mb-4" />

        <h1 className="text-2xl font-bold mb-2 leading-tight">{title}</h1>

        <p className="text-gray-500 text-sm mb-3">
          {author?.name} •{" "}
          {new Date(author?.published_date).toLocaleDateString()} • 👁️ {total_view} views
        </p>

        {/* Trending badge */}
        {rating?.badge && (
          <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs rounded-md mb-3">
            {rating.badge}
          </span>
        )}

        {/* Details */}
        <p className="text-gray-700 leading-relaxed">{details}</p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Tags:</h3>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Extra indicators */}
        <div className="mt-4 text-sm">
          {others?.is_today_pick && (
            <span className="text-green-600 mr-2">🌟 Today's Pick</span>
          )}
          {others?.is_trending && <span className="text-orange-500">🔥 Trending</span>}
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-md mt-4 text-sm hover:bg-red-700"
        >
          ← All news in this category
        </Link>
      </div>

      {/* RIGHT SIDEBAR */}
      
    </div>
  );
};

export default NewsDetails;
