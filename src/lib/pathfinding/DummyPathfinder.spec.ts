import { expect } from "chai";

import DefaultWorld from "../../app/World";

import DummyPathfinder from "./DummyPathfinder";

describe("Dummy pathfinder", function() {
  beforeEach(function() {
    const world = new DefaultWorld(30, 30);
    this.pathfinder = new DummyPathfinder(world);
  });

  it("Moving from (10,10) toward (20,20) gives (11,11)", function() {
    const pos = this.pathfinder.getNextPosition({ x: 10, y: 10 }, { x: 20, y: 20 });
    expect(pos).to.eql({ x: 11, y: 11 });
  });

  it("Moving from (10,10) toward (0,20) gives (9,11)", function() {
    const pos = this.pathfinder.getNextPosition({ x: 10, y: 10 }, { x: 0, y: 20 });
    expect(pos).to.eql({ x: 9, y: 11 });
  });

  it("Moving from (10,10) toward (0,0) gives (9,9)", function() {
    const pos = this.pathfinder.getNextPosition({ x: 10, y: 10 }, { x: 0, y: 0 });
    expect(pos).to.eql({ x: 9, y: 9 });
  });

  it("Moving from (10,10) toward (20,0) gives (11,9)", function() {
    const pos = this.pathfinder.getNextPosition({ x: 10, y: 10 }, { x: 20, y: 0 });
    expect(pos).to.eql({ x: 11, y: 9 });
  });
});
