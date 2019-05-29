import { expect } from "chai"
import { mock } from "sinon"

import { Point } from "../lib/geometry/types"

import PixelRenderer from "./PixelRenderer"
import { Position, Unit, Team } from "./types"
import { UserInterface } from "../lib/ui/types"
import DefaultWorld from "./World"
import RGBColor from "../lib/ui/RGBColor"
import SimpleTeam from "./SimpleTeam"

describe("PixelRenderer", function() {
  beforeEach(function() {
    this.world = new DefaultWorld(100, 100)
    this.ui = new DummyCanvas()
    this.renderer = new PixelRenderer(this.ui)
  })

  it("draws units if they have been deployed inside a world", function() {
    const pxl = new SimplePixel()
    this.world.deployUnit(pxl, { x: 10, y: 10 })

    const m = mock(this.ui)
    m.expects("setPixel").once()

    this.renderer.render(pxl)

    m.verify()
  })

  it("draws pixels with team's color", function() {
    const pxl = new SimplePixel()
    this.world.deployUnit(pxl, { x: 10, y: 10 })

    pxl.team = new SimpleTeam(new RGBColor(255, 0, 0))

    const m = mock(this.ui)
    m.expects("setPixel")
      .once()
      .withArgs(10, 10, new RGBColor(255, 0, 0))

    this.renderer.render(pxl)

    m.verify()
  })

  it("draws pixel with color proportional to pixel's health", function() {
    const pxl = new SimplePixel()
    this.world.deployUnit(pxl, { x: 10, y: 10 })

    pxl.team = new SimpleTeam(new RGBColor(255, 0, 0))
    pxl.health = 0.5

    const m = mock(this.ui)
    m.expects("setPixel")
      .once()
      .withArgs(10, 10, new RGBColor(127, 0, 0))

    this.renderer.render(pxl)

    m.verify()
  })
})

class SimplePixel implements Unit {
  health: number = 1
  position?: Position<any>
  team?: Team

  moveToward<C extends Point>(position: C): void {
    throw new Error("Method not implemented.")
  }
}

class DummyCanvas implements UserInterface {
  width: number = 100
  height: number = 100

  setPixel(x: number, y: number, color: RGBColor): void {
    throw new Error("Method not implemented.")
  }
  clearPosition(position: Point): void {
    throw new Error("Method not implemented.")
  }
  clearPixel(pixel: import("./DefaultPixel").default): void {
    throw new Error("Method not implemented.")
  }
  onMove?: ((position: Point) => void) | undefined
  on(event: string, listener: import("../lib/ui/types").EventListener): void {
    throw new Error("Method not implemented.")
  }
}
