import {useMine} from "./hooks/useMine";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameOptions from "./components/GameOptions";

function App() {

   const {boardSize,setHardMode,hardMode} = useMine()

   return (
      <main>
         <header>
            <h1>💣Minesweeper</h1>
         </header>
         <GameOptions setHardMode={setHardMode} hardMode={hardMode}/>
         <GameBoard boardSize={boardSize} />
      </main>
   );
}

export default App;
