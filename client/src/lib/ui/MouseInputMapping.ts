import { UserInterface, PlayerInputMapping } from "./types";
import Player from "../../app/Player";
import { Point } from "../geometry/types";

export default class MouseInputMapping implements PlayerInputMapping {
  player: Player;
  ui: UserInterface;

  constructor(player: Player, ui: UserInterface) {
    this.player = player;
    this.ui = ui;

    this.ui.onMove = (pos: Point) => {
      this.player.position = pos;
    };
  }
}
