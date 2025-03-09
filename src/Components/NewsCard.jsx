import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ singleNews }) => {
  return (
    <div className="card w-full bg-white shadow-lg rounded-lg border overflow-hidden">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 border-b bg-gray-100">
        <div className="flex items-center">
          <img
            src={singleNews.author.img}
            alt={singleNews.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-gray-800">{singleNews.author.name}</p>
            <p className="text-sm text-gray-500">{singleNews.author.published_date.split(" ")[0]}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title Section */}
      <div className="p-4 pb-0">
        <h2 className="font-bold text-xl text-gray-900 leading-snug">
          {singleNews.title}
        </h2>
      </div>

      {/* Image Section */}
      <img src={singleNews.image_url} alt={singleNews.title} className="w-full h-60 object-cover mt-2" />

      {/* Content Section */}
      <div className="p-4 text-justify">
        <p className="text-sm text-gray-600">
          {singleNews.details.substring(0, 180)}...
        </p>
        <a href="#" className="text-orange-500 font-semibold mt-3 inline-block">
          Read More
        </a>
      </div>

      {/* Footer Section */}
      <div className="p-4 flex justify-between items-center border-t bg-gray-100">
        <div className="flex items-center text-orange-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="mr-1" />
          ))}
          <span className="ml-2 font-semibold text-black">{singleNews.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <IoEyeSharp className="mr-1" />
          <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;