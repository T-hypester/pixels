import { Distance } from "../../types/geometry";

export const manhattan: Distance = (a, b) => Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
