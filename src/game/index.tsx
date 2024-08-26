import { useEffect, useState } from "react";
import {
  GameDetail,
  GamesController,
  PlatformEnum,
  RatingBoards,
  RatingEnum,
  Regions,
} from "../utils/GamesController";
import { capitalize } from "../utils/funcs";
import useSWR from "swr";
import { v4 } from "uuid";

const Game = () => {
  const [game, setGame] = useState<GameDetail>();

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id") ?? "0");
  const { access_token } = JSON.parse(
    localStorage.getItem("access_token") ?? ""
  );

  const { data, error, isLoading } = useSWR([access_token, id], ([a, b]) =>
    GamesController.getGameById(a, b)
  );

  useEffect(() => {
    console.log(error);
    setGame(data);
  }, [data, error]);

  if (isLoading) return;

  return (
    <div className="flex p-3 flex-col gap-4 w-full justify-center align-middle items-center">
      <div
        className="w-4/5 p-3 flex flex-col gap-3 after:opacity-10  text-white"
        style={{
          backgroundImage: `url(${game?.cover?.url
            .split("t_thumb")
            .join("t_720p")})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col bg-gray-500 p-4 rounded-lg shadow-xl text-black">
          <div className="text-[50px]">{game?.name}</div>
          <div className="flex flex-row justify-between">
            <div className="text-[30px] w-4/7">
              {new Date(
                (game?.first_release_date ? game?.first_release_date : 1) * 1000
              ).toLocaleString("it-IT", {
                dateStyle: "medium",
              })}
            </div>
            {game?.involved_companies && (
              <div className="text-[30px] w-3/7 underline underline-offset-2">
                {game?.involved_companies[0]?.company.name}
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gap: "16px",
          }}
        >
          <img
            src={game?.cover?.url.split("t_thumb").join("t_cover_big")}
            className="h-full rounded-md shadow-2xl w-[350px] border-2 border-slate-500"
          />
          {(game?.videos && (
            <iframe
              src={"https://www.youtube.com/embed/" + game?.videos[0]?.video_id}
              className="h-full rounded-md shadow-2xl"
              height={400}
              width={725}
            />
          )) ||
            (game?.screenshots && (
              <img
                src={game?.screenshots[0].url
                  .split("t_thumb")
                  .join("t_screenshot_big")}
                className="h-full w-[725px] rounded-md shadow-2xl"
              />
            ))}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 p-3 border-2 gap-4 border-white rounded-md bg-black text-white">
              <div className="flex flex-col gap-2">
                <div className="text-3xl">
                  {((game?.rating ?? 0) / 10).toFixed(1)}
                </div>
                <div>{game?.rating_count} user ratings</div>
              </div>
              {game?.age_ratings && (
                <div className="flex flex-col gap-2">
                  <div className="text-3xl">
                    {game?.aggregated_rating
                      ? (game?.aggregated_rating / 10).toFixed(1) ?? "N/A"
                      : "N/A"}
                  </div>
                  <div>
                    {game?.aggregated_rating_count ?? "0"} critic ratings
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex flex-row gap-2">
        <div className="w-4/6 flex flex-col gap-4">
          <div className="h-auto p-3  bg-gray-700 text-white">
            <div className="border-b-2 p-2 flex flex-row justify-between">
              <div>Genere:</div>
              <div>{game?.genres?.map((g) => g.name).join(", ")}</div>
            </div>
            <div className="border-b-2 p-2  flex flex-row justify-between">
              <div>Piattaforma:</div>{" "}
              <div>{game?.platforms?.map((p) => p.name).join(", ")}</div>
            </div>
            <div className="border-b-2 p-2  flex flex-row justify-between">
              <div>Bundle:</div>{" "}
              <div>{game?.bundles?.map((p) => p.name).join(", ")}</div>
            </div>
            <div className="border-b-2 p-2  flex flex-row justify-between">
              <div>Espansioni:</div>{" "}
              <div>{game?.expansions?.map((p) => p.name).join(", ")}</div>
            </div>
            <div className="p-2">{game?.summary}</div>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-white">
            <div className="grid grid-cols-4  gap-6 text-black">
              <div className="flex flex-col gap-1">
                <div className="font-bold">Main Developer</div>
                <div>
                  {
                    game?.involved_companies?.find(
                      (i: any) => i.developer === true
                    )?.company.name
                  }
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Publishers</div>
                <div className="flex flex-col">
                  {game?.involved_companies
                    ?.filter((i: any) => i.publisher === true)
                    ?.map((i: any) => (
                      <div key={v4()}>{i.company.name}</div>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Generi</div>
                <div>
                  {game?.genres?.map((i) => (
                    <div key={v4()}>{i.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Modalità di gioco</div>
                <div>
                  {game?.game_modes?.map((gm) => (
                    <div key={v4()}>{gm.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Temi</div>
                <div>
                  {game?.themes?.map((gm) => (
                    <div key={v4()}>{gm.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Prospettiva di gioco</div>
                <div>
                  {game?.player_perspectives?.map((gm) => (
                    <div key={v4()}>{gm.name}</div>
                  ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4  gap-6 text-black">
              <div className="flex flex-col gap-1">
                <div className="font-bold">Serie</div>
                <div>
                  {game?.franchises?.map((f) => (
                    <div key={v4()}>{f.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Spin of</div>
                <div className="flex flex-col">
                  {game?.collections?.map((c) => (
                    <div key={v4()}>{c.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold">Engine</div>
                <div className="flex flex-col">
                  {game?.game_engines?.map((c) => (
                    <div key={v4()}>{c.name}</div>
                  ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col text-black">
              <div className="font-bold">Story</div>
              {game?.storyline}
            </div>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-white">
            <div className="grid grid-cols-2 gap-5 text-black">
              <div className="flex flex-col gap-1 border-r-2 p-2 border-r-gray-400">
                <div className="font-bold">Titolo localizzato</div>
                <div className="flex flex-col">
                  {game?.game_localizations?.map((gl) => (
                    <div
                      key={v4()}
                      className="flex flex-row gap-3 justify-between"
                    >
                      <div className="font-bold">{gl.region.name}:</div>
                      <div>{gl.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2">
                <div className="font-bold">Titoli alternativi</div>
                <div className="flex flex-col">
                  {game?.alternative_names?.map((gl) => (
                    <div
                      key={v4()}
                      className="flex flex-row gap-3 justify-between"
                    >
                      <div className="font-bold">{gl.comment}:</div>
                      <div>{gl.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-white">
            <div className="flex flex-col gap-3 text-black">
              <div className="font-bold">Keyword</div>
              <div className="flex flex-wrap gap-2  max-h-60 overflow-auto">
                {game?.keywords?.map((k) => (
                  <div
                    key={v4()}
                    className="p-1 px-3 rounded-full w-auto bg-gray-400"
                  >
                    {k.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 h-auto p-3 bg-gray-300">
            <div className="font-bold">Giochi simili</div>
            <div className="grid grid-cols-4 gap-2  text-black">
              {game?.similar_games?.map((sm) => (
                <div
                  key={v4()}
                  className="h-full rounded-[0.5em] cursor-pointer shadow-[-2px_2px_2px_rgba(0,0,0,0.5)]  hover:shadow-[-2px_2px_7px_rgba(0,0,0,0.7)]"
                  onClick={() => window.open(`/game?id=${sm.id}`, "_self")}
                >
                  <img
                    src={sm?.cover?.url.split("t_thumb").join("t_cover_big")}
                    className="rounded-[0.5em_0.5em_0em_0em]"
                  />
                  <div className="p-3 flex flex-col gap-1">
                    <div className="font-semibold">{sm.name}</div>
                    <div className="font-semibold flex flex-row justify-between">
                      <div>{sm.genres?.map((s) => s.name)[0]}</div>
                      <div>{sm.rating?.toFixed(1) ?? "N/A"}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/6 flex flex-col gap-4">
          <div className="h-auto p-4 bg-gray-700 flex flex-row gap-2 text-white">
            <div className="font-bold">IGDB ID:</div>
            <div>{game?.id}</div>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-black">
            <div className="font-bold text-center">Release dates</div>
            <div className="flex flex-col gap-1">
              {game?.release_dates?.map((f) => (
                <div key={v4()} className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="font-bold">{f.platform.name}</div>
                    <div className="font-semibold text-xs">
                      ({capitalize(Regions[f.region], "_")})
                    </div>
                  </div>
                  <div>{f.human}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-black">
            <div className="font-bold text-center">Links</div>
            {game?.websites?.find((w) => w.category === PlatformEnum.Steam) && (
              <a
                href={
                  game?.websites?.find((w) => w.category === PlatformEnum.Steam)
                    ?.url
                }
                target="_blank"
              >
                Steam
              </a>
            )}
            <hr />
            <div className="grid grid-cols-3 gap-1">
              {game?.websites
                ?.filter((f) => f.category !== PlatformEnum.Steam)
                ?.map((f) => (
                  <div
                    key={v4()}
                    className="flex flex-col justify-between border-2 p-2 text-center"
                  >
                    <a href={f.url} target="_blank">
                      {(() => {
                        return PlatformEnum[f.category];
                      })()}
                    </a>
                  </div>
                ))}
            </div>
            <hr />
            <a href={game?.url} className="text-center" target="_blank ">
              IGDB Link
            </a>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-black">
            <div className="font-bold text-center">Age ratings</div>
            <div className="grid grid-cols-3 gap-3">
              {game?.age_ratings?.map((f) => (
                <div
                  key={v4()}
                  className="flex flex-col justify-between border-2 p-2 text-center"
                >
                  <div className="text-[10px]">
                    {RatingEnum[f?.rating ?? 1]}
                  </div>
                  <a href={f.rating_cover_url} title={f.synopsis}>
                    {RatingBoards[f?.category ?? 1]}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="h-auto p-3 flex flex-col  gap-4 bg-gray-300 text-black">
            <div className="font-bold text-center">Supported Languages</div>
            <div className="grid grid-cols-3 gap-3">
              {game?.language_supports?.map((f) => (
                <div
                  key={v4()}
                  className="flex flex-col justify-between border-2 p-2 text-center"
                >
                  <div className="">{f.language.native_name}</div>
                  <div className="text-[12px]">
                    {f.language_support_type.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
