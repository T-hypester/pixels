import { Team } from "./types"
import { Color } from "../lib/ui/types"
import Player from "./Player"

export default class SimpleTeam implements Team {
  color: Color
  player?: Player

  constructor(color: Color) {
    this.color = color
  }
}
