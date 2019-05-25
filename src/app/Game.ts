import { UserInterface } from "../lib/ui/types";
import { Point } from "../types/geometry";
import World from "./World";
import Player from "./Player";
import Pixel from "./DefaultPixel";
import FuzzyPathfinder from "./pathfinding/FuzzyPathfinder";

export default class Game {
  private ui: UserInterface;
  private player: Player;
  private pixels: Array<Pixel>;
  private numberOfPixels = 400;

  constructor(ui: UserInterface) {
    this.ui = ui;

    var world = new World(this.ui.height, this.ui.width);
    this.player = new Player("red");
    this.pixels = [];
    for (let i = 0; i < this.numberOfPixels; i++) {
      let pxl = new Pixel(world, new FuzzyPathfinder(world));
      pxl.position = { x: i, y: i };
      this.pixels[i] = pxl;
    }

    requestAnimationFrame(this.render);

    this.ui.onMove = this.setPlayerPosition;

    console.log("pixel!");
  }

  private setPlayerPosition = (pos: Point) => {
    this.player.position = pos;
  };

  private render = () => {
    if (this.player.position) {
      for (let i = 0; i < this.pixels.length; i++) {
        //const prevPos = Object.assign({}, this.pixels[i].position);
        this.ui.clearPixel(this.pixels[i]);
        this.pixels[i].moveToward(this.player.position);
        //this.ui.clearPosition(prevPos);
        this.ui.drawPixel(this.pixels[i]);
      }
    }

    requestAnimationFrame(this.render);
  };
}
