import RGBColor from "../lib/ui/RGBColor"
import { UserInterface } from "../lib/ui/types"
import { PlayingUnit, MortalUnit } from "./units/types";

export default class PixelRenderer {
  private ui: UserInterface

  constructor(ui: UserInterface) {
    this.ui = ui
  }

  render(unit: PlayingUnit & MortalUnit) {
    if (!unit.position) return

    const team = unit.team
    const teamColor = team ? team.color : new RGBColor(0, 0, 0)
    const color = teamColor.mixWith(new RGBColor(0, 0, 0), 1 - unit.health)
    const pos = unit.position.current.coordinates
    this.ui.setPixel(pos.x, pos.y, color)
  }
}
