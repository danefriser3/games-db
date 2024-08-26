import { SearchRes } from "../utils/types/type";
import GameResultRow from "./games/GameResultRow";

const Body = (results: SearchRes) => {
  return (
    <div className="flex flex-col gap-4  justify-center align-middle items-center m-5">
      {(results.data.length > 0 &&
        results.data.map((d) => <GameResultRow game={d} />)) || (
        <div className="text-center">Search for a title</div>
      )}
    </div>
  );
};

export default Body;
