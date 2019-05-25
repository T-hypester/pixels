import { expect} from 'chai'
import Pixel from '../../src/app/DefaultPixel'
import World from '../../src/app/World';
import DummyPathfinder from '../../src/app/pathfinding/DummyPathfinder'
import Player from '../../src/app/Player';

describe("Pixel", function () {

  beforeEach(function() {
    const world = new World(100, 100)
    this.pixel = new Pixel(world, new DummyPathfinder(world))
  })

  it("Can belong to a Player", function () {
    this.pixel.player = new Player('red')
    expect(this.pixel).to.have.property('player')
  })
})