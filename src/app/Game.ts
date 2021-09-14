import { UserInterface } from "../lib/ui/types"
import World from "./World"
import Player from "./Player"
import Pixel from "./units/Pixel"
import { Game, Team } from "./types"
import { Point, Cartesian2D } from "../lib/geometry/types"
import PixelRenderer from "./PixelRenderer"

const TEST_PIXEL_N = 1

type Teams = {
  [team: string]: Player
}

export default class DefaultGame implements Game {
  private ui: UserInterface
  private unitRenderer: PixelRenderer
  private pixels: Array<Pixel> = []

  private teams: Teams = {}
  private world: World

  constructor(ui: UserInterface) {
    this.ui = ui
    this.unitRenderer = new PixelRenderer(ui)
    this.world = new World(this.ui.height, this.ui.width)

    requestAnimationFrame(this.renderFrame)

    console.log("pixel!")
  }

  addTeam(team: Team) {
    if (!team.player) return
    this.teams[team.color.toCSS()] = team.player

    for (let i = 0; i < TEST_PIXEL_N; i++) {
      const pos = this.world.getPosition(new Cartesian2D(i, i))
      if (!pos.available || pos.units.length > 0) continue
      const pxl = new Pixel(this.world)
      pxl.team = team
      pxl.health = Math.min(Math.random() + 0.5, 1)
      this.world.deployUnit(pxl, new Cartesian2D(i, i))
      this.pixels.push(pxl)
    }
  }

  putObstacle(a: Point, b: Point) {
    for (let x = a.x; x < b.x; x++)
      for (let y = a.y; y < b.y; y++) {
        const obstacle = new Pixel(this.world)
        this.world.deployUnit(obstacle, new Cartesian2D(x, y))
        this.world.getPosition(new Cartesian2D(x, y)).available = false
        this.pixels.push(obstacle)
      }
  }

  private renderFrame = () => {
    for (const pxl of this.pixels) {
      this.tryPixelMove(pxl)
      this.unitRenderer.render(pxl)
    }

    requestAnimationFrame(this.renderFrame)
  }

  private tryPixelMove(pxl: Pixel): boolean {
    if (!pxl.position) return false

    const player = pxl.player
    if (!player || !player.position) return false

    let playerPosition
    try {
      playerPosition = this.world.getPosition(player.position)
    } catch {
      return false
    }

    try {
      const prevPos = this.world.getPosition(pxl.position.current.coordinates)
      if (pxl.moveToward(playerPosition)) {
        this.world.moveUnit(pxl, pxl.position.current.coordinates)
        this.ui.clearPoint(prevPos.coordinates)
      }
    } catch {
      return false
    }

    return true
  }
}
