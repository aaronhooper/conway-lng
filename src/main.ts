import { Game } from "./lib/game";
import { Grid } from "./lib/grid";
import { CellState, Coords } from "./lib/types";

const CELL_WIDTH = 20;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameWidth = Math.floor(canvas.width / (CELL_WIDTH + 1));
const gameHeight = Math.floor(canvas.height / (CELL_WIDTH + 1));

const grid = new Grid(gameWidth, gameHeight);
const gridCoords: Coords[] = [
  [1, 3],
  [2, 1],
  [2, 3],
  [3, 2],
  [3, 3],
];

for (const point of gridCoords) {
  grid.state = Grid.toggle(grid.state, point);
}

const game = new Game(grid);

function draw(): void {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.next();

  for (let i = 0; i < gameHeight; i++) {
    for (let j = 0; j < gameWidth; j++) {
      const cell = Grid.at(game.grid.state, [j, i]);

      if (cell === CellState.Alive) {
        ctx.fillStyle = "black";
      } else if (cell === CellState.Dead) {
        ctx.fillStyle = "white";
      }

      ctx.fillRect(
        j * (CELL_WIDTH + 1),
        i * (CELL_WIDTH + 1),
        CELL_WIDTH,
        CELL_WIDTH
      );
    }
  }

  window.requestAnimationFrame(draw);
}

draw();
