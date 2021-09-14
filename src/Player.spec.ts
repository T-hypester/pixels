import { expect } from "chai"
import { Game, Player, PlayingUnit } from "./game"

import { SomePlayer } from "./__fixtures__/players"

describe("A Player", () => {
  it("needs to have a color", () => {
    expect(() => new Player({ color: "", game: new Game() })).throw()
  })

  it("can have one or more units", () => {
    const player = SomePlayer()
    player.createUnit(PlayingUnit)

    expect(player.units).length(1)
    expect(player.units[0]).instanceOf(PlayingUnit)
  })
})
