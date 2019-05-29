import { Point } from "../geometry/types"
import Pixel from "../../app/DefaultPixel"
import Player from "../../app/Player"

export interface Color {
  mixWith(color: Color, ratio: number): Color
  toCSS(): string
}

export type EventListener = {
  (...args: any[]): void
}

export interface EventEmitter {
  on(event: string, listener: EventListener): void
}

export interface UserInterface extends EventEmitter {
  width: number
  height: number

  setPixel(x: number, y: number, color: Color): void
  clearPosition(position: Point): void
  clearPixel(pixel: Pixel): void
  //drawPixel(pixel: Pixel): void
  onMove?: (position: Point) => void
}

export interface PlayerInputMapping {
  player: Player
  ui: UserInterface
}
