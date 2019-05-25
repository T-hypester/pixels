import { Pathfinder } from "./types";
import { Point } from "../../types/geometry";

import { manhattan } from "../../lib/geometry/distances";
import World from "../World";

export default class FuzzyPathfinder implements Pathfinder {
  private world: World;

  constructor(world: World) {
    this.world = world;
  }

  getNewPosition(from: Point, to: Point): Point {
    let position = from;
    let minDist = manhattan(position, to);
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue;
        const tentative = {
          x: from.x + x,
          y: from.y + y
        };
        if (this.world.isEmptyAt(tentative)) {
          const dist = manhattan(tentative, to);
          //console.log(tentative, to, dist)
          if (dist <= minDist) {
            minDist = dist;
            position = tentative;
          }
        }
      }
    return position;
  }
}
