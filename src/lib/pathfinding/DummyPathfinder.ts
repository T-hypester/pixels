import { Pathfinder } from "./types";
import { Point, Geometry } from "../geometry/types";
import World from "../../app/World";
import TaxicabGeometry from "../geometry/TaxicabGeometry";

export default class DummyPathfinder implements Pathfinder<Point> {
  geometry: Geometry<Point>;
  private world: World;

  constructor(world: World) {
    this.geometry = new TaxicabGeometry();
    this.world = world;
  }

  getNextPosition(from: Point, to: Point): Point {
    const v = versor(from, to);
    const newPosition = { x: from.x + v.x, y: from.y + v.y };
    return this.world.getPosition(newPosition) === true ? newPosition : from;
  }
}

function versor(a: Point, b: Point) {
  return {
    x: b.x > a.x ? +1 : b.x < a.x ? -1 : 0,
    y: b.y > a.y ? +1 : b.y < a.y ? -1 : 0
  };
}
