import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SearchForm, SearchRes } from "../../utils/types/type";
import { GamesController } from "../../utils/GamesController";
import useSWR from "swr";

const SearchSWR = ({
  value,
  setSearch,
  setOk,
}: {
  value: string;
  setSearch: Dispatch<SetStateAction<SearchRes>>;
  setOk: Dispatch<SetStateAction<boolean>>;
}) => {
  const { access_token } = JSON.parse(
    localStorage.getItem("access_token") ?? ""
  );
  const { data, error, isLoading } = useSWR([access_token, value], ([a, b]) =>
    GamesController.getGameByName(a, b)
  );

  useEffect(() => {
    if (data) {
      setSearch((p: any) => {
        p.data = data;
        return {
          ...p,
          data: p.data,
        };
      });
      setOk(false);
    }
  }, [data, setOk, setSearch]);
  if (error) return <div className="content-center">error...</div>;
  if (isLoading) return <div className="content-center">Loading...</div>;
};

const SearchBar = ({ setSearch }: SearchForm) => {
  const [value, setValue] = useState("");
  const [ok, setOk] = useState(false);
  const searchForGame = () => {
    setOk(true);
    /* const { access_token } = JSON.parse(
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
    }); */
  };

  return (
    <div className="flex flex-row gap-5">
      {ok && <SearchSWR value={value} setSearch={setSearch} setOk={setOk} />}
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
    </div>
  );
};

export default SearchBar;
