import {
  Actor,
  Keys,
  Vector,
  Engine,
  CollisionType,
  Color
} from 'excalibur'
import { Resources } from '../resources'

export class Player extends Actor {
  
  private speed: number = 200
  private jumpPower: number = -500

  constructor() {
    super({
      width: 40,
      height: 40,
      color: Color.Red,
      collisionType: CollisionType.Active
    })
    
    this.anchor.setTo(0.5, 1)
  }

  public onInitialize(engine: Engine): void {
    
    this.graphics.use(Resources.PlayerSprite.toSprite())

    
    this.on('preupdate', () => {
      const input = engine.input.keyboard

      // links/rechts bewegen
      if (input.isHeld(Keys.Left)) {
        this.vel.x = -this.speed
      } else if (input.isHeld(Keys.Right)) {
        this.vel.x = this.speed
      } else {
        this.vel.x = 0
      }

      
      if (input.wasPressed(Keys.Up) || input.wasPressed(Keys.Space)) {
        this.vel.y = this.jumpPower
      }

      // game over bij vallen
      if (this.pos.y > engine.drawHeight + 100) {
        engine.goToScene('gameover')
      }
    })

    
  }
}
