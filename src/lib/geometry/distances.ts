import { Distance, Point } from "./types";

export const manhattan: Distance<Point> = (a, b) => Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
