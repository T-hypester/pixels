import { Pathfinder } from "./types";
import { Point, Geometry } from "../geometry/types";

import World from "../../app/World";
import TaxicabGeometry from "../geometry/TaxicabGeometry";

export default class FuzzyPathfinder implements Pathfinder<Point> {
  geometry: Geometry<Point>;
  private world: World;

  constructor(world: World) {
    this.geometry = new TaxicabGeometry();
    this.world = world;
  }

  getNextPosition(from: Point, to: Point): Point {
    let position = from;
    let minDist = this.geometry.getDistance(position, to);
    const adjacent = this.geometry.getAdjacent(from);
    for (const tentative of adjacent) {
      if (this.world.getPosition(tentative) === true) {
        const dist = this.geometry.getDistance(tentative, to);
        if (dist <= minDist) {
          minDist = dist;
          position = tentative;
        }
      }
    }
    return position;
  }
}
