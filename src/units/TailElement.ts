import { PlayingUnit } from "."
import { Player } from "../game"

export default class TailElement extends PlayingUnit {
  decay: number = 0.03

  constructor(options: { player: Player }) {
    super(options)

    this.render()
  }

  render() {
    this.health -= this.decay
    if (this.health < 0.1) this.health = 0
    if (this.health <= 0 && this.isDeployed()) {
      this.world!.remove(this.position)
      return
    }

    window.requestAnimationFrame(() => this.render())
  }
}
