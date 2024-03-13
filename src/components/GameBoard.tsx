import { Fragment } from "react/jsx-runtime";

import Tile from "./Tile";
export default function GameBoard({ boardSize }: any) {
   return (
      <section className="game-container">
         <div className="board">
            {boardSize.map(({ x, y }: any, idx: number) => {
               return (
                  <Fragment key={idx}>
                     <Tile x={x} y={y} />
                  </Fragment>
               );
            })}
         </div>
      </section>
   );
}
