import {
  Scene,
  Engine,
  SceneActivationContext,
  Label,
  Actor,
  Vector,
  Color,
  Font,
  FontUnit,
  Keys
} from 'excalibur'
import Level1 from './level1'
import { Resources } from '../resources'
import { GameState } from '../main'

export class RestartScene extends Scene {
  private label!: Label

  onInitialize(engine: Engine): void {
    // Achtergrond
    const bg = new Actor({
      pos: Vector.Zero,
      anchor: Vector.Zero,
      z: -1
    })
    const sprite = Resources.Background.toSprite()
    sprite.scale = new Vector(2, 2)
    bg.graphics.use(sprite)
    engine.add(bg)

    // Label
    this.label = new Label({
      text: '',
      anchor: new Vector(0.5, 0.5),
      font: new Font({ family: 'Arial', size: 30, unit: FontUnit.Px }),
      color: Color.White,
      z: 1
    })
    engine.add(this.label)

    // Op R druk: reset spel
    this.on('preupdate', () => {
      if (engine.input.keyboard.wasPressed(Keys.R)) {
        GameState.score = 0 // Score reset
        engine.removeScene('game') // Verwijder oude game scene
        const fresh = new Level1()
        engine.add('game', fresh)
        engine.goToScene('game')
      }
    })
  }

  onActivate(context: SceneActivationContext): void {
    const engine = context.engine
    this.label.text = `Je hebt nog ${GameState.lives} leven(s)\nDruk op R om opnieuw te starten`
    this.label.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2)
  }
}
