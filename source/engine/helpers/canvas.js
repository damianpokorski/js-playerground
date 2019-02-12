import { Dom } from 'source/import';

class Canvas {
  static Init() {
    Canvas.clear_color = '#000000';
    Canvas.dom = document.createElement('canvas');
    Canvas.dom.id = 'engine';
    Dom.Get.body().appendChild(Canvas.dom);
    Canvas.context = Canvas.dom.getContext('2d');
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

  static clear() {
    Canvas.context.fillStyle = Canvas.clear_color;
    Canvas.context.fillRect(0, 0, Canvas.size().x, Canvas.size().y);
  }

  static ctx() {
    return Canvas.context;
  }

  static drawText(x, y, text) {
    Canvas.ctx().fillStyle = '#FFFFFF';
    Canvas.ctx().font = '30px Arial';
    Canvas.ctx().fillText(text, x, y);
  }
}
Canvas.Init();

export { Canvas as default };
