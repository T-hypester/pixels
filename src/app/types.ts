import Player from "./Player";
import { Point } from "../lib/geometry/types";

export interface Position<C extends Point> {
  current: C;
  moveTo(position: C): boolean;
}

export interface Unit {
  health: number;
  position?: Position<any>;
  team?: string; 
  moveToward<C extends Point>(position: C): void
}

export interface World {
  height: number;
  width: number;
  deployUnit<C extends Point>(unit: Unit, position: C): void;
  moveUnit<C extends Point>(unit: Unit, position: C): boolean;
  getPosition<C extends Point>(position: C): Unit | boolean;
}

export interface Game {
  addTeam(team:string, player: Player): void;
}