import { Point } from "../../types/geometry";

export interface Pathfinder {
  getNewPosition(from: Point, to: Point): Point;
}
