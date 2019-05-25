import { Point } from "../types/geometry";
import Player from "./Player";

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

export interface Game {
  addTeam(team:string, player: Player): void;
}