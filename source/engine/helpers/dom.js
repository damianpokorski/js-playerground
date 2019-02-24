import { Vector } from 'source/import';

class Dom {
  static create(tag, properties = {}) {
    const e = document.createElement(tag);
    Object.keys(properties)
      .forEach((key) => {
        e[key] = properties[key];
      });
    return e;
  }
}

Dom.Get = class {
  static firstOfTag(tag) {
    return (document.getElementsByTagName(tag)[0]);
  }

  static id(id) {
    return document.getElementById(id);
  }

  static body() {
    return Dom.Get.firstOfTag('body');
  }

  static head() {
    return Dom.Get.firstOfTag('head');
  }

  static canvas() {
    return Dom.Get.firstOfTag('canvas');
  }
};

function windowListener(eventName, func) {
  return window.addEventListener(eventName, func, false);
}

function documentListener(eventName, func) {
  return document.addEventListener(eventName, func, false);
}

function canvasListener(eventName, func) {
  return Dom.Get.canvas().addEventListener(eventName, func, false);
}

const registeredEvents = {};
Dom.Events = class {
  static saveEventHandler(eventName, handler) {
    if (registeredEvents[eventName] === undefined) {
      registeredEvents[eventName] = [];
    }
    registeredEvents[eventName].push(handler);
  }

  static triggerEventHandler(eventName, event) {
    if (!(registeredEvents[eventName] === undefined)) {
      registeredEvents[eventName].forEach(handler => handler(event));
    }
  }

  static resize(func) {
    Dom.Events.saveEventHandler('resize', func);
    windowListener('resize', func);
  }

  static loaded(func) {
    Dom.Events.saveEventHandler('loaded', func);
    if (document.readyState === 'complete') {
      func();
      return;
    }
    documentListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        func();
      }
    });
  }

  static keyup(func) {
    Dom.Events.saveEventHandler('keyup', func);
    windowListener('keyup', e => func(e.key));
  }

  static keydown(func) {
    Dom.Events.saveEventHandler('keydown', func);
    windowListener('keydown', e => func(e.key));
  }

  static click(func) {
    Dom.Events.saveEventHandler('click', func);
    windowListener('click', e => func(new Vector(e.x, e.y)));
  }

  static mousemove(func) {
    Dom.Events.saveEventHandler('mousemove', func);
    canvasListener('mousemove', e => func(new Vector(e.x, e.y)));
  }

  static touchstart(func) {
    Dom.Events.saveEventHandler('touchstart', func);
    canvasListener('touchend', e => Array
      .from(e.touches)
      .forEach(t => func(new Vector(t.pageX, t.pageY))));
  }

  static touchend(func) {
    Dom.Events.saveEventHandler('touchend', func);
    canvasListener('touchend', e => Array
      .from(e.touches)
      .forEach(t => func(new Vector(t.pageX, t.pageY))));
  }

  static touchmove(func) {
    Dom.Events.saveEventHandler('touchmove', func);
    canvasListener('touchmove', e => Array
      .from(e.touches)
      .forEach(t => func(new Vector(t.pageX, t.pageY))));
  }
};

Dom.Helper = class {
  static LoadGoogleFont(fontName) {
    // Define static list of fonts which are already loaded
    if (typeof Dom.Helper.LoadGoogleFont.LoadedFonts === 'undefined') {
      Dom.Helper.LoadGoogleFont.LoadedFonts = [];
    }

    // Check if the font has been previously loaded
    if (Dom.Helper.LoadGoogleFont.LoadedFonts.some(font => font === fontName)) {
      return;
    }
    Dom.Helper.LoadGoogleFont.LoadedFonts.push(fontName);

    // Load font by create link within document head
    Dom.Get.head().appendChild(
      Dom.create('link', {
        href: `https://fonts.googleapis.com/css?family=${encodeURI(fontName)}`,
        rel: 'stylesheet',
      }),
    );
  }
};

export { Dom as default };
