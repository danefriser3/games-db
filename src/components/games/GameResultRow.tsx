import { GameDetail } from "../../utils/GamesController";

const GameResultRow = ({ game }: { game: GameDetail }) => {
  return (
    <div className="bg-slate-500 w-[1024px] rounded-lg p-5 flex flex-row gap-5">
      <img
        src={game?.cover?.url.split("t_thumb").join("t_cover_big")}
        width={125}
        alt={game?.cover?.image_id}
      />
      <div className="flex flex-col gap-1">
        <div
          className="text-xl underline-offset-2 underline"
          onClick={() => {
            window.open("/game?id=" + game.id);
          }}
        >
          {game?.name}
        </div>
        <div className="text-xs">
          {game?.platforms.map((pl) => pl.name).join(" / ")}
        </div>
        <div>
          {new Date(game?.first_release_date * 1000).toLocaleString("it-IT", {
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default GameResultRow;
