import { Game } from "./game"
import { GameRenderer, PixelController } from "./ui"
import { NonPlayingUnit, PlayingUnit } from "./units"
import Pixel from "./units/Pixel"
import { Position } from "./world"
const asteroidi:boolean = false

const canvas = getCanvas()
if (canvas) initGame(canvas)
else console.error("Error getting canvas")

function getCanvas(): HTMLCanvasElement | null {
  const canvas = document.getElementById("canvas")
  return canvas ? (canvas as HTMLCanvasElement) : null
}

function initGame(canvas: HTMLCanvasElement): void {
  const game = new Game()
  const rendering = new GameRenderer(game, {
    canvas
  })

  const redPlayer = game.addPlayer({ color: "red", name: "Red" })
  const redPixel = redPlayer.createUnit<Pixel>(Pixel)
  game.deploy(redPixel, randomPosition(game))
  const redInput = new PixelController(redPixel)

  const blackPlayer = game.addPlayer({ color: "black", name: "Black" })
  const blackPixel = blackPlayer.createUnit<Pixel>(Pixel)
  game.deploy(blackPixel, randomPosition(game))
  const blackInput = new PixelController(blackPixel, {
    mapping: {
      up: "KeyW",
      right: "KeyD",
      down: "KeyS",
      left: "KeyA"
    }
  })

  if (asteroidi == true){
    for (let i = 0; i < 10; ) {
      const pos: Position = randomPosition(game)
      if (game.world.getUnitAt(pos)) continue
      game.world.deploy(new NonPlayingUnit(), pos)
      i++
    }
  }

  rendering.start()
  redInput.capture()
  blackInput.capture()
}

function randomPosition(game: Game): Position {
  return [
    Math.round(Math.random() * game.world.width),
    Math.round(Math.random() * game.world.height)
  ]
}
