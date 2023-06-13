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
    expect(game.grid).toEqual(gen1);

    game.next();
    expect(game.grid).toEqual(gen0);
  });
});
