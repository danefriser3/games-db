import { useEffect, useState } from "react";
import { GameDetail, GamesController } from "../utils/GamesController";

const Game = () => {
  const [game, setGame] = useState<GameDetail>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id") ?? "0");

    const { access_token } = JSON.parse(
      localStorage.getItem("access_token") ?? ""
    );
    GamesController.getGameById(access_token, id).then((t) => setGame(t));
    GamesController.getPopularityAPI(access_token, id).then((t) =>
      console.log(t)
    );
  }, []);

  return (
    <div className="flex p-3 flex-col gap-4 w-full justify-center align-middle items-center">
      <div className="w-3/5 p-3 bg-slate-400 flex flex-col gap-3">
        <div className="flex flex-col">
          <div className="text-3xl">{game?.name}</div>
          <div className="text-2xl">
            {new Date(game?.first_release_date! * 1000).toLocaleString(
              "en-EN",
              {
                dateStyle: "medium",
              }
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
          <img src={game?.cover.url} className="h-full" />

          <iframe
            src={"https://www.youtube.com/embed/" + game?.videos[0].video_id}
            height={350}
            width={500}
          />
          <div className="flex flex-col gap-4">
            <div className="text-xl">
              {game?.involved_companies.map((c) => c.company.name).join(", ")}
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-3xl">
                  {((game?.rating ?? 0) / 10).toFixed(1)}
                </div>
                <div>{game?.rating_count} user ratings</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl">{game?.age_ratings[0].rating}</div>
                <div>{game?.age_ratings.length} critic ratings</div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
