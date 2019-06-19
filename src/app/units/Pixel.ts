import World from "../World";
import { Point } from "../../lib/geometry/types";
import { Pathfinder } from "../pathfinding/types";
import { Team, Position } from "../types";
import FuzzyPathfinder from "../pathfinding/FuzzyPathfinder";
import { MobileUnit, MortalUnit, Unit, UnitPosition, PlayingUnit } from "./types";

export default class Pixel implements Unit, PlayingUnit, MobileUnit, MortalUnit {
  public health: number = 1;
  public position?: UnitPosition;
  public team?: Team;

  public pathfinder: Pathfinder<Point>;

  constructor(world: World, pathfinder?: Pathfinder<Point>) {
    this.pathfinder = pathfinder || new FuzzyPathfinder(world);
  }

  moveTo(position: Position) {
    if (this.position) {
      const newPos = this.pathfinder.findNextPosition(this.position.current, position);
      return this.position.moveTo(newPos);
    }
    else return false
  }
}
