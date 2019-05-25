import World from "./World";
import { Point } from "../lib/geometry/types";
import { Pathfinder } from "../lib/pathfinding/types";
import { Unit as Pixel, Position } from "./types";
import FuzzyPathfinder from "../lib/pathfinding/FuzzyPathfinder";

export default class DefaultPixel implements Pixel {
  public health: number = 255;
  public position?: Position<Point>;
  public team?: string;

  public pathfinder: Pathfinder<Point>;

  constructor(world: World, pathfinder?: Pathfinder<Point>) {
    this.pathfinder = pathfinder || new FuzzyPathfinder(world);
  }

  moveToward<C extends Point>(position: C) {
    if (this.position) {
      const newPos = this.pathfinder.getNextPosition(this.position.current, position);
      this.position.moveTo(newPos);
    }
  }
}
