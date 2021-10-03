import { Color } from "./ui"
import { PlayingUnit, Unit, UnitCtor } from "./units"
import { Position, World } from "./world"

export class Game {
  players: Player[] = []
  world: World

  constructor() {
    this.world = new World()
  }

  addPlayer(options: { color: Color; name: string }): Player {
    if (this.players.find(p => p.color === options.color))
      throw new Error(
        `Another player with the same color exists (${options.color})`
      )

    const player = new Player({ game: this, ...options })
    this.players.push(player)
    return player
  }

  deploy(unit: Unit, pos: Position): this {
    this.world.deploy(unit, pos)
    return this
  }

  setup(): void {
    /* if (this.players.length < 1)
      throw new Error(
        `Not enough players: ${this.players.length}. (At least one player is required)`
      ) */
  }
}

export class Player {
  color: Color
  name: string = "Player"
  units: PlayingUnit[] = []

  private game

  constructor(options: { color: Color; name: string; game: Game }) {
    if (!options.color)
      throw new Error(
        `Invalid value for player's color: '${options.color}' (color needs to ba a non-empty)`
      )
    this.color = options.color
    this.game = options.game
    this.name = options.name
  }

  createUnit<PropsType extends PlayingUnit>(
    Unit: UnitCtor<PropsType>,
    options?: Omit<PropsType, "player">
  ): Unit & PropsType {
    const unit = new Unit({
      ...options,
      player: this as Player
    } as PropsType)
    this.units.push(unit)
    return unit
  }
}
