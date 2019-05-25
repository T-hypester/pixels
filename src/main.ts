import Game from "./app/Game";
import HtmlCanvas from "./lib/ui/HtmlCanvas";
import Player from "./app/Player";
import { Point } from "./lib/geometry/types";

const canvas = getCanvas();
if (canvas) initGame(canvas);
else console.error("Error getting canvas");

function getCanvas(): HTMLCanvasElement | null {
  const canvas = document.getElementById("canvas");
  return canvas ? (canvas as HTMLCanvasElement) : null;
}

function initGame(canvas: HTMLCanvasElement): void {
  const ui = new HtmlCanvas(canvas);

  const player = new Player();
  ui.onMove = (pos: Point) => {
    player.position = pos;
  };

  const game = new Game(ui);

  game.putObstacle({ x: 100, y: 100 }, { x: 300, y: 110 });
  game.putObstacle({ x: 200, y: 210 }, { x: 300, y: 215 });
  game.putObstacle({ x: 200, y: 250 }, { x: 300, y: 265 });

  game.addTeam("orange", player);
}
