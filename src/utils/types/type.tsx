import { Dispatch, SetStateAction } from "react";
import { GameDetail } from "../GamesController";

export interface SearchRes {
  data: GameDetail[];
}

export interface SearchForm {
  setSearch: Dispatch<SetStateAction<SearchRes>>;
}
