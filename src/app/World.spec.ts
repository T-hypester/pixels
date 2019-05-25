import { expect } from "chai";

import Pixel from "./DefaultPixel";
import World from "./World";
import DummyPathfinder from "../lib/pathfinding/DummyPathfinder";

describe("World", function() {
  beforeEach(function() {
    this.world = new World(10, 10);
  });

  describe("If no Pixel is at (1,1)", function() {
    it("getPosition(1,1) returns true", function() {
      expect(this.world.getPosition({ x: 1, y: 1 })).to.be.true;
    });
  });

  describe("If a Pixel is at (1,1)", function() {
    beforeEach(function() {
      this.pixel = new Pixel(this.world, new DummyPathfinder(this.world));
      this.world.moveUnit(this.pixel, { x: 1, y: 1 });
    });
    it("getPosition(1,1) returns the Pixel", function() {
      expect(this.world.getPosition({ x: 1, y: 1 })).to.equal(this.pixel);
    });
  });

  describe("After deploying a Unit", function() {
    beforeEach(function() {
      this.world = new World(10, 10);
      this.unit = new Pixel(this.world);
      this.world.deployUnit(this.unit, { x: 1, y: 1 });
    });

    it("the Unit can access its current position", function() {
      expect(this.unit).to.have.property("position");
      expect(this.unit.position).to.have.property("current");
      expect(this.unit.position.current).to.eql({ x: 1, y: 1 });
    });

    it("the Unit can move to another position", function() {
      const ok = this.unit.position.moveTo({ x: 2, y: 2 });
      expect(ok).to.be.true;
      expect(this.unit.position.current).to.eql({ x: 2, y: 2 });
    });
  });
});
