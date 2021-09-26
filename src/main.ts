import { Game, NonPlayingUnit, PlayingUnit } from "./game"
import { GameRenderer, UnitController } from "./ui"
import { Position } from "./world"

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

  const redPlayer = game.addPlayer({ color: "red" })
  const redPixel = redPlayer.createUnit(PlayingUnit)
  game.deploy(redPixel, randomPosition(game))
  const redInput = new UnitController(redPixel)

  const blackPlayer = game.addPlayer({ color: "black" })
  const blackPixel = blackPlayer.createUnit(PlayingUnit)
  game.deploy(blackPixel, randomPosition(game))
  const blackInput = new UnitController(blackPixel, {
    mapping: {
      up: "KeyW",
      right: "KeyD",
      down: "KeyS",
      left: "KeyA"
    }
  })

  for (let i = 0; i < 10; ) {
    const pos: Position = randomPosition(game)
    if (game.world.getUnitAt(pos)) continue
    game.world.deploy(new NonPlayingUnit(), pos)
    i++
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
