import World from "./World";
import { Point } from "../types/geometry";
import { Pathfinder } from "./pathfinding/types";
import { Unit as Pixel } from "./types";

export default class DefaultPixel implements Pixel {
  public health: number = 255;
  public team?: string;

  private _world: World;
  private _position: Point;
  public pathfinder: Pathfinder;

  constructor(world: World, pathfinder: Pathfinder) {
    this._world = world;
    this._position = {
      x: 0,
      y: 0
    };
    this.pathfinder = pathfinder;
  }

  set position(point: Point) {
    Object.assign(this._position, point);
  }

  get position() {
    return this._position;
  }

  get world() {
    return this._world;
  }

  moveToward(position: Point) {
    this.world.setPixelAt(this.position, null);
    this.position = this.pathfinder.getNewPosition(this.position, position);
    this.world.setPixelAt(this.position, this);
  }
}
