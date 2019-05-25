export type Point = {
  x: number;
  y: number;
};

export interface Distance {
  (a: Point, b: Point): number;
}
