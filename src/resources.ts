import {
  ImageSource,
  SpriteSheet,
  Loader,
  range
} from 'excalibur'

// Laad alle images
const Background   = new ImageSource('/images/background.png')
const PlayerSprite = new ImageSource('/images/player.png')
const Spike        = new ImageSource('/images/spike.png')
const Coin         = new ImageSource('/images/coin.png')
const GoalSheet    = new ImageSource('/images/goal-anim.png') 

export const Resources = {
  Background,
  PlayerSprite,
  Spike,
  Coin,
  GoalSheet
}


export const SpriteSheets = {
  Goal: SpriteSheet.fromImageSource({
    image: GoalSheet,
    grid: {
      rows: 1,
      columns: 4,
      spriteWidth: 32,
      spriteHeight: 32
    }
  })
}

export const loader = new Loader([
  Background,
  PlayerSprite,
  Spike,
  Coin,
  GoalSheet
])
