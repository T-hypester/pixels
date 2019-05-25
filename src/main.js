import Game from './app/Game'
import HtmlCanvas from './lib/ui/HtmlCanvas'

new Game(new HtmlCanvas(document.getElementById('canvas')))