import { Point } from "../types/geometry";

export default class Player {
  public position?: Point;

  private _team: string;

  constructor(team: string) {
    this._team = team;
  }

  get team() {
    return this._team;
  }
}
