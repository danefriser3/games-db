import { GamesController } from "../../utils/GamesController";
import { v4 } from "uuid";
import { useState } from "react";
import useSWR, { mutate } from "swr";

const TopRated = ({ access_token }: { access_token: string }) => {
  const [platform, setPlatform] = useState(6);
  const { data, isLoading } = useSWR(
    [access_token, platform, 1],
    ([access_token, platform]) =>
      GamesController.getTop10Rated(access_token, platform)
  );
  return (
    <div className="flex flex-col gap-4 w-full lg:w-4/5 rounded-lg p-5 bg-slate-400">
      <div className="flex flex-row gap-3 items-center">
        <div className="text-start text-xl font-bold">Top 100 rating</div>
        <div className="text-start text-xl font-bold">
          <select
            className="p-1 px-2 rounded-xl"
            onChange={(e) => {
              setPlatform(parseInt(e.target.value));
              mutate({ revalidate: true });
            }}
          >
            {GamesController.platforms.map((p) => (
              <option selected={platform === p.id} key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row overflow-auto gap-3 p-3">
        {(isLoading && <>loading top rated...</>) ||
          data?.map((sm: any, idx: number) => (
            <div
              key={v4()}
              className="h-full bg-white rounded-[0.5em] cursor-pointer max-w-fit shadow-[-2px_2px_2px_rgba(0,0,0,0.5)] hover:shadow-[-2px_2px_7px_rgba(0,0,0,0.7)]"
              onClick={() => window.open(`/game?id=${sm.id}`, "_self")}
            >
              <div className="text-center py-1 font-semibold">#{idx + 1}</div>
              <img
                src={sm?.cover?.url.split("t_thumb").join("t_cover_big")}
                className="max-w-fit"
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
  );
};

export default TopRated;
