import { SearchRes } from "../../utils/types/type";
import GameResultRow from "./GameResultRow";
import TopPopular from "./TopPopular";
import TopRated from "./TopRated";

const Body = (results: SearchRes) => {
  const { access_token } = JSON.parse(
    localStorage.getItem("access_token") ?? ""
  );

  if (results.data.length === 0)
    return (
      <div className="flex flex-col gap-4 p-5 items-center align-middle justify-center">
        <TopRated access_token={access_token} />
        <TopPopular access_token={access_token} />
      </div>
    );

  return (
    <div className="flex flex-col gap-4  justify-center align-middle items-center p-5">
      {(results.data.length > 0 &&
        results.data.map((d) => <GameResultRow game={d} />)) || (
        <div className="text-center">Search for a title</div>
      )}
    </div>
  );
};

export default Body;
