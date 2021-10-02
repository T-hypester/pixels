import { expect } from "chai"
import { Game, Player } from "./game"
import { PlayingUnit } from "./units"

import { SomePlayer } from "./__fixtures__/players"

describe("A Player", () => {
  it("has a name", () => {
    const player = SomePlayer()

    expect(player).property('name')
  })

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
