import { World } from "../types"
import { Cartesian2D, Point } from "../../lib/geometry/types"
import { Pathfinder } from "../pathfinding/types"
import { Team, Position } from "../types"
import FuzzyPathfinder from "../pathfinding/FuzzyPathfinder"

import {
  MobileUnit,
  MortalUnit,
  Unit,
  UnitPosition,
  PlayingUnit,
} from "./types"
import Player from "../Player"

export default class Pixel
  implements Unit, PlayingUnit, MobileUnit, MortalUnit
{
  public health: number = 1
  public position?: UnitPosition
  public team?: Team
  public pathfinder: Pathfinder<Point>

  constructor(world: World<Cartesian2D>, pathfinder?: Pathfinder<Point>) {
    this.pathfinder = pathfinder || new FuzzyPathfinder(world)
  }

  get player(): Player | undefined {
    return this.team && this.team.player
  }

  moveToward(position: Position) {
    if (!this.position) return false

    const newPoint = this.pathfinder.findNextPosition(
      this.position.current.coordinates,
      position.coordinates
    )
    this.position.current.coordinates = newPoint
    return true
  }
}
