import 'source/import';

class GenericHelper {
  static applyProperties(target, properties = {}) {
    Object.keys(properties)
      .forEach((key) => {
        target[key] = properties[key]; // eslint-disable-line no-param-reassign
      });
    return target;
  }
}

export { GenericHelper as default };
