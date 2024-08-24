import { SearchRes } from "../utils/types/type";
import GameResultRow from "./games/GameResultRow";

const Body = (results: SearchRes) => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center align-middle items-center mt-5">
      {results.data.map((d) => (
        <GameResultRow game={d} />
      ))}
    </div>
  );
};

export default Body;
