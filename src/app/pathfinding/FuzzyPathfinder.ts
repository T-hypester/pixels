import { Pathfinder } from "./types";
import { Point, Geometry } from "../../lib/geometry/types";

import World from "../World";
import TaxicabGeometry from "../../lib/geometry/TaxicabGeometry";
import { Position } from "../types";

export default class FuzzyPathfinder implements Pathfinder<Point> {
  geometry: Geometry<Point>;
  private world: World;

  constructor(world: World) {
    this.geometry = new TaxicabGeometry();
    this.world = world;
  }

  findNextPosition(from: Position<Point>, to: Position<Point>): Position<Point> {
    let position = from;
    let minDist = this.geometry.getDistance(from.coordinates, to.coordinates);
    const adjacent = this.geometry.getAdjacent(from.coordinates);
    for (const tentative of adjacent) {
      const pos = this.world.getPosition(tentative)
      if (pos.available && pos.units.length === 0) {
        const dist = this.geometry.getDistance(tentative, to.coordinates);
        if (dist <= minDist) {
          minDist = dist;
          position = pos;
        }
      }
    }
    return position;
  }
}
