import { Engine, Actor } from 'excalibur'

export function setupCamera(engine: Engine, player: Actor) {
  const camera = engine.currentScene.camera
  camera.strategy.elasticToActor(player, 0.1, 0.05)
}
