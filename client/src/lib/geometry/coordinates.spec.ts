import { expect } from 'chai'

import { Cartesian2D } from "./types";

describe("Cartesian2D", function () {

  it("can be used as an array", function () {
    const c = new Cartesian2D
    c[0] = 1
    c[1] = 2
    expect(c[0]).to.equal(1)
    expect(c[1]).to.equal(2)
  })

  it("can be used as an object", function () {
    const c = new Cartesian2D
    c.x = 1
    c.y = 2
    expect(c[0]).to.equal(1)
    expect(c[1]).to.equal(2)
  })

})