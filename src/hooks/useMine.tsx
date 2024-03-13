import { useEffect, useState } from "react";
import boardGenerator from "../utils/boardGenerator";
import { gameConfig } from "../config/gameConfig";

export const useMine = function () {
   const [boardSize, setBoardSize] = useState(() =>
      boardGenerator(gameConfig.easy, 1)
   );
   const [hardMode, setHardMode] = useState(false);

   useEffect(() => {
      if (hardMode) {
         setBoardSize(() => boardGenerator(gameConfig.hard, 1));
      } else {
         setBoardSize(() => boardGenerator(gameConfig.easy, 1));
      }
   }, [hardMode]);

   return {
      boardSize,
      setBoardSize,
      hardMode,
      setHardMode,
   };
};
