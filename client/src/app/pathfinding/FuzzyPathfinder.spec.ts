import { expect } from "chai"
import DefaultWorld from "../World"
import FuzzyPathfinder from "./FuzzyPathfinder"
import Pixel from "../units/Pixel"
import { Cartesian2D } from "../../lib/geometry/types"
import { Pathfinder } from "./types"
import { World } from "../types"

describe("Fuzzy pathfinder", function () {
  let finder: Pathfinder<Cartesian2D>
  let world: World<Cartesian2D>

  beforeEach(function () {
    world = new DefaultWorld(10, 10)
    finder = new FuzzyPathfinder(world)
  })

  it("1:(1,1), 2:(2,2), P:(3,3) -> 1:(2,1)", function () {
    world.deployUnit(new Pixel(world), new Cartesian2D(2, 2))
    const point = finder.findNextPosition(
      new Cartesian2D(1, 1),
      new Cartesian2D(3, 3)
    )
    expect(point.x).to.eql(1)
    expect(point.y).to.eql(2)
  })

  it("1:(1,1), 2:(2,2), 3:(1,2), P:(3,3) -> 1:(1,2)", function () {
    world.deployUnit(new Pixel(world), new Cartesian2D(1, 1))
    world.deployUnit(new Pixel(world), new Cartesian2D(2, 2))
    const point = finder.findNextPosition(
      new Cartesian2D(1, 1),
      new Cartesian2D(3, 3)
    )
    expect(point.x).to.eql(1)
    expect(point.y).to.eql(2)
  })

  it("1:(1,1), 2:(2,1), P:(3,1) -> 1:(1,1)", function () {
    world.deployUnit(new Pixel(world), new Cartesian2D(2, 1))
    const point = finder.findNextPosition(
      new Cartesian2D(1, 1),
      new Cartesian2D(3, 1)
    )
    expect(point.x).to.eql(1)
    expect(point.y).to.eql(1)
  })
})
