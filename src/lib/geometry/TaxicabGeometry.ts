import { Geometry, Cartesian2D } from "./types";
import { Point } from "./types";
import { manhattan } from "./distances";

export default class TaxicabGeometry implements Geometry<Point> {
  getAdjacent(p: Point): Point[] {
    const adjacent: Point[] = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue;
        const a = new Cartesian2D;
        a.x = p.x + x
        a.y = p.y + y
        adjacent.push(a);
      }
    return adjacent;
  }

  getDistance(a: Point, b: Point) {
    return manhattan(a, b);
  }
}
