import { SearchForm } from "../../utils/types/type";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = ({ setSearch }: SearchForm) => {
  return (
    <div className=" h-auto border-b-[1px] bg-slate-300 flex flex-row justify-between">
      <Logo />
      <SearchBar setSearch={setSearch} />
    </div>
  );
};

export default Header;
