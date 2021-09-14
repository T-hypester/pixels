import Player from "../Player"
import { Team, Position } from "../types"

export interface UnitPosition {
  current: Position
}

export interface Unit {
  position?: UnitPosition
}

export interface PlayingUnit extends Unit {
  player?: Player
  team?: Team
}

export interface MobileUnit extends Unit {
  moveToward(position: Position): boolean
}

export interface MortalUnit {
  health: number
}
