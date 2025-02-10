import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="top-0 left-0 z-[9999] fixed flex justify-between bg-black p-4 w-full">
      <div className="flex items-center gap-8">
        <h1 className="font-bold text-[30px] text-red-700 uppercase">Movie</h1>
        <nav className="hidden md:flex items-center space-x-7">
          <a href="#" className="hover:text-red-700">
            Home
          </a>
          <a href="#" className="hover:text-red-700">
            About
          </a>
          <a href="#" className="hover:text-red-700">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 py-1 pl-3 rounded-md w-[100px] sm:w-full text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-700 px-3 py-1 rounded-md font-bold text-white"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
