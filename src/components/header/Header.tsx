import { SearchForm } from "../../utils/types/type";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = ({ setSearch }: SearchForm) => {
  return (
    <div className="fixed top-0 w-full h-auto border-b-[1px] bg-slate-300 flex flex-row justify-between z-50">
      <Logo />
      <SearchBar setSearch={setSearch} />
    </div>
  );
};

export default Header;
