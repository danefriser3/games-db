import { SearchForm } from "../../utils/types/type";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = ({ setSearch }: SearchForm) => {
  return (
    <div className="fixed top-0 w-full h-auto bg-slate-300 flex flex-row justify-between z-50 shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
      <Logo />
      <SearchBar setSearch={setSearch} />
    </div>
  );
};

export default Header;
