type Vector = {
  [i: number]: number
}

export class Cartesian2D {
  private vector: Vector = [0, 0]

  constructor(...coords: number[]) {
    this.x = coords[0]
    this.y = coords[1]
  }

  get [0] () { return this.vector[0] }
  get x() { return this.vector[0] }

  set [0] (x) { this.vector[0] = x }
  set x(x) { this.vector[0] = x }

  get [1] () { return this.vector[1] }
  get y() { return this.vector[1] }

  set [1] (y) { this.vector[1] = y}
  set y(y) { this.vector[1] = y }
}

export type Point = Cartesian2D

export interface Distance<Coords> {
  (a: Coords, b: Coords): number
}

export interface Geometry<Coords> {
  getAdjacent(point: Coords): Coords[]
  getDistance(a: Coords, b: Coords): number
}
