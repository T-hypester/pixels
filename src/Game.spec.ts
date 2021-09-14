import { expect } from "chai"
import { HeadlessGame } from "./__fixtures__/game"
import { RedPlayer, SomePlayer } from "./__fixtures__/players"

describe("A Game", () => {
  it("has one or more players", () => {
    const game = HeadlessGame()
    game.createPlayer(SomePlayer())

    expect(game.players).length(1)
  })

  it("cannot add two players with the same color", () => {
    const game = HeadlessGame()
    game.createPlayer(RedPlayer())

    expect(() => {
      game.createPlayer(RedPlayer())
    }).throw()
  })

  it("can start when there is at least one player", () => {
    const game = HeadlessGame()
    const player = SomePlayer()

    expect(() => {
      game.setup()
    }).throw()

    game.createPlayer(player)

    expect(() => {
      game.setup()
    }).not.throw()
  })
})
