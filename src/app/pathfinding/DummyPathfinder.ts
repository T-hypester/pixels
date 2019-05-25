import { Pathfinder } from "./types";
import { Point } from "../../types/geometry";
import World from "../World";

export default class DummyPathfinder implements Pathfinder {
  private world: World;

  constructor(world: World) {
    this.world = world;
  }

  getNewPosition(from: Point, to: Point): Point {
    const v = versor(from, to);
    const newPosition = { x: from.x + v.x, y: from.y + v.y };
    return this.world.isEmptyAt(newPosition) ? newPosition : from;
  }
}

function versor(a: Point, b: Point) {
  return {
    x: b.x > a.x ? +1 : b.x < a.x ? -1 : 0,
    y: b.y > a.y ? +1 : b.y < a.y ? -1 : 0
  };
}
