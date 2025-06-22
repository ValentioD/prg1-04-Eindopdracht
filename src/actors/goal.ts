import {
  Actor,
  CollisionType,
  Vector,
  Animation,
  range,
  SpriteSheet
} from 'excalibur'
import { Resources } from '../resources'

export class Goal extends Actor {
  constructor(x: number, y: number) {
    super({
      pos: new Vector(x +16, y -16),
      width: 32,
      height: 32,
      collisionType: CollisionType.Passive
    })

    this.anchor.setTo(0.5, 1)
  }

  onInitialize(): void {
    const spriteSheet = SpriteSheet.fromImageSource({
      image: Resources.GoalSheet,
      grid: {
        rows: 1,
        columns: 4,
        spriteWidth: 60,
        spriteHeight: 60
      }
    })

    const flagAnim = Animation.fromSpriteSheet(spriteSheet, range(0, 3), 150)
    flagAnim.scale = new Vector(1, 1)
    this.graphics.use(flagAnim)
  }
}
