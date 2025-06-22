import { ImageSource, Loader } from 'excalibur'

export const Resources = {
  PlayerSprite: new ImageSource('/images/player.png')
}

export const loader = new Loader()
for (const res of Object.values(Resources)) {
  loader.addResource(res)
}