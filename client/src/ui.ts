import { io, Socket } from "socket.io-client"

import { Game, Player } from "./game"
import { PlayingUnit, Unit, UnitCtor } from "./units"
import Pixel from "./units/Pixel"
import { Coordinates, Position, World } from "./world"

export type Color = string

export interface Rendering {
  render(): void
}

export class NoRendering implements Rendering {
  render(): void {
    // Sneaky
  }
}

export class GameRenderer implements Rendering {
  private canvas!: HTMLCanvasElement
  private ctx!: CanvasRenderingContext2D
  private game!: Game
  private world!: World

  constructor(
    game: Game,
    options: {
      canvas: HTMLCanvasElement
    }
  ) {
    this.initCanvas(options.canvas)
    this.initWorld(game)
    this.reset()
  }

  reset() {
    this.ctx.imageSmoothingEnabled = false
  }

  start() {
    this.game.setup()
    this.render()
  }

  render = () => {
    //this.world.forEachUnit(this.renderUnit)
    //window.requestAnimationFrame(this.render)
  }

  private onWorldUpdateError = console.error
  private onWorldUpdateComplete = console.info
  private onWorldUpdate = (pos: Position) => {
    const unit = this.world.getUnitAt(pos)
    if (!unit) {
      this.clearPosition(pos)
      return
    }
    this.renderUnit(unit, pos)
  }

  private initWorld(game: Game) {
    this.game = game
    this.world = this.game.world
    this.world.width = this.canvas.width
    this.world.height = this.canvas.height

    this.world.addObserver({
      error: this.onWorldUpdateError,
      next: this.onWorldUpdate,
      complete: this.onWorldUpdateComplete
    })
  }

  private initCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas

    const ctx = this.canvas.getContext("2d")
    if (!ctx)
      throw new Error(
        `Unable to acquire rendering context from canvas: ${this.canvas}`
      )
    this.ctx = ctx
  }

  private clearPosition = (pos: Coordinates): void => {
    this.ctx.clearRect(pos[0], pos[1], 1, 1)
  }

  private renderUnit = (unit: Unit, pos: Coordinates): void => {
    this.ctx.fillStyle = this.getUnitColor(unit)
    this.ctx.fillRect(pos[0], pos[1], 1, 1)
  }

  private getUnitColor(unit: Unit): Color {
    if (unit instanceof PlayingUnit) return unit.player.color
    else return "grey"
  }
}

type KeyCodes = {
  up: string
  right: string
  down: string
  left: string
}

export class PixelController {
  private arrow: KeyListener
  private pixel: Pixel
  private player: Player
  private socket: Socket

  constructor(unit: Pixel, options: { mapping?: KeyCodes } = {}) {
    this.socket = io("ws://localhost:3000")
    this.register()
    this.arrow = new KeyListener({
      mapping: options.mapping || KeyListener.DEFAULT_MAPPING
    })
    this.pixel = unit
    this.player = unit.player
  }

  register() {
    this.socket.once("connect", () =>{
      console.log('register', this.socket)
    this.socket.emit("register", {
      name: this.player.name
    })
    })
  }


  capture = () => {
    const amount: Position = [0, 0]
    if (this.arrow.left) amount[0] -= 1
    if (this.arrow.up) amount[1] -= 1
    if (this.arrow.right) amount[0] += 1
    if (this.arrow.down) amount[1] += 1

    if (amount[0] === 0 && amount[1] === 0) {
      window.requestAnimationFrame(this.capture)
      return
    }

    try {
      this.pixel.moveBy(amount)
      this.socket.emit("pixel.moveBy", {
        player: this.player.name,
        amount
      })
      window.requestAnimationFrame(this.capture)
    } catch (e) {
      const name = this.pixel.player.name
      console.error(e)
      alert(`${name} goes BOOOM!`)
      window.location.reload()
    }
  }
}

export class RemotePixelController {
  private pixel: Pixel
  private player: Player
  private socket: Socket

  constructor(unit: Pixel) {
    this.socket = io("ws://localhost:3000")
    this.register()
    this.socket.on('pixel.moveBy', this.capture)
    this.pixel = unit
    this.player = unit.player
  }

  register() {
    this.socket.once("connect", () =>{
      console.log('register', this.socket)
    this.socket.emit("register", {
      name: this.player.name
    })
    })
  }

  capture = (msg:any) => {
    if(msg.player != this.player.name){
      return
    }
    const amount:Position = msg.amount

    try {
      this.pixel.moveBy(amount)
    } catch (e) {
      const name = this.pixel.player.name
      console.error(e)
      alert(`${name} goes BOOOM!`)
      window.location.reload()
    }
  }
}
export class KeyListener {
  static DEFAULT_MAPPING: KeyCodes = {
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    left: "ArrowLeft"
  }

  up: boolean = false
  right: boolean = false
  down: boolean = false
  left: boolean = false

  private keyCodes: KeyCodes

  constructor(
    options: {
      mapping: KeyCodes
    } = {
      mapping: KeyListener.DEFAULT_MAPPING
    }
  ) {
    this.keyCodes = options.mapping
    window.addEventListener("keydown", this.onKeydown)
    //window.addEventListener("keyup", this.onKeyup)
  }

  onKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case this.keyCodes.up:
        this.reset()
        this.up = true
        return
      case this.keyCodes.right:
        this.reset()
        this.right = true
        return
      case this.keyCodes.down:
        this.reset()
        this.down = true
        return
      case this.keyCodes.left:
        this.reset()
        this.left = true
        return
    }
  }

  onKeyup = (e: KeyboardEvent) => {
    switch (e.code) {
      case this.keyCodes.up:
        this.up = false
        return
      case this.keyCodes.right:
        this.right = false
        return
      case this.keyCodes.down:
        this.down = false
        return
      case this.keyCodes.left:
        this.left = false
        return
    }
  }

  private reset() {
    this.up = false
    this.down = false
    this.left = false
    this.right = false
  }
}
