import RGBColor from "../lib/ui/RGBColor"
import { UserInterface } from "../lib/ui/types"
import { Unit } from "./types"

export default class PixelRenderer {
  private ui: UserInterface

  constructor(ui: UserInterface) {
    this.ui = ui
  }

  render(unit: Unit) {
    if (!unit.position) return

    const team = unit.team
    const teamColor = team ? team.color : new RGBColor(0, 0, 0)
    const color = teamColor.mixWith(new RGBColor(0, 0, 0), 1 - unit.health)
    const pos = unit.position.current
    this.ui.setPixel(pos.x, pos.y, color)
  }
}
