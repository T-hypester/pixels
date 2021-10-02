import { Pathfinder } from "./types"
import { Point, Geometry, Cartesian2D } from "../../lib/geometry/types"

import { World } from "../types"
import TaxicabGeometry from "../../lib/geometry/TaxicabGeometry"

export default class FuzzyPathfinder implements Pathfinder<Point> {
  geometry: Geometry<Point>
  private world: World<Cartesian2D>

  constructor(world: World<Cartesian2D>) {
    this.geometry = new TaxicabGeometry()
    this.world = world
  }

  findNextPosition(from: Point, to: Point): Point {
    let target = from
    let minDist = this.geometry.getDistance(from, to)
    const adjacent = this.geometry.getAdjacent(from)
    for (const tentative of adjacent) {
      const pos = this.world.getPosition(tentative)
      if (pos.available && pos.units.length === 0) {
        const dist = this.geometry.getDistance(tentative, to)
        if (dist < minDist) {
          minDist = dist
          target = tentative
        }
      }
    }
    return target
  }
}
