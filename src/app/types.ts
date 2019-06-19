import Player from "./Player"
import { Color } from "../lib/ui/types"
import { Unit } from "./units/types";
import { Cartesian2D } from "../lib/geometry/types";

export interface Position {
  available: boolean
  coordinates: Cartesian2D
  units: Unit[]
}

export interface Team {
  color: Color
  player?: Player
}

export interface World<C> {
  height: number
  width: number
  deployUnit(unit: Unit, position: C): void
  moveUnit(unit: Unit, position: C): boolean
  getPosition(position: C): Position
}

export interface Game {
  addTeam(team: Team, player: Player): void
}
