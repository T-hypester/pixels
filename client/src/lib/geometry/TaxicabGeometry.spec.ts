import { expect } from 'chai'
import TaxicabGeometry from './TaxicabGeometry';

describe("Taxicab Geometry", function () {
  beforeEach(function ( ){
    this.geo = new TaxicabGeometry;
  })

  describe("getAdjacent(1,1)", function () {
    it("-> (0,0) (0,1) (0,2) (1,0) (1,2) (2,0) (2,1) (2,2)", function () {
      const adj = this.geo.getAdjacent({x:1,y:1})
      expect(adj).to.have.property('length', 8)
    })
  })
})