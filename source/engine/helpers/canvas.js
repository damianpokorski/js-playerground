import { Dom, Vector } from 'source/import';

class Canvas {
  static Init() {
    Canvas.clear_color = '#000000';
    Canvas.dom = Dom.create('canvas', { id: 'engine' });
    Dom.Get.body().appendChild(Canvas.dom);
    Canvas.context = Canvas.dom.getContext('2d');
    Canvas.resize();
    Dom.Events.resize(Canvas.resize);
    Canvas.resize();
  }

  static resize() {
    Canvas.context.width = window.innerWidth;
    Canvas.context.height = window.innerHeight;
    Canvas.dom.setAttribute('width', Canvas.context.width);
    Canvas.dom.setAttribute('height', Canvas.context.height);
    Canvas.clear();
  }

  static size() {
    return {
      x: Canvas.context.width, 
      y: Canvas.context.height,
    };
  }

  static isLandscape() {
    return this.size().x >= this.size().y;
  }

  static isPortrait() {
    return this.size().x < this.size().y;
  }

  static clear() {
    Canvas.context.fillStyle = Canvas.clear_color;
    Canvas.context.fillRect(0, 0, Canvas.size().x, Canvas.size().y);
  }

  static ctx() {
    return Canvas.context;
  }

  static drawText(x, y, text, style = '#FFFFFF', fontSize = '32px', fontFamily = ' Arial', textAlign = 'left') {
    Canvas.ctx().fillStyle = style;
    Canvas.ctx().font = `${fontSize} '${fontFamily}'`;
    Canvas.ctx().textAlign = textAlign;
    Canvas.ctx().fillText(text, x, y);
  }

  static strokeText(x, y, strokeThickness, text, style = '#FFFFFF', fontSize = '32px', fontFamily = ' Arial', textAlign = 'left') {
    Canvas.ctx().strokeStyle = style;
    Canvas.ctx().lineWidth = strokeThickness;
    Canvas.ctx().font = `${fontSize} '${fontFamily}'`;
    Canvas.ctx().textAlign = textAlign;
    Canvas.ctx().strokeText(text, x, y);
  }
}
Canvas.Init();

Canvas.Corners = class {
  static TopLeft() {
    return new Vector(0, 0);
  }

  static TopRight() {
    return new Vector(Canvas.size().x, 0);
  }

  static BottomLeft() {
    return new Vector(0, Canvas.size().y);
  }

  static BottomRight() {
    return new Vector(Canvas.size().x, Canvas.size().y);
  }
};

export { Canvas as default };
