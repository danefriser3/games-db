import useSWR from "swr";
import { SearchRes } from "../utils/types/type";
import GameResultRow from "./games/GameResultRow";
import { GamesController } from "../utils/GamesController";
import { v4 } from "uuid";

const Body = (results: SearchRes) => {
  const { access_token } = JSON.parse(
    localStorage.getItem("access_token") ?? ""
  );
  const { data, isLoading } = useSWR([access_token], ([a]) =>
    GamesController.getTop10Popular(a)
  );

  if (isLoading) return;

  if (results.data.length === 0)
    return (
      <div className="flex flex-row m-5 items-center align-middle justify-center">
        <div className="flex flex-col gap-4 w-full lg:w-4/5 rounded-lg p-5 bg-slate-400">
          <div className="text-start text-xl font-bold">Popular right now</div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
            {data?.map((sm) => (
              <div
                key={v4()}
                className="h-full bg-white rounded-[0.5em] cursor-pointer shadow-[-2px_2px_2px_rgba(0,0,0,0.5)]  hover:shadow-[-2px_2px_7px_rgba(0,0,0,0.7)]"
                onClick={() => window.open(`/game?id=${sm.id}`, "_self")}
              >
                <img
                  src={sm?.cover?.url.split("t_thumb").join("t_cover_big")}
                  className="rounded-[0.5em_0.5em_0em_0em] w-full"
                />
                <div className="p-3 flex flex-col gap-1">
                  <div className="font-semibold">{sm.name}</div>
                  <div className="font-semibold flex flex-row justify-between text-xs">
                    <div>
                      {sm.genres?.map((s: { name: string }) => s.name)[0]}
                    </div>
                    <div>{sm.rating?.toFixed(1) ?? "N/A"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

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
