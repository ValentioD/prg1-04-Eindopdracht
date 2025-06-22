import { Actor, CollisionType, Vector } from 'excalibur'
import { Resources } from '../resources'

export class Obstacle extends Actor {
  private readonly _spriteScale = new Vector(1, 1) 

  constructor(x: number, y: number) {
    super({
      pos: new Vector(x, y),
      width: 32,
      height: 32,
      collisionType: CollisionType.Fixed
    })

    const sprite = Resources.Spike.toSprite()
    sprite.scale = this._spriteScale
    this.graphics.use(sprite)
  }
}
