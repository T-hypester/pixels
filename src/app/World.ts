import Pixel from "./DefaultPixel";
import { Point } from "../types/geometry";

export default class World {
  private height: number;
  private width: number;

  private pixels: Array<Array<Pixel | null>>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.pixels = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      this.pixels[x] = new Array(this.height);
    }
  }

  isEmptyAt(point: Point): boolean {
    if (point.x < 0 || point.y < 0) return false;
    if (point.x >= this.width || point.y >= this.height) return false;
    if (this.pixels[point.x][point.y]) return false;
    return true;
  }

  setPixelAt(point: Point, pixel: Pixel | null): boolean {
    this.pixels[point.x][point.y] = pixel;
    return true;
  }
}
