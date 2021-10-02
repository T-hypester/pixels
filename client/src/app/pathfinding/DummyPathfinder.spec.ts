import { expect } from "chai"
import { Cartesian2D } from "../../lib/geometry/types"

import DefaultWorld from "../World"

import DummyPathfinder from "./DummyPathfinder"
import { Pathfinder } from "./types"

describe("Dummy pathfinder", function () {
  let pathfinder: Pathfinder<Cartesian2D>

  beforeEach(function () {
    const world = new DefaultWorld(30, 30)
    pathfinder = new DummyPathfinder(world)
  })

  it("Moving from (10,10) toward (20,20) gives (11,11)", function () {
    const pos = pathfinder.findNextPosition(
      new Cartesian2D(10, 10),
      new Cartesian2D(20, 20)
    )
    expect(pos).to.eql(new Cartesian2D(11, 11))
  })

  it("Moving from (10,10) toward (0,20) gives (9,11)", function () {
    const pos = pathfinder.findNextPosition(
      new Cartesian2D(10, 10),
      new Cartesian2D(0, 20)
    )
    expect(pos).to.eql(new Cartesian2D(9, 11))
  })

  it("Moving from (10,10) toward (0,0) gives (9,9)", function () {
    const pos = pathfinder.findNextPosition(
      new Cartesian2D(10, 10),
      new Cartesian2D(0, 0)
    )
    expect(pos).to.eql(new Cartesian2D(9, 9))
  })

  it("Moving from (10,10) toward (20,0) gives (11,9)", function () {
    const pos = pathfinder.findNextPosition(
      new Cartesian2D(10, 10),
      new Cartesian2D(20, 0)
    )
    expect(pos).to.eql(new Cartesian2D(11, 9))
  })
})
