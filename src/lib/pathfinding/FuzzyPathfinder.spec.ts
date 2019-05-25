import { expect } from "chai";
import DefaultWorld from "../../app/World";
import FuzzyPathfinder from "./FuzzyPathfinder";
import Pixel from "../../app/DefaultPixel";

describe("Fuzzy pathfinder", function() {
  beforeEach(function() {
    this.world = new DefaultWorld(10, 10);
    this.finder = new FuzzyPathfinder(this.world);
  });

  it("1:(1,1), 2:(2,2), P:(3,3) -> 1:(2,1)", function() {
    this.world.deployUnit(new Pixel(this.world), { x: 2, y: 2 });
    const pos = this.finder.getNextPosition({ x: 1, y: 1 }, { x: 3, y: 3 });
    expect(pos).to.eql({
      x: 2,
      y: 1
    });
  });

  it("1:(1,1), 2:(2,2), 3:(1,2), P:(3,3) -> 1:(2,1)", function() {
    this.world.deployUnit(new Pixel(this.world), { x: 2, y: 2 });
    this.world.deployUnit(new Pixel(this.world), { x: 1, y: 2 });
    const pos = this.finder.getNextPosition({ x: 1, y: 1 }, { x: 3, y: 3 });
    expect(pos).to.eql({
      x: 2,
      y: 1
    });
  });

  it("1:(1,1), 2:(2,1), P:(3,1) -> 1:(2,2)", function() {
    this.world.deployUnit(new Pixel(this.world), { x: 1, y: 1 });
    this.world.deployUnit(new Pixel(this.world), { x: 2, y: 1 });
    const pos = this.finder.getNextPosition({ x: 1, y: 1 }, { x: 3, y: 1 });
    expect(pos).to.eql({
      x: 2,
      y: 2
    });
  });
});
