import "source/import"

class Dom {

};

Dom.Get = class {
    static FirstOfTag(tag) {
        return (document.getElementsByTagName(tag)[0]);
    }
    static Id(id) {
        return document.getElementById(id);
    }

    static body() {
        return Dom.Get.FirstOfTag("body")
    }
};

Dom.Events = class {
    static resize(func) {
        window.addEventListener('resize', func, true);
    }
    static keyup(func) {
        window.addEventListener('keyup', func, true);
    }
    static keydown(func) {
        window.addEventListener('keydown', func, true);
    }
};

export { Dom as default };