import { expect } from "chai"
import { PlayingUnit, Unit } from "./game"
import { World } from "./world"
import { SomePlayer } from "./__fixtures__/players"

describe("A deployed Unit", () => {
  let world = new World()
  let unit: Unit

  beforeEach(() => {
    unit = SomePlayer().createUnit(PlayingUnit)
    world = new World().deploy(unit, [0, 0])
  })

  it("has a position", () => {
    expect(unit.position).not.undefined
    expect(world.getUnitAt([0, 0])).to.eql(unit)
  })

  it("can move by a certain amount", () => {
    unit.moveBy([1, 1])

    expect(unit.position).eql([1, 1])
    expect(world.getUnitAt([0, 0])).undefined
  })
})
