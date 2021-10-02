import { Player } from "../game"
import { Position, World } from "../world"

export type Health = number

export interface UnitCtor<PropsType extends object = any> {
  new (options: PropsType): Unit & PropsType
}

export interface DeployedUnit {
  position: Position
  world: World
}

export interface Unit {
  position?: Position

  addToWorld(world: World): this
}

export abstract class AbstractUnit implements Unit {
  health: Health = 1
  position?: Position
  world?: World

  addToWorld(world: World): this {
    this.world = world

    return this
  }

  moveBy(amount: Position): this {
    if (!this.isDeployed()) throw new Error(`Unit is not deployed anywhere`)

    const oldPosition: Position = this.position
    const newPosition: Position = [
      this.position[0] + amount[0],
      this.position[1] + amount[1]
    ]
    this.world.move(oldPosition, newPosition)

    return this
  }

  protected isDeployed(): this is DeployedUnit {
    return !!this.world && !!this.position
  }
}

export class PlayingUnit extends AbstractUnit {
  player: Player

  constructor(options: { player: Player }) {
    super()

    this.player = options.player
  }
}

export class NonPlayingUnit extends AbstractUnit {}
