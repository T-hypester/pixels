import { UserInterface } from "../lib/ui/types";
import World from "./World";
import Player from "./Player";
import Pixel from "./DefaultPixel";
import FuzzyPathfinder from "./pathfinding/FuzzyPathfinder";
import { Game } from "./types";

const TEST_PIXEL_N = 400;

type Teams = {
  [team: string]: Player;
};

export default class DefaultGame implements Game {
  private ui: UserInterface;
  private pixels: Array<Pixel> = [];

  private teams: Teams = {};
  private world: World;

  constructor(ui: UserInterface) {
    this.ui = ui;
    this.world = new World(this.ui.height, this.ui.width);

    requestAnimationFrame(this.render);

    console.log("pixel!");
  }

  addTeam(team: string, player: Player) {
    this.teams[team] = player;

    if (!this.pixels.length) {
      for (let i = 0; i < TEST_PIXEL_N; i++) {
        let pxl = new Pixel(this.world, new FuzzyPathfinder(this.world));
        pxl.team = team;
        pxl.position = { x: i, y: i };
        this.pixels[i] = pxl;
      }
    }
  }

  private render = () => {
    for (let team in this.teams) {
      this.renderTeam(team);
    }

    requestAnimationFrame(this.render);
  };

  private renderTeam(team: string) {
    const player = this.teams[team];
    if (!player) return;
    if (player.position) {
      for (let i = 0; i < this.pixels.length; i++) {
        const prevPos = Object.assign({}, this.pixels[i].position);
        this.pixels[i].moveToward(player.position);
        this.ui.clearPosition(prevPos);
        this.ui.drawPixel(this.pixels[i]);
      }
    }
  }
}
