import { Point, Geometry, Cartesian2D } from "../../lib/geometry/types"
import World from "../World"
import TaxicabGeometry from "../../lib/geometry/TaxicabGeometry"
import { Position } from "../types"

import { Pathfinder } from "./types"

export default class DummyPathfinder implements Pathfinder<Cartesian2D> {
  geometry: Geometry<Cartesian2D>
  private world: World

  constructor(world: World) {
    this.geometry = new TaxicabGeometry()
    this.world = world
  }

  findNextPosition(from: Point, to: Point): Point {
    const v = versor(from, to)
    const newPoint = new Cartesian2D(from.x + v.x, from.y + v.y)
    const newPosition = this.world.getPosition(newPoint)
    return newPosition.available && newPosition.units.length === 0
      ? newPoint
      : from
  }
}

function versor(a: Point, b: Point): Point {
  return new Cartesian2D(
    b.x > a.x ? +1 : b.x < a.x ? -1 : 0,
    b.y > a.y ? +1 : b.y < a.y ? -1 : 0
  )
}
