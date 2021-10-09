import { Game } from "./game"
import { GameRenderer, LocalPixelController, RemotePixelController } from "./ui"
import { NonPlayingUnit, PlayingUnit } from "./units"
import Pixel from "./units/Pixel"
import { Position } from "./world"
import { io, Socket } from "socket.io-client"

const asteroidi:boolean = false
let game:Game

const socket = io("ws://localhost:3000")
socket.on('register', registerRemotePlayer)
document.getElementById("form")?.addEventListener("submit", registerLocalPlayer)

const canvas = getCanvas()
if (canvas) game = initGame(canvas)
else console.error("Error getting canvas")

function getCanvas(): HTMLCanvasElement | null {
  const canvas = document.getElementById("canvas")
  return canvas ? (canvas as HTMLCanvasElement) : null
}

function registerLocalPlayer(evt:SubmitEvent){
  evt.preventDefault()
  const name = evt.target?.elements.name.value
  if((name == "") || (name == "undefined")){
    return
  }
  const redPlayer = game.addPlayer({ color: "red", name: name })
  const redPixel = redPlayer.createUnit<Pixel>(Pixel)
  game.deploy(redPixel, randomPosition(game))
  const redInput = new LocalPixelController(redPixel, {socket})
  redInput.capture()
}

function registerRemotePlayer(msg:any){
  console.log(msg)
  const blackPlayer = game.addPlayer({ color: "black", name: msg.name})
  const blackPixel = blackPlayer.createUnit<Pixel>(Pixel)
  game.deploy(blackPixel, msg.pos)
  const blackInput = new RemotePixelController(blackPixel, {socket})
}

function initGame(canvas: HTMLCanvasElement): Game {
  const game = new Game()
  const rendering = new GameRenderer(game, {
    canvas
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
  return game
}

function randomPosition(game: Game): Position {
  return [
    Math.round(Math.random() * game.world.width),
    Math.round(Math.random() * game.world.height)
  ]
}
