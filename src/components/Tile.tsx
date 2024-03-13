export default function Tile({ x, y }: { x: number; y: number }) {
   return (
      <div
         className="tile"
         onClick={(e: any) => {
            e.target.firstElementChild.classList.add("inner-tile-visible");
         }}
      >
         <div className="inner-tile">💣</div>
      </div>
   );
}
