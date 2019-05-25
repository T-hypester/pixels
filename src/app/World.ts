import { Point } from "../lib/geometry/types";
import { World, Unit } from "./types";

export default class DefaultWorld implements World {
  height: number;
  width: number;

  private positions: Array<Array<Unit | boolean>>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.positions = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      this.positions[x] = new Array(this.height);
      for (let y = 0; y < this.height; y++) {
        this.positions[x][y] = true;
      }
    }
  }

  getPosition<C extends Point>(point: C) {
    if (point.x < 0 || point.y < 0) return false;
    if (point.x >= this.width || point.y >= this.height) return false;
    if (this.positions[point.x][point.y] !== undefined) return this.positions[point.x][point.y];
    return false;
  }

  deployUnit<C extends Point>(pixel: Unit, point: C) {
    this.updateUnitPosition(pixel, point);
    return true;
  }

  moveUnit<C extends Point>(unit: Unit, position: C) {
    if (this.getPosition(position) === true) {
      if (unit.position) this.clearPosition(unit.position.current);
      this.updateUnitPosition(unit, position);
      return true;
    }
    return false;
  }

  private clearPosition<C extends Point>(p: C) {
    this.positions[p.x][p.y] = true;
  }

  private updateUnitPosition<C extends Point>(unit: Unit, position: C) {
    this.positions[position.x][position.y] = unit;
    if (unit.position) unit.position.current = position;
    else
      unit.position = {
        current: position,
        moveTo: (pos: C) => this.moveUnit(unit, pos)
      };
  }
}
