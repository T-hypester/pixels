import Game from "./app/Game";
import HtmlCanvas from "./lib/ui/HtmlCanvas";
import Player from "./app/Player";
import { Point } from "./types/geometry";

const canvas = getCanvas();
if (canvas) initGame(canvas);
else console.error("Error getting canvas");

function getCanvas(): HTMLCanvasElement | null {
  const canvas = document.getElementById("canvas");
  return canvas ? (canvas as HTMLCanvasElement) : null;
}

function initGame(canvas: HTMLCanvasElement): void {
  const ui = new HtmlCanvas(canvas);

  const player = new Player('blue');
  ui.onMove = (pos: Point) => {
    player.position = pos;
  };

  const game = new Game(ui);
  game.addTeam(player.team, player);
}
