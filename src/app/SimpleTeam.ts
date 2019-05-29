import { Team } from "./types";
import { Color } from "../lib/ui/types";

export default class SimpleTeam implements Team {
  color: Color

  constructor(color: Color) {
    this.color = color
  }
}
