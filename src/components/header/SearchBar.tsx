import { useState } from "react";
import { SearchForm } from "../../utils/types/type";
import { GamesController } from "../../utils/GamesController";

const SearchBar = ({ setSearch }: SearchForm) => {
  const [value, setValue] = useState("");

  const searchForGame = () => {
    const { access_token } = JSON.parse(
      localStorage.getItem("access_token") ?? ""
    );
    GamesController.getGameByName(access_token, value).then((t) => {
      console.log(t);
      setSearch((p) => {
        p.data = t;
        return {
          ...p,
          data: p.data,
        };
      });
    });
  };

  return (
    <div className="flex flex-row p-2">
      <input
        className="px-3 rounded-2xl shadow-2xl w-[300px]"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchForGame();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
