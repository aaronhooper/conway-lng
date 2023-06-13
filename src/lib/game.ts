import { Coords, CellState } from "./types";
import { Grid } from "./grid";

export class Game {
  grid: Grid;
  generation: number;

  constructor(grid: Grid) {
    this.grid = grid;
    this.generation = 0;
  }

  next() {
    let nextGridState = this.grid.state;

    for (let i = 0; i < this.grid.height; i++) {
      for (let j = 0; j < this.grid.width; j++) {
        const point: Coords = [j, i];
        const cellState = Grid.at(this.grid.state, point);

        const liveNeighborCount = this.grid
          .neighbors(point)
          .filter(
            (p) => Grid.at(this.grid.state, p) === CellState.Alive
          ).length;

        if (
          cellState === CellState.Alive &&
          (liveNeighborCount < 2 || liveNeighborCount > 3)
        ) {
          nextGridState = Grid.toggle(nextGridState, point);
        } else if (cellState === CellState.Dead && liveNeighborCount === 3) {
          nextGridState = Grid.toggle(nextGridState, point);
        }
      }
    }

    this.grid.state = nextGridState;
    this.generation += 1;
  }
}
