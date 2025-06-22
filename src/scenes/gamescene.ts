import { Scene, Engine, Vector, Actor, Color } from 'excalibur'
import { Player } from '../actors/player'
import { Platform } from '../actors/platform'
import { Resources } from '../resources'

export class GameScene extends Scene {
  background!: Actor

  onInitialize(engine: Engine): void {
    this.backgroundColor = Color.Black // fallback voor als afbeelding niet laadt

    // Achtergrond actor maken
    this.background = new Actor({
      pos: new Vector(400, 300),
      z: -1
    })

    const bgSprite = Resources.Background.toSprite()
    bgSprite.width = 1600
    bgSprite.height = 1200
    this.background.graphics.use(bgSprite)
    this.add(this.background)

    // Platforms
    const ground = new Platform(0, 580, 800, 40)
    this.add(ground)

    const floating = new Platform(300, 400, 150, 20)
    this.add(floating)

    // Speler
    const player = new Player()
    player.pos = new Vector(100, 300)
    this.add(player)

    // Camera
    this.camera.strategy.lockToActor(player)

    // Parallax scroll
    this.on('postupdate', () => {
      this.background.pos.x = this.camera.pos.x / 2
    })
  }
}
