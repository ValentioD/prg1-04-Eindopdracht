// src/ui/ui.ts

import {
  ScreenElement,
  Label,
  Vector,
  Font,
  FontUnit,
  Color
} from 'excalibur'
import { GameState } from '../main'

export class UI extends ScreenElement {
  private _scoreLabel!: Label
  private _livesLabel!: Label

  constructor() {
    super({ x: 0, y: 0 })
  }

  public onInitialize(): void {
    this._scoreLabel = new Label({
      text: `Score: ${GameState.score}`,
      pos: new Vector(20, 20),
      font: new Font({
        size: 20,
        unit: FontUnit.Px,
        family: 'Arial',
        color: Color.White
      })
    })

    this._livesLabel = new Label({
      text: `Levens: ${GameState.lives}`,
      pos: new Vector(20, 50),
      font: new Font({
        size: 20,
        unit: FontUnit.Px,
        family: 'Arial',
        color: Color.White
      })
    })

    this.addChild(this._scoreLabel)
    this.addChild(this._livesLabel)
  }


  public set lives(value: number) {
    if (this._livesLabel) {
      this._livesLabel.text = `Levens: ${value}`
    }
  }

  public set score(value: number) {
    if (this._scoreLabel) {
      this._scoreLabel.text = `Score: ${value}`
    }
  }

  public addScore(amount: number): void {
    GameState.score += amount
    this.score = GameState.score
  }

  public loseLife(): void {
    GameState.lives--
    this.lives = GameState.lives
  }

  public reset(): void {
    GameState.score = 0
    GameState.lives = 3
    this.score = GameState.score
    this.lives = GameState.lives
  }
}
