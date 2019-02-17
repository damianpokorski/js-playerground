import { Element, Canvas } from 'source/import';

class Text extends Element {
  constructor(properties = {}) {
    super(properties);

    // Default text properties
    this.fontFamily = 'Halvetica';
    this.text = 'Sample Text';
    this.fontSize = '24px';
    this.textAlign = 'left';

    // Stroke
    this.strokeThickness = 0;
    this.strokeStyle = null;

    // Injecting all properties at once
    this.applyProperties(properties);
  }

  update(delta) {
    super.update(delta);
  }

  draw() {
    if (this.strokeThickness > 0) {
      Canvas.strokeText(
        this.position.x,
        this.position.y,
        this.strokeThickness,
        this.text,
        this.strokeStyle,
        this.fontSize,
        this.fontFamily,
        this.textAlign,
      );
    }

    Canvas.drawText(
      this.position.x,
      this.position.y,
      this.text,
      this.style,
      this.fontSize,
      this.fontFamily,
      this.textAlign,
    );
  }
}

export { Text as default };
