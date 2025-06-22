import { Actor, CollisionType, Vector, Color } from 'excalibur'

export class Platform extends Actor {
  

  constructor(x: number, y: number, width: number, height: number) {
    super({
      pos: new Vector(x, y),
      width,
      height,
      color: Color.Gray,
      collisionType: CollisionType.Fixed
    })

    
    this.anchor.setTo(0.5, 1)
  }
}
