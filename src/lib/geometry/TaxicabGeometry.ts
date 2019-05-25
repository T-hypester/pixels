import { Geometry } from "./types";
import { Point } from "./types";
import { manhattan } from "./distances";

export default class TaxicabGeometry implements Geometry<Point> {
  getAdjacent(p: Point) {
    const adjacent = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue;
        adjacent.push({ x: p.x + x, y: p.y + y });
      }
    return adjacent;
  }

  getDistance(a: Point, b: Point) {
    return manhattan(a, b);
  }
}
