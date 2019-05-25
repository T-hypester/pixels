import { expect } from 'chai'

import { Point } from "../src/types/geometry";
import { manhattan } from "../src/lib/geometry/distances";

describe("Manhattan distance", function() {
  it("is 4 for d((0,0), (2,2))", function() {
    const a: Point = { x: 0, y: 0 };
    const b: Point = { x: 2, y: 2 };
    const dist = manhattan(a, b);
    expect(dist).to.equal(4);
  });
  it("is 4 for d((2,2), (0,0))", function() {
    const a: Point = { x: 0, y: 0 };
    const b: Point = { x: 2, y: 2 };
    const dist = manhattan(b, a);
    expect(dist).to.equal(4);
  });
});
