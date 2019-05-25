export type Point = {
  x: number;
  y: number;
};

export interface Distance<Coords> {
  (a: Coords, b: Coords): number;
}

export interface Geometry<Coords> {
  getAdjacent(point: Coords): Coords[];
  getDistance(a: Coords, b: Coords): number;
}
