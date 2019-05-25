import { Point } from "../../types/geometry";
import Pixel from "../../app/DefaultPixel";

import { UserInterface } from "./types";

export default class HtmlCanvas implements UserInterface {
  public onMove: (position: Point) => void;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  public height: number;
  public width: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.height = canvas.height;
    this.width = canvas.width;
    this.onMove = () => undefined;
    if (canvas.getContext("2d")) {
      this.ctx = canvas.getContext("2d")!;
    } else {
      throw new Error("HtmlCanvas: Unable to acquire rendering context");
    }

    canvas.addEventListener("mousemove", this.onMouseMove);
  }

  drawPixel(pixel: Pixel) {
    this.ctx.fillStyle = pixel.team || 'black';
    this.ctx.fillRect(pixel.position.x, pixel.position.y, 1, 1);
  }

  clearPixel(pixel: Pixel) {
    this.clearPosition(pixel.position);
  }

  clearPosition(position: Point) {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(position.x, position.y, 1, 1);
  }

  onMouseMove = (evt: MouseEvent) => {
    this.onMove(
      this.getPositionFromPointer({
        x: evt.offsetX,
        y: evt.offsetY
      })
    );
  };

  private getPositionFromPointer({ x, y }: Point) {
    return {
      x: Math.floor((x * this.width) / this.canvas.clientWidth),
      y: Math.floor((y * this.height) / this.canvas.clientHeight)
    };
  }
}
