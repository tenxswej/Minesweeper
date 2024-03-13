function boardGenerator(size: number, mines: number) {
   const board = [];

   for (let x = 0; x < size; x++) {
      const row = [];

      for (let y = 0; y < size; y++) {
         row.push({
            x,
            y,
         });
      }

      board.push(row);
   }
   return board;
}

export default boardGenerator;
