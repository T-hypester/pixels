import { expect } from "chai"
import { NonPlayingUnit, PlayingUnit, Unit } from "./game"
import { World } from "./world"
import { SomePlayer } from "./__fixtures__/players"

describe("The World", () => {
  it("can deploy an unit in a free spot", () => {
    const world = new World()
    const unit = new NonPlayingUnit()

    world.deploy(unit, [0, 0])

    expect(world.getUnitAt([0, 0])).to.equal(unit)
  })

  it("cannot deploy a unit over another unit", () => {
    const world = new World()
    const unit1 = new PlayingUnit({ player: SomePlayer() })
    const unit2 = new PlayingUnit({ player: SomePlayer() })

    world.deploy(unit1, [0, 0])

    expect(() => {
      world.deploy(unit2, [0, 0])
    }).throw()
    expect(world.getUnitAt([0, 0])).to.equal(unit1)
  })

  it("can move a unit from one place to another", () => {
    const world = new World()
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    world.move([0, 0], [1, 1])

    expect(world.getUnitAt([1, 1])).equal(unit)
    expect(unit.position).eql([1, 1])
    expect(world.getUnitAt([0, 0])).undefined
  })

  it("can move a unit onto itself", () => {
    const world = new World()
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    world.move([0, 0], [0, 0])

    expect(world.getUnitAt([0, 0])).equal(unit)
    expect(unit.position).eql([0, 0])
  })

  it("cannot move a unit if none is there", () => {
    const world = new World()
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    expect(() => {
      world.move([1, 1], [2, 2])
    }).throw()

    expect(world.getUnitAt([0, 0])).to.equal(unit)
    //expect(world.units[2][2]).undefined
  })

  it("cannot move outside north bounds", () => {
    const world = new World()
    const unit = new NonPlayingUnit().deploy(world, [0, 0])

    unit.moveBy([0, -1])

    expect(unit.position).eql([0, 0])
  })

  it("cannot move outside east bounds", () => {
    const world = new World({
      height: 100,
      width: 100,
    })
    const unit = new NonPlayingUnit().deploy(world, [0, 0])

    unit.moveBy([-1, 0])

    expect(unit.position).eql([0, 0])
  })

  it("cannot move outside south bounds", () => {
    const world = new World()
    const unit = new NonPlayingUnit().deploy(world, [0, 99])

    unit.moveBy([0, 1])

    expect(unit.position).eql([0, 99])
  })

  it("cannot move outside west bounds", () => {
    const world = new World({
      height: 100,
      width: 100,
    })
    const unit = new NonPlayingUnit().deploy(world, [99, 0])

    unit.moveBy([1, 0])

    expect(unit.position).eql([99, 0])
  })

  it("can visit deployed units and positions", () => {
    const world = new World()
    const unit = new PlayingUnit({ player: SomePlayer() })

    world.deploy(unit, [0, 0])

    const units: any = []
    world.forEachUnit((unit, position) => {
      units.push({
        unit,
        position,
      })
    })

    expect(units).length(1)
    expect(units[0]).property("unit", unit)
    expect(units[0].position).eql([0, 0])
  })
})
