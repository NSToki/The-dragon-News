import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, image_url, details, total_view, rating, author } = news;

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden mx-4">
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-medium">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-black" />
          <FiShare2 className="cursor-pointer hover:text-black" />
        </div>
      </div>


      <Link to={`/news/${news.id}`}>
        <h2 className="px-4 text-lg font-semibold mt-2">{title}</h2>
      </Link>

  
      <img src={image_url} alt="News" className="w-full object-cover mt-3" />


      <div className="p-4 text-gray-600">
        <p>
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <span className="text-primary font-medium cursor-pointer ml-2">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-warning">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span>{rating.number}</span>
        </div>

        {/* Total Views */}
        <div className="flex items-center gap-2">
          <FiEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
