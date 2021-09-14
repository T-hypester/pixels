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
    canvas,
  })

  const redPlayer = game.createPlayer({ color: "red" })
  const redPixel = redPlayer.createUnit(PlayingUnit).deploy(game.world, [0, 0])
  const redInput = new UnitController({ unit: redPixel })

  const blackPlayer = game.createPlayer({ color: "black" })
  const blackPixel = blackPlayer
    .createUnit(PlayingUnit)
    .deploy(game.world, [2, 2])
  const blackInput = new UnitController({
    unit: blackPixel,
    mapping: {
      up: "KeyW",
      right: "KeyD",
      down: "KeyS",
      left: "KeyA",
    },
  })

  for (let i = 0; i < 10; ) {
    const pos: Position = [
      Math.random() * game.world.width,
      Math.random() * game.world.height,
    ]
    if (game.world.getUnitAt(pos)) continue
    new NonPlayingUnit().deploy(game.world, pos)
    i++
  }

  rendering.start()
  redInput.capture()
  blackInput.capture()
}
