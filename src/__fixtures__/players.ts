import { Game, Player } from "../game"

export const SomePlayer = () => new Player({ color: "some", game: new Game() })
export const RedPlayer = () => new Player({ color: "red", game: new Game() })
//export const blackPlayer: Player = new Player({ color: "black" })
