import { expect } from "chai";

import FuzzyPathfinder from "../../src/app/pathfinding/FuzzyPathfinder";
import World from "../../src/app/World";
import Pixel from "../../src/app/DefaultPixel";

describe("Fuzzy pathfinder", function() {
  beforeEach(function() {
    this.world = new World(10, 10);
    this.finder = new FuzzyPathfinder(this.world);
  });

  it("1:(1,1), 2:(2,2), P:(3,3) -> 1:(2,1)", function() {
    this.world.setPixelAt({ x: 2, y: 2 }, new Pixel(this.world, this.finder));
    const pos = this.finder.getNewPosition({ x: 1, y: 1 }, { x: 3, y: 3 });
    expect(pos).to.eql({
      x: 2,
      y: 1
    });
  });

  it("1:(1,1), 2:(2,2), 3:(1,2), P:(3,3) -> 1:(2,1)", function() {
    this.world.setPixelAt({ x: 2, y: 2 }, new Pixel(this.world, this.finder));
    this.world.setPixelAt({ x: 1, y: 2 }, new Pixel(this.world, this.finder));
    const pos = this.finder.getNewPosition({ x: 1, y: 1 }, { x: 3, y: 3 });
    expect(pos).to.eql({
      x: 2,
      y: 1
    });
  });

  it("1:(1,1), 2:(2,1), P:(3,1) -> 1:(2,2)", function() {
    this.world.setPixelAt({ x: 1, y: 1 }, new Pixel(this.world, this.finder));
    this.world.setPixelAt({ x: 2, y: 1 }, new Pixel(this.world, this.finder));
    const pos = this.finder.getNewPosition({ x: 1, y: 1 }, { x: 3, y: 1 });
    expect(pos).to.eql({
      x: 2,
      y: 2
    });
  });
});
