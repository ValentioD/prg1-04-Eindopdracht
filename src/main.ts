import './css/style.css'
import * as ex from 'excalibur'
import { loader } from './resources'
import Level1 from './scenes/level1'
import { RestartScene } from './scenes/restart'
import { GameOverScene } from './scenes/gameover'
import { VictoryScene } from './scenes/victory'

export const GameState = {
  lives: 3,
  score: 0
}

const game = new ex.Engine({
  resolution: { width: 1280, height: 720 },
  displayMode: ex.DisplayMode.FitScreen,
  antialiasing: false,               // ← zet antialiasing uit
  physics: {
    gravity: new ex.Vector(0, 1000),
    colliders: { compositeStrategy: 'separate' }
  }
})

game.add('game',    new Level1())
game.add('restart', new RestartScene())
game.add('gameover',new GameOverScene())
game.add('victory', new VictoryScene())

game.start(loader).then(() => {
  game.goToScene('game')
  game.screen.pixelRatioOverride = 1     // ← terug naar 1:1 pixels
  game.screen.applyResolutionAndViewport()
})
