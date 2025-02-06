import PlayerHand from "./components/PlayerHand/PlayerHand.jsx";
import DeckList from "./components/DeckList/DeckList.jsx";
import PlayArea from "./components/PlayArea/PlayArea.jsx";
import "./App.css";

function App() {
  return (
    <div className={"app-container"}>
      <div className={"play-container"}>
        <PlayArea />
        <DeckList />
      </div>
      <PlayerHand />
    </div>
  );
}

export default App;
