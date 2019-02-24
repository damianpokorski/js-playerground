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
      radius: Canvas.size().x / 5,
    });
    this.background.click(v => this.clicked(v));
    this.background.mousemove(v => this.clicked(v));
    this.background.touchstart(v => this.clicked(v));
    this.background.touchend(v => this.clicked(v));
    this.background.touchmove(v => this.clicked(v));

    Dom.Events.click(v => console.log(v, 'click started!'));
    Dom.Events.mousemove(v => console.log(v, 'mousemove started!'));
    Dom.Events.touchstart(v => console.log(v, 'touch started!'));
    Dom.Events.touchend(v => console.log(v, 'touch touchend!'));
    Dom.Events.touchmove(v => console.log(v, 'touch touchmove!'));

    // DPad Controller Knob
    this.foreground = new Circle({
      style: 'rgba(0, 0, 0, 0.5)',
      radius: Canvas.size().x / 10,
    });

    // Text
    this.directionText = new Text({
      position: this.background.center().add(new Vector(0, 16)),
      style: 'rgba(255, 255, 255, 0.75)',
      fontFamily: 'Press Start 2P',
      fontSize: '32px',
      text: '',
      textAlign: 'center',
    });

    // Position dynamically based on screen dimensions
    const repositionElements = () => {
      this.background.radius = Canvas.size().x / 5;
      this.background.position = Canvas.Corners.BottomRight().subtract(this.background.radius).subtract(16);
      this.foreground.position = this.background.center();
      this.directionText.position = this.background.center().add(new Vector(0, 8));
    };
    repositionElements();
    Dom.Events.resize(repositionElements);

    // Injecting all properties at once
    this.applyProperties(properties);
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
