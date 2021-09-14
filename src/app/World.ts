import { Point, Cartesian2D } from "../lib/geometry/types"
import { World, Position } from "./types"
import { Unit } from "./units/types"

export default class DefaultWorld implements World<Point> {
  height: number
  width: number

  private positions: Array<Array<Position>>

  constructor(width: number, height: number) {
    this.width = width
    this.height = height

    this.positions = new Array(this.width)
    for (let x = 0; x < this.width; x++) {
      this.positions[x] = new Array(this.height)
      for (let y = 0; y < this.height; y++) {
        const coords = new Cartesian2D()
        coords.x = x
        coords.y = y
        this.positions[x][y] = {
          available: true,
          coordinates: coords,
          units: []
        }
      }
    }
  }

  getPosition(point: Point) {
    if (
      point.x < 0 ||
      point.y < 0 ||
      (point.x >= this.width || point.y >= this.height)
    )
      throw new Error(`undefined position: x=${point.x} y=${point.y}`)
    return this.positions[point.x][point.y]
  }

  deployUnit<C extends Point>(pixel: Unit, point: C) {
    this.updateUnitPosition(pixel, point)
    return true
  }

  moveUnit<C extends Point>(unit: Unit, position: C) {
    const pos = this.getPosition(position)
    if (pos.available && pos.units.length === 0) {
      if (unit.position) this.clearPosition(unit.position.current.coordinates)
      this.updateUnitPosition(unit, position)
      return true
    }
    return false
  }

  private clearPosition<C extends Point>(p: C) {
    const pos = this.getPosition(p)
    pos.units = []
  }

  private updateUnitPosition<C extends Point>(unit: Unit, coords: C) {
    const pos = this.getPosition(coords)
    pos.units.push(unit)
    if (unit.position) unit.position.current.coordinates = coords
    else
      unit.position = {
        current: pos,
        //moveTo: (pos: Position) => this.moveUnit(unit, pos.coordinates)
      }
  }
}
