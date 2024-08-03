import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="h-[96px] flex items-center w-full px-4">
      <div className="bg-[#363738] w-full rounded-full space-x-1 flex px-3 py-2 items-center">
        <CiSearch className="text-xl text-[#FFFFFF99]" />
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent outline-none placeholder:text-[#FFFFFF99] text-xs font-light flex-1 text-white"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
