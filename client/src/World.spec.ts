import { expect } from "chai"
import { Observer } from "rxjs"
import { NonPlayingUnit, PlayingUnit } from "./units"

import { Position, World } from "./world"
import { SomePlayer } from "./__fixtures__/players"

describe("Given the World", () => {
  it("I can deploy a unit in a free spot", () => {
    const world = new World()
    const unit = new NonPlayingUnit()

    world.deploy(unit, [0, 0])

    expect(world.getUnitAt([0, 0])).to.equal(unit)
  })

  it("I cannot deploy a unit over another unit", () => {
    const world = new World()
    const unit1 = new PlayingUnit({ player: SomePlayer() })
    const unit2 = new PlayingUnit({ player: SomePlayer() })

    world.deploy(unit1, [0, 0])

    expect(() => {
      world.deploy(unit2, [0, 0])
    }).throw()
    expect(world.getUnitAt([0, 0])).to.equal(unit1)
  })

  it("I can move a unit from one place to another", () => {
    const world = new World()
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    world.move([0, 0], [1, 1])

    expect(world.getUnitAt([1, 1])).equal(unit)
    expect(unit.position).eql([1, 1])
    expect(world.getUnitAt([0, 0])).undefined
  })

  it("I can move a unit onto itself", () => {
    const world = new World()
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    world.move([0, 0], [0, 0])

    expect(world.getUnitAt([0, 0])).equal(unit)
    expect(unit.position).eql([0, 0])
  })

  it("I cannot move a unit if none is there", () => {
    const world = new World()
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    expect(() => {
      world.move([1, 1], [2, 2])
    }).throw()

    expect(world.getUnitAt([0, 0])).to.equal(unit)
    //expect(world.units[2][2]).undefined
  })

  it("I can visit deployed units and positions", () => {
    const world = new World()
    const unit = new PlayingUnit({ player: SomePlayer() })

    world.deploy(unit, [0, 0])

    const units: any = []
    world.forEachUnit((unit, position) => {
      units.push({
        unit,
        position
      })
    })

    expect(units).length(1)
    expect(units[0]).property("unit", unit)
    expect(units[0].position).eql([0, 0])
  })
})

describe("I cannot move outsive World boundaries", () => {
  it("north", () => {
    const unit = new NonPlayingUnit()
    new World().deploy(unit, [0, 0])

    unit.moveBy([0, -1])

    expect(unit.position).eql([0, 0])
  })

  it("east", () => {
    const unit = new NonPlayingUnit()
    new World({
      height: 100,
      width: 100
    }).deploy(unit, [0, 0])

    unit.moveBy([-1, 0])

    expect(unit.position).eql([0, 0])
  })

  it("south", () => {
    const unit = new NonPlayingUnit()
    new World().deploy(unit, [0, 99])

    unit.moveBy([0, 1])

    expect(unit.position).eql([0, 99])
  })

  it("west", () => {
    const unit = new NonPlayingUnit()
    const world = new World({
      height: 100,
      width: 100
    }).deploy(unit, [99, 0])

    unit.moveBy([1, 0])

    expect(unit.position).eql([99, 0])
  })
})

describe("Observing the World", () => {
  let world: World
  let updates: Position[]
  let observer: Observer<Position> & {
    onNext(pos: Position): void
  }

  beforeEach(() => {
    world = new World()
    updates = []
    observer = {
      error: console.error,
      next(position: Position) {
        this.onNext(position)
      },
      complete() {},
      onNext() {}
    }

    world.addObserver(observer)
  })

  it("can get updates when a unit is deplyed", done => {
    const unit = new NonPlayingUnit()

    observer.onNext = pos => {
      updates.push(pos)
      if (updates.length >= 1) assert()
    }

    world.deploy(unit, [0, 0])

    function assert() {
      expect(updates).length(1)
      expect(updates[0]).eql([0, 0])
      done()
    }
  })

  it("can get updates when I move a unit", done => {
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    observer.onNext = pos => {
      updates.push(pos)
      if (updates.length >= 2) assert()
    }

    world.move([0, 0], [1, 1])

    function assert() {
      expect(updates).length(2)
      expect(updates[0]).eql([0, 0])
      expect(updates[1]).eql([1, 1])
      done()
    }
  })

  it("can can get updates when a unit moves", done => {
    const unit = new NonPlayingUnit()
    world.deploy(unit, [0, 0])

    observer.onNext = pos => {
      updates.push(pos)
      if (updates.length >= 2) assert()
    }

    unit.moveBy([1, 1])

    function assert() {
      expect(updates).length(2)
      expect(updates[0]).eql([0, 0])
      expect(updates[1]).eql([1, 1])
      done()
    }
  })
})
