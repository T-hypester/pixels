import { Point } from "../types/geometry";

export default class Player {
  public position?: Point;

  private _color: string;

  constructor(color: string) {
    this._color = color;
  }

  get color() {
    return this._color;
  }
}
