import { Team, Position } from "../types";

export interface UnitPosition {
  current: Position
  moveTo(position: Position): boolean
}

export interface Unit {
  position?: UnitPosition
}

export interface PlayingUnit extends Unit {
  team?: Team
}

export interface MobileUnit extends Unit {
  moveTo(position: Position): boolean
}

export interface MortalUnit {
  health: number;
}