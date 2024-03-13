export default function GameOptions({
   setHardMode,
   hardMode,
}: {
   setHardMode: (n: boolean) => void;
   hardMode: boolean;
}) {
   return (
      <section className="game-options-container">
         <div className="game-options">
            <div>
               <p>Game mode</p>
            </div>
            <div className="options">
               <div>
                  <input
                     checked={!hardMode}
                     type="radio"
                     id="easy-mode"
                     name="easy-mode"
                     value={"easy"}
                     onChange={() => setHardMode(false)}
                  />
                  <label htmlFor="easy-mode">Easy</label>
               </div>
               <div>
                  <input
                     checked={hardMode}
                     type="radio"
                     id="hard-mode"
                     name="hard-mode"
                     value={"hard"}
                     onChange={() => setHardMode(true)}
                  />
                  <label htmlFor="hard-mode">Hard</label>
               </div>
            </div>
         </div>
      </section>
   );
}
