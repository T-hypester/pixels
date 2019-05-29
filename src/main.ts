import Game from "./app/Game";
import HtmlCanvas from "./lib/ui/HtmlCanvas";
import Player from "./app/Player";
import MouseInputMapping from "./lib/ui/MouseInputMapping";
import SimpleTeam from "./app/SimpleTeam";
import RGBColor from "./lib/ui/RGBColor";

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
  new MouseInputMapping(player, ui);

  const game = new Game(ui);

  game.putObstacle({ x: 100, y: 100 }, { x: 300, y: 110 });
  game.putObstacle({ x: 200, y: 210 }, { x: 300, y: 215 });
  game.putObstacle({ x: 200, y: 250 }, { x: 300, y: 265 });

  const team = new SimpleTeam(new RGBColor(255,150,55))
  game.addTeam(team, player);
}
