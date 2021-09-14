import { Color } from "./ui"
import { Position, World } from "./world"

export type Health = number

export interface UnitCtor<PropsType extends object = any> {
  new (options: PropsType): Unit & PropsType
}

export class Game {
  players: Player[] = []
  world: World

  constructor() {
    this.world = new World()
  }

  createPlayer(options: { color: Color }): Player {
    if (this.players.find((p) => p.color === options.color))
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
    if (this.players.length < 1)
      throw new Error(
        `Not enough players: ${this.players.length}. (At least one player is required)`
      )
  }
}

export class Player {
  color: Color
  units: PlayingUnit[] = []

  private game

  constructor(options: { color: Color; game: Game }) {
    if (!options.color)
      throw new Error(
        `Invalid value for player's color: '${options.color}' (color needs to ba a non-empty)`
      )
    this.color = options.color
    this.game = options.game
  }

  createUnit<PropsType extends { player: Player }>(
    Unit: UnitCtor<PropsType>,
    options?: Omit<PropsType, "player">
  ): Unit & PropsType {
    const unit = new Unit({
      ...options,
      player: this as Player,
    } as PropsType)
    this.units.push(unit)
    return unit
  }
}

export interface DeplyedUnit {
  position: Position
  world: World
}

export class Unit {
  health: Health = 1
  position?: Position
  world?: World

  isDeployed(): this is DeplyedUnit {
    return !!this.world && !!this.position
  }

  deploy(world: World, position: Position): this {
    this.world = world
    this.world.deploy(this, position)

    return this
  }

  moveBy(amount: Position): this {
    if (!this.isDeployed()) throw new Error(`Unit is not yet deployed`)

    const newPosition: Position = [
      this.position[0] + amount[0],
      this.position[1] + amount[1],
    ]
    this.world.move(this.position, newPosition)

    return this
  }
}

export class PlayingUnit extends Unit {
  player: Player

  constructor(options: { player: Player }) {
    super()

    this.player = options.player
  }
}

export class NonPlayingUnit extends Unit {}
