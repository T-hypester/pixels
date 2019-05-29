import { Point } from "../geometry/types"
import Pixel from "../../app/DefaultPixel"

import { UserInterface, Color } from "./types"
import RGBColor from "./RGBColor"

export default class HtmlCanvas implements UserInterface {
  public onMove?: (position: Point) => void

  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  public height: number
  public width: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.height = canvas.height
    this.width = canvas.width

    if (canvas.getContext("2d")) {
      this.ctx = canvas.getContext("2d")!
      this.ctx.translate(-0.5, -0.5)
    } else {
      throw new Error("HtmlCanvas: Unable to acquire rendering context")
    }

    canvas.addEventListener("mousemove", this.onMouseMove)
  }

  setPixel(x: number, y: number, color: Color): void {
    this.ctx.fillStyle = color.toCSS()
    this.ctx.fillRect(x + 0.5, y + 0.5, 1, 1)
  }

  on(event: string, listener: import("./types").EventListener): void {
    throw new Error("Method not implemented.")
  }

  /* drawPixel(pixel: Pixel) {
    if (!pixel.position) return
    this.ctx.fillStyle = (pixel.team && pixel.team.color.toCSS()) || "black"
    this.ctx.fillRect(
      pixel.position.current.x + 0.5,
      pixel.position.current.y + 0.5,
      1,
      1
    )
  } */

  clearPixel(pixel: Pixel) {
    if (!pixel.position) return
    this.clearPosition(pixel.position.current)
  }

  clearPosition(position: Point) {
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(position.x + 0.5, position.y + 0.5, 1, 1)
  }

  onMouseMove = (evt: MouseEvent) => {
    if (!this.onMove) return
    this.onMove(
      this.getPositionFromPointer({
        x: evt.offsetX,
        y: evt.offsetY
      })
    )
  }

  private getPositionFromPointer({ x, y }: Point) {
    return {
      x: Math.floor((x * this.width) / this.canvas.clientWidth),
      y: Math.floor((y * this.height) / this.canvas.clientHeight)
    }
  }
}
