import { Game } from "../lib/game";
import { Grid } from "../lib/grid";

describe("game", () => {
  it("renders a blinker", () => {
    const gen0 = new Grid(5, 5);
    gen0.state = Grid.toggle(gen0.state, [1, 0]);
    gen0.state = Grid.toggle(gen0.state, [1, 1]);
    gen0.state = Grid.toggle(gen0.state, [1, 2]);

    const gen1 = new Grid(5, 5);
    gen1.state = Grid.toggle(gen1.state, [0, 1]);
    gen1.state = Grid.toggle(gen1.state, [1, 1]);
    gen1.state = Grid.toggle(gen1.state, [2, 1]);

    const game = new Game(gen0);

    game.next();
    expect(game.grid.state).toEqual(gen1.state);

    game.next();
    expect(game.grid.state).toEqual(gen0.state);
  });

  it("renders a beacon", () => {
    const gen0 = new Grid(6, 6);
    gen0.state = Grid.toggle(gen0.state, [1, 1]);
    gen0.state = Grid.toggle(gen0.state, [1, 2]);
    gen0.state = Grid.toggle(gen0.state, [2, 1]);
    gen0.state = Grid.toggle(gen0.state, [2, 2]);
    gen0.state = Grid.toggle(gen0.state, [3, 3]);
    gen0.state = Grid.toggle(gen0.state, [3, 4]);
    gen0.state = Grid.toggle(gen0.state, [4, 3]);
    gen0.state = Grid.toggle(gen0.state, [4, 4]);

    const gen1 = new Grid(6, 6);
    gen1.state = gen0.state;
    gen1.state = Grid.toggle(gen1.state, [2, 2]);
    gen1.state = Grid.toggle(gen1.state, [3, 3]);

    const game = new Game(gen0);

    game.next();
    expect(game.grid.state).toEqual(gen1.state);

    game.next();
    expect(game.grid.state).toEqual(gen0.state);
  });
});
