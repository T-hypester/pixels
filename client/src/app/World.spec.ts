import { expect } from "chai";

import Pixel from "./units/Pixel";
import World from "./World";
import DummyPathfinder from "./pathfinding/DummyPathfinder";
import { Cartesian2D } from "../lib/geometry/types";

describe("World", function() {
  beforeEach(function() {
    this.world = new World(10, 10);
  });

  describe("If no Pixel is at (1,1)", function() {
    it("getPosition(1,1) returns no units", function() {
      expect(this.world.getPosition({ x: 1, y: 1 }).units.length).to.eql(0);
    });
  });

  describe("If a Pixel is at (1,1)", function() {
    beforeEach(function() {
      this.pixel = new Pixel(this.world);
      this.world.moveUnit(this.pixel, { x: 1, y: 1 });
    });
    it("getPosition(1,1) contains the Pixel", function() {
      const pos = this.world.getPosition({ x: 1, y: 1 })
      expect(pos.units[0]).to.equal(this.pixel);
    });
  });

  describe("After deploying a MobileUnit", function() {
    beforeEach(function() {
      this.world = new World(10, 10);
      this.unit = new Pixel(this.world);
      this.world.deployUnit(this.unit, { x: 1, y: 1 });
    });

    it("the Unit can access its current position", function() {
      expect(this.unit).to.have.property("position");
      expect(this.unit.position).to.have.property("current");
      expect(this.unit.position.current.coordinates.x).to.eql(1)
      expect(this.unit.position.current.coordinates.y).to.eql(1)
    });

    it("the Unit can be moved to another position", function() {
      const ok = this.world.moveUnit(this.unit, new Cartesian2D(2,2))
      expect(ok).to.be.true;
      expect(this.unit.position.current.coordinates.x).to.eql(2);
      expect(this.unit.position.current.coordinates.y).to.eql(2);
    });
  });
});
