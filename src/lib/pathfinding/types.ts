import { Geometry } from "../geometry/types";

export interface Pathfinder <Coords> {
  geometry: Geometry<Coords>;
  getNextPosition(from: Coords, to: Coords): Coords;
}