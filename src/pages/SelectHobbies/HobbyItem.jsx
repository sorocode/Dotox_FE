// HobbyItem.jsx
import { Link } from "react-router-dom";

const HobbyItem = ({ imgSrc, altText, title, onClick }) => (
  <div className="group relative" onClick={() => onClick(title)}>
    <img
      src={imgSrc}
      className="w-full h-20 rounded-lg object-cover transition duration-300 group-hover:brightness-125"
      alt={altText}
    />
    <div className="absolute inset-0 bg-black/50 rounded-lg" />
    <p className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-bold text-white">
      {title}
    </p>
  </div>
);

export default HobbyItem;
