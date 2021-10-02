import { Geometry, Point } from "../../lib/geometry/types"
import { Position } from "../types"

export interface Pathfinder<CoordsType> {
  geometry: Geometry<CoordsType>
  findNextPosition(from: CoordsType, to: CoordsType): CoordsType
}
