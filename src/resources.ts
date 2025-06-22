/// <reference types="vite/client" />
import { ImageSource, SpriteSheet, Loader } from 'excalibur'

// Laad images uit public-map
const Background   = new ImageSource(import.meta.env.BASE_URL + 'images/background.png')
const PlayerSprite = new ImageSource(import.meta.env.BASE_URL + 'images/player.png')
const Spike        = new ImageSource(import.meta.env.BASE_URL + 'images/spike.png')
const Coin         = new ImageSource(import.meta.env.BASE_URL + 'images/coin.png')
const GoalSheet    = new ImageSource(import.meta.env.BASE_URL + 'images/goal-anim.png')

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
    grid: { rows: 1, columns: 4, spriteWidth: 32, spriteHeight: 32 }
  })
}

export const loader = new Loader([
  Background, PlayerSprite, Spike, Coin, GoalSheet
])
