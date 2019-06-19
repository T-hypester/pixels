import { expect } from "chai"
import DefaultWorld from "../World"
import FuzzyPathfinder from "./FuzzyPathfinder"
import Pixel from "../units/Pixel"
import { Cartesian2D } from "../../lib/geometry/types"

describe("Fuzzy pathfinder", function() {
  beforeEach(function() {
    this.world = new DefaultWorld(10, 10)
    this.finder = new FuzzyPathfinder(this.world)
  })

  it("1:(1,1), 2:(2,2), P:(3,3) -> 1:(2,1)", function() {
    this.world.deployUnit(new Pixel(this.world), new Cartesian2D(2,2))
    const pos = this.finder.findNextPosition(
      this.world.getPosition(new Cartesian2D(1,1)), 
      this.world.getPosition(new Cartesian2D(3,3))
    )
    expect(pos.coordinates.x).to.eql(2)
    expect(pos.coordinates.y).to.eql(1)
  })

  it("1:(1,1), 2:(2,2), 3:(1,2), P:(3,3) -> 1:(2,1)", function() {
    this.world.deployUnit(new Pixel(this.world), new Cartesian2D(2,2))
    this.world.deployUnit(new Pixel(this.world), new Cartesian2D(1,2))
    const pos = this.finder.findNextPosition(
      this.world.getPosition(new Cartesian2D(1,1)), 
      this.world.getPosition(new Cartesian2D(3,3))
    )
    expect(pos.coordinates.x).to.eql(2)
    expect(pos.coordinates.y).to.eql(1)
  })

  it("1:(1,1), 2:(2,1), P:(3,1) -> 1:(2,2)", function() {
    this.world.deployUnit(new Pixel(this.world), new Cartesian2D(2, 1))
    const pos = this.finder.findNextPosition(
      this.world.getPosition(new Cartesian2D(1, 1)),
      this.world.getPosition(new Cartesian2D(3, 1))
    )
    expect(pos.coordinates.x).to.eql(2)
    expect(pos.coordinates.y).to.eql(2)
  })
})
