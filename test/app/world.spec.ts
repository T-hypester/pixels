import { expect } from "chai";

import Pixel from '../../src/app/DefaultPixel'
import World from "../../src/app/World";
import DummyPathfinder from "../../src/app/pathfinding/DummyPathfinder";

describe("World", function() {
  beforeEach(function() {
    this.world = new World(10, 10);
  });

  describe("If no Pixel is at (1,1)", function() {
    it("isEmptyAt(1,1) returns true", function() {
      expect(this.world.isEmptyAt({ x: 1, y: 1 })).to.be.true;
    });
  });

  describe("If a Pixel is at (1,1)", function() {
    beforeEach(function() {
      this.world.setPixelAt({ x: 1, y: 1 }, new Pixel(this.world, new DummyPathfinder(this.world)));
    });
    it("isEmptyAt(1,1) returns false", function() {
      expect(this.world.isEmptyAt({ x: 1, y: 1 })).to.be.false;
    });
  });
});
