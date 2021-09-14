import { Point, Cartesian2D } from "../geometry/types"
import Pixel from "../../app/units/Pixel"

import { UserInterface, Color } from "./types"

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

  clearPixel(pixel: Pixel) {
    if (!pixel.position) return
    this.clearPoint(pixel.position.current.coordinates)
  }

  clearPoint(position: Point) {
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(position.x + 0.5, position.y + 0.5, 1, 1)
  }

  onMouseMove = (evt: MouseEvent) => {
    if (!this.onMove) return
    this.onMove(
      this.getPositionFromPointer(new Cartesian2D(evt.offsetX, evt.offsetY))
    )
  }

  private getPositionFromPointer(point: Point) {
    return new Cartesian2D(
      Math.floor((point.x * this.width) / this.canvas.clientWidth),
      Math.floor((point.y * this.height) / this.canvas.clientHeight)
    )
  }
}
