import { Point } from "../types/geometry";

export interface Unit {
  health: number;
  team?: string; 
  moveToward(position: Point): void
}

export interface World {
  height: number;
  width: number;
  placeUnit(unit: Unit, position: Position): void;
}
