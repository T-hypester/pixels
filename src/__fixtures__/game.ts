import { Game } from "../game"
import { NoRendering } from "../ui"

export const HeadlessGame = () =>
  new Game({
    rendering: new NoRendering(),
  })
