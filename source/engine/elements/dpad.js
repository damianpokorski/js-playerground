import {
  Element, Dom, Circle, Canvas, Text,
} from 'source/import';
import { Vector } from '../../import';

class DPad extends Element {
  constructor(properties = {}) {
    super(properties);

    // Dpad BG
    this.background = new Circle({
      style: 'rgba(255, 255, 255, 0.25)',
      radius: 64,
    });
    this.background.click(v => this.clicked(v));
    this.background.mousemove(v => this.clicked(v));
    this.background.touchmove(v => this.clicked(v));

    // DPad Controller Knob
    this.foreground = new Circle({
      style: 'rgba(0, 0, 0, 0.5)',
      radius: 16,
    });

    // Text
    this.directionText = new Text({
      position: this.background.center().add(new Vector(0, 8)),
      style: 'rgba(255, 255, 255, 0.75)',
      fontFamily: 'Press Start 2P',
      fontSize: '16px',
      text: 'RIGHT?',
      textAlign: 'center',
    });

    // Position dynamically based on screen dimensions
    const repositionElements = () => {
      this.background.position = Canvas.Corners.BottomRight().subtract(128);
      this.foreground.position = Canvas.Corners.BottomRight().subtract(192).add(48);
      this.directionText.position = this.background.center().add(new Vector(0, 8));
    };
    repositionElements();
    Dom.Events.resize(repositionElements);

    // Injecting all properties at once
    this.applyProperties(properties);

    console.log(this.velocity);
  }

  update(delta) {
    super.update(delta);
    this.background.update(delta);
    this.foreground.update(delta);
    this.directionText.update(delta);
  }

  draw() {
    super.draw();
    this.background.draw();
    this.foreground.draw();
    this.directionText.draw();
  }

  clicked(clickPosition) {
    // Move the controller 'knob' around
    this.foreground.position = clickPosition;

    const direction = this.foreground.center().subtract(this.background.center()).angle();
    if (direction <= -45 && direction > -135) {
      this.directionText.text = 'UP';
      Dom.Events.triggerEventHandler('keyup', 'ArrowUp');
    } else if (direction > 45 && direction <= 135) {
      this.directionText.text = 'DOWN';
      Dom.Events.triggerEventHandler('keyup', 'ArrowDown');
    } else if (direction <= -135 || direction > 135) {
      this.directionText.text = 'LEFT';
      Dom.Events.triggerEventHandler('keyup', 'ArrowLeft');
    } else if (direction > -45 && direction <= 45) {
      this.directionText.text = 'RIGHT';
      Dom.Events.triggerEventHandler('keyup', 'ArrowRight');
    }
  }
}

export { DPad as default };
