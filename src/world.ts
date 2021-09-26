import { Observer, Subject, Subscription } from "rxjs"
import { NonPlayingUnit, PlayingUnit, Unit, UnitCtor } from "./game"

export type Coordinates = number[]
export type Position = [number, number]
export type Grid<Type> = Type[][]

export class World {
  width: number = 100
  height: number = 100

  private positionUpdates: Subject<Position> = new Subject<Position>()
  private units = new Field<Unit>()

  constructor(
    options: {
      width?: number
      height?: number
    } = {}
  ) {
    Object.assign(this, options)
  }

  /**
   * Add unit to the world's grid
   *
   * @param unit Unit to dpeloy
   * @param pos  Deployment position
   * @returns this
   */
  deploy(unit: Unit, pos: Position): this {
    if (this.units.has(pos) && this.units.get(pos) !== unit)
      throw new Error(
        `Another Unit is already deployed at (${pos[0]},${pos[1]})`
      )

    unit.addToWorld(this).position = pos
    this.units.set(pos, unit)
    this.positionUpdates.next(pos)
    return this
  }

  /**
   * Iterate over deployed units
   *
   * @param callbackFn Function to call for each unit
   */
  forEachUnit(callbackFn: (unit: any, position: any) => void) {
    this.units.forEach(callbackFn)
  }

  /**
   * Get the unit inƒ a certain position
   *
   * @param arg0
   */
  getUnitAt(pos: Position): Unit | undefined {
    return this.units.get(pos)
  }

  /**
   * Move a unit from initial position to new position
   *
   * @param from Initial position to move unit from
   * @param to   Final position to move unit into
   *
   * @returns this
   */
  move(from: Position, to: Position): this {
    if (!this.units.has(from))
      throw new Error(`No unit found at (${from[0]},${from[1]})`)

    const unit = this.units.get(from)
    this.remove(from)
    this.deploy(unit!, [
      Math.min(this.width - 1, Math.max(0, to[0])),
      Math.min(this.height - 1, Math.max(0, to[1]))
    ])
    return this
  }

  /**
   * Subscribe to position changes
   *
   * @param observer RxJS Observer<Position>
   */
  addObserver(observer: Observer<Position>): Subscription {
    return this.positionUpdates.subscribe(observer)
  }

  private remove(from: Position): this {
    this.units.delete(from)
    this.positionUpdates.next(from)
    return this
  }
}

class Field<T> /* implements Map<number[], T> */ {
  private _values: Map<string, T> = new Map()

  get size(): number {
    return this._values.size
  }

  delete(coords: number[]): boolean {
    return this._values.delete(coords.join(","))
  }

  forEach(
    callbackfn: (
      value: T,
      coords: number[] /* , map: Map<number[], T> */
    ) => void,
    thisArg?: any
  ): void {
    this._values.forEach((v, k) => {
      const pos = k.split(",").map(c => parseInt(c))
      callbackfn.call(thisArg || this, v, pos /* , this */)
    })
  }

  get(coords: number[]): T | undefined {
    return this._values.get(coords.join(","))
  }

  has(coords: number[]): boolean {
    return this._values.has(coords.join(","))
  }

  set(coords: number[], value: T): this {
    this._values.set(coords.join(","), value)
    return this
  }

  /* clear(): void {
    throw new Error("Method not implemented.")
  }
  entries(): IterableIterator<[number[], T]> {
    throw new Error("Method not implemented.")
  }
  keys(): IterableIterator<number[]> {
    throw new Error("Method not implemented.")
  }
  values(): IterableIterator<T> {
    throw new Error("Method not implemented.")
  }
  [Symbol.iterator](): IterableIterator<[number[], T]> {
    throw new Error("Method not implemented.")
  }
  [Symbol.toStringTag]: string */
}
