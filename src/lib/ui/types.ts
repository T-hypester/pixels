import { Point } from "../geometry/types";
import Pixel from "../../app/DefaultPixel";

export interface UserInterface {
  width: number;
  height: number;

  clearPosition(position: Point): void;
  clearPixel(pixel: Pixel): void;
  drawPixel(pixel: Pixel): void;
  onMove?: (position: Point) => void;
}
