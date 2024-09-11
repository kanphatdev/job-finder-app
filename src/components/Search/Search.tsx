import { CircleX, CircleXIcon, House, MapPin, SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="grid gap-10 rounded-md p-[3rem] bg-gray-200">
      <form action="">
        <div className="flex justify-between items-center rounded-sm gap-10 bg-white p-5 shadow-lg shadow-calm ">
          <div className="flex gap-2 items-center ">
            <button className="btn btn-circle btn-ghost">
              <SearchIcon className="hover:text-clarity transition-all" />
            </button>

            <input
              type="text"
              placeholder="Search Job Here"
              className="input w-full focus:outline-none text-clarity"
            />
            <CircleX className="text-lg text-energy hover:text-attention transition-all" />
          </div>
          <div className="flex gap-2 items-center ">
            <button className="btn btn-circle btn-ghost">
              <House className="hover:text-growth transition-all" />
            </button>

            <input
              type="text"
              placeholder="Search By Company"
              className="input w-full focus:outline-none text-clarity"
            />
            <CircleX className="text-lg text-energy hover:text-attention transition-all" />
          </div>
          <div className="flex gap-2 items-center ">
            <button className="btn btn-circle btn-ghost">
              <MapPin className="hover:text-attention transition-all" />
            </button>

            <input
              type="text"
              placeholder="Search Location"
              className="input w-full focus:outline-none text-clarity"
            />
            <CircleX className="text-lg text-energy hover:text-attention transition-all" />
          </div>

          <button className="btn capitalize bg-energy text-white hover:bg-attention transition-all">
            Search
          </button>
        </div>
      </form>
      
      <div className="flex items-center justify-center gap-2 mt-4 ">
        <label
          htmlFor="relevance"
          className="text-[#808080] font-semibold capitalize"
        >
          sort by:{" "}
        </label>
        <select className="select w-full max-w-xs p-2" id="relevance">
          <option value="relevance">Relevance</option>
          <option value="inclusive">Inclusive</option>
          <option value="starts_with">Starts With</option>
          <option value="contain">Contain</option>
        </select>
        
        <label
          htmlFor="type"
          className="text-[#808080] font-semibold capitalize"
        >
          type:{" "}
        </label>
        <select className="select w-full max-w-xs p-2" id="type">
          <option value="full_time">Full-Time</option>
          <option value="remote">Remote</option>
          <option value="contact">Contact</option>
          <option value="part_time">Part-Time</option>
        </select>
        
        <label
          htmlFor="level"
          className="text-[#808080] font-semibold capitalize"
        >
          level:{" "}
        </label>
        <select className="select w-full max-w-xs p-2" id="level">
          <option value="senior">Senior</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advocate">Advocate</option>
        </select>
        
        <span className="text-[#a1a1a1] capitalize px-2 py-1 hover:text-attention transition-all cursor-pointer" title="clear all">
        <CircleXIcon />
        </span>
      </div>
    </div>
  );
};

export default Search;
