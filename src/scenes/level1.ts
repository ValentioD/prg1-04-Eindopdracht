// src/scenes/level1.ts

import {
  Scene,
  SceneActivationContext,
  Vector,
  Engine,
  Actor
} from 'excalibur'
import { Player } from '../actors/player'
import { Platform } from '../actors/platform'
import { Goal } from '../actors/goal'
import { Obstacle } from '../actors/obstacle'
import { Coin } from '../actors/items/coin'
import { Resources } from '../resources'
import { setupCamera } from '../utils/camera'
import { UI } from '../ui/ui'
import { GameState } from '../main'

export default class Level1 extends Scene {
  private player!: Player
  private ui!: UI

  onInitialize(engine: Engine): void {
    // Achtergrond
    const bg = new Actor({
      pos: new Vector(-1050, -400),
      anchor: Vector.Zero,
      z: -1
    })
    const bgSprite = Resources.Background.toSprite()
    bg.graphics.use(bgSprite)
    const baseScaleX = engine.drawWidth / bgSprite.width
    const baseScaleY = engine.drawHeight / bgSprite.height
    bg.scale.setTo(baseScaleX * 3, baseScaleY * 3)
    engine.add(bg)

    // UI
    this.ui = new UI()
    engine.add(this.ui)

    // Speler
    this.player = new Player()
    this.player.pos = new Vector(100, 300)
    engine.add(this.player)

    // Camera
    setupCamera(engine, this.player)

    // Platforms
    const platforms: Platform[] = []
    platforms.push(new Platform(500, 580, 1500, 40))
    for (let x = 800; x <= 2400; x += 200) {
      const y = 520 - ((x - 800) / 200) * 50
      platforms.push(new Platform(x, y, 100, 20))
    }
    platforms.forEach(p => engine.add(p))

    // Doelvlag
    const lastPlat = platforms[platforms.length - 1]
    engine.add(new Goal(lastPlat.pos.x + 20, lastPlat.pos.y))

    // Coins
    platforms.forEach(p => {
      const topY = p.pos.y - p.height
      engine.add(new Coin(p.pos.x, topY - 8))
    })

    // Spikes
    const spikeIndices = [1, 3, 5]
    spikeIndices.forEach(i => {
      if (i < platforms.length) {
        const p = platforms[i]
        const topY = p.pos.y - p.height
        engine.add(new Obstacle(p.pos.x + p.width / 2, topY - 16))
      }
    })

    // Botsing
    this.player.on('collisionstart', evt => {
      const other = evt.other.owner as Actor
      if (other instanceof Goal) {
        engine.goToScene('victory')
      } else if (other instanceof Obstacle) {
        GameState.lives--
        this.ui.lives = GameState.lives
        engine.goToScene(GameState.lives > 0 ? 'restart' : 'gameover')
      } else if (other instanceof Coin) {
        this.ui.addScore(10)
        other.kill()
      }
    })

    // Vallen
    let fallen = false
    this.player.on('postupdate', () => {
      if (!fallen && this.player.pos.y > engine.drawHeight + 100) {
        fallen = true
        GameState.lives--
        this.ui.lives = GameState.lives
        engine.goToScene(GameState.lives > 0 ? 'restart' : 'gameover')
      }
    })
  }

  onActivate(context: SceneActivationContext): void {
    this.ui.lives = GameState.lives
    this.ui.score = GameState.score
  }
}
