// src/scenes/victory.ts

import {
  Scene,
  SceneActivationContext,
  Label,
  Actor,
  Vector,
  Engine,
  Color,
  Font,
  FontUnit,
  Keys
} from 'excalibur'
import Level1 from './level1'
import { Resources } from '../resources'
import { GameState } from '../main'

export class VictoryScene extends Scene {
  private label!: Label

  onInitialize(engine: Engine): void {
    // Achtergrond
    const bg = new Actor({
      pos: Vector.Zero,
      anchor: Vector.Zero,
      z: -1
    })
    const sprite = Resources.Background.toSprite()
    const scaleX = engine.drawWidth / sprite.width
    const scaleY = engine.drawHeight / sprite.height
    sprite.scale = new Vector(scaleX * 3, scaleY * 3)
    bg.graphics.use(sprite)
    engine.add(bg)

    // Overwinning
    this.label = new Label({
      text: '',
      anchor: new Vector(0.5, 0.5),
      font: new Font({
        family: 'Arial',
        size: 32,
        unit: FontUnit.Px,
        bold: true
      }),
      color: Color.fromHex('#FFD700'),
      z: 1
    })
    engine.add(this.label)

    // R toets om opnieuw te starten
    this.on('preupdate', () => {
      if (engine.input.keyboard.wasPressed(Keys.R)) {
        GameState.score = 0
        GameState.lives = 3
        engine.removeScene('game')
        const fresh = new Level1()
        engine.add('game', fresh)
        engine.goToScene('game')
      }
    })
  }

  onActivate(context: SceneActivationContext): void {
    const engine = context.engine
    this.label.text = `🏆 Victory! 🏆\nJe score: ${GameState.score}\nDruk op R om opnieuw te spelen`
    this.label.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2)
  }
}
