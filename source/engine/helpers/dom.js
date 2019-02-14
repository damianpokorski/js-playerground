import 'source/import';

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
};

function windowAddEventListener(eventName, func) {
  return window.addEventListener(eventName, func, true);
}

Dom.Events = class {
  static resize(func) {
    windowAddEventListener('resize', func);
  }

  static load(func) {
    windowAddEventListener('onload', func);
  }

  static keyup(func) {
    windowAddEventListener('keyup', func);
  }

  static keydown(func) {
    windowAddEventListener('keydown', func);
  }

  static click(func) {
    windowAddEventListener('click', func);
  }
};

Dom.Helper = class {
  static LoadGoogleFont(fontName) {
    Dom.Get.head().appendChild(
      Dom.create('link', {
        href: `https://fonts.googleapis.com/css?family=${encodeURI(fontName)}`,
        rel: 'stylesheet',
      }),
    );
  }
};

export { Dom as default };
