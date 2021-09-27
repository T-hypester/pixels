import { DeployedUnit, Health, PlayingUnit, Unit } from "."

import { Position, World } from "../world"
import TraceElement from "./TraceElement"

export default class Pixel extends PlayingUnit {
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

    if (
      Math.abs(newPosition[0] - oldPosition[0]) +
        Math.abs(newPosition[1] - oldPosition[1]) !=
      0
    )
      this.leaveTrace(oldPosition)

    return this
  }

  private leaveTrace(pos: Position) {
    if (!this.isDeployed()) throw new Error(`Unit is not deployed anywhere`)

    const trace = new TraceElement({ player: this.player })
    this.world.deploy(trace, pos)
  }
}
