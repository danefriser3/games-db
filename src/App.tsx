import Body from "./components/games/Body";
import { SearchRes } from "./utils/types/type";

function App({ searchRes }: { searchRes: SearchRes }) {
  return <Body data={searchRes?.data ?? []} />;
}

export default App;
