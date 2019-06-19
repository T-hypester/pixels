import { Geometry } from "../../lib/geometry/types";
import { Position } from "../types";

export interface Pathfinder<C> {
  geometry: Geometry<C>;
  findNextPosition(from: Position<C>, to: Position<C>): Position<C>;
}