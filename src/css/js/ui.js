import { Actor, Color, Font, Label, Vector } from "excalibur";

export class UI extends Actor {
    onInitialize(engine) {
        engine.ui = this;
    }
}