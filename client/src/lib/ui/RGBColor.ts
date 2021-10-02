import { Color } from "./types"

export default class RGBColor implements Color {
  r: number
  g: number
  b: number

  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this.r = r
    this.g = g
    this.b = b
  }

  mixWith(color: RGBColor, ratio: number): Color {
    const r = Math.floor((1 - ratio) * this.r + ratio * color.r)
    const g = Math.floor((1 - ratio) * this.g + ratio * color.g)
    const b = Math.floor((1 - ratio) * this.b + ratio * color.b)
    return new RGBColor(r, g, b)
  }

  toCSS() {
    return `rgb(${this.r},${this.g},${this.b})`
  }
}
