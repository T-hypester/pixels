import { PlayingUnit } from "."
import { Player } from "../game"

export default class TraceElement extends PlayingUnit {
  constructor(options: { player: Player }) {
    super(options)

    this.render()
  }

  render() {
    this.health -= 0.01
    if (this.health < 0.1) this.health = 0
    if (this.health <= 0 && this.isDeployed()) {
      this.world!.remove(this.position)
      return
    }

    window.requestAnimationFrame(() => this.render())
  }
}
