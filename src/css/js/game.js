import '../css/style.css';
import { Color, Engine, DisplayMode, Keys, Vector } from "excalibur";
import { UI } from './ui.js';

export class Game {
    constructor() {
        super({
            width: 800,
            height: 600,
            displayMode: DisplayMode.FitScreen,
            backgroundColor: Color.Blue
        });
    }

    startGame() {
        console.log("Game started");

        const ui = new UI();
        this.add(ui);
        this.ui = ui;
    }
}

new Game();