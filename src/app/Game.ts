import { UserInterface } from "../lib/ui/types";
import World from "./World";
import Player from "./Player";
import Pixel from "./DefaultPixel";
import { Game } from "./types";
import { Point } from "../lib/geometry/types";

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

    for (let i = 0; i < TEST_PIXEL_N; i++) {
      if (this.world.getPosition({ x: i, y: i }) !== true) continue;
      const pxl = new Pixel(this.world);
      pxl.team = team;
      this.world.deployUnit(pxl, { x: i, y: i });
      this.pixels.push(pxl);
    }
  }

  putObstacle(a: Point, b: Point) {
    for (let x = a.x; x < b.x; x++)
      for (let y = a.y; y < b.y; y++) {
        const obstacle = new Pixel(this.world);
        this.world.deployUnit(obstacle, { x, y });
        this.pixels.push(obstacle);
      }
  }

  private render = () => {
    for (let i = 0; i < this.pixels.length; i++) {
      const pxl = this.pixels[i];
      const player = pxl.team ? this.teams[pxl.team] : undefined;

      if (player && player.position) {
        const prevPos = this.pixels[i].position!.current;
        this.pixels[i].moveToward(player.position);
        this.ui.clearPosition(prevPos);
      }

      this.ui.drawPixel(this.pixels[i]);
    }

    requestAnimationFrame(this.render);
  };
}
