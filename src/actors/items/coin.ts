import { Actor, CollisionType, Vector } from 'excalibur'
import { Resources } from '../../resources'

export class Coin extends Actor {
  private readonly _spriteScale = new Vector(0.1, 0.1)

  constructor(x: number, y: number) {
    super({
      pos: new Vector(x, y),
      width: 16,
      height: 16,
      collisionType: CollisionType.Passive
    })

    const sprite = Resources.Coin.toSprite()
    sprite.scale = this._spriteScale
    this.graphics.use(sprite)
  }
}
