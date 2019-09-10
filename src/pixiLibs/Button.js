import { Container, Graphics, Texture, Text, ObservablePoint, mesh, SCALE_MODES } from "pixi.js";

class Button extends Container {
  constructor(texture, { width, height, radius, anchor }) {
    super();

    this._button = null;
    this._text = [];
    this._anchor = null;

    this.button = this.addChild(new mesh.NineSlicePlane(texture, radius, radius, radius, radius));
    this.anchor = new ObservablePoint(this._alignButton, this, 0, 0);
    this.anchor.set(anchor.x, anchor.y);
  }

  _alignButton() {
    const { x, y } = this._anchor;
    const { width, height } = this._button;
    this._button.pivot.set(width * x, height * y);
  }

  addText(string, anchor = { x: 0, y: 0 }, styles) {
    const txt = new Text(string, styles);
    txt.anchor.set(anchor.x, anchor.y);
    this.text.push(txt);
    this.addChild(txt);
  }

  get button() {
    return this._button;
  }

  set button(val) {
    this._button = val;
  }

  set anchor(ob) {
    this._anchor = ob;
  }

  get anchor() {
    return this._anchor;
  }

  set text(val) {
    this._text = val;
  }

  get text() {
    return this._text;
  }

  update(dt) {
    /* For basic animations use ticker*/
  }

  static fixColorCode(code) {
    let color = String(code);
    return !!color.match(/^#/) ? color.replace(/^#/, "0x") : color.replace(/^0x/, "#");
  }

  static create({ text, button }) {
    const { texture, ...params } = !button.picture ? this.getGraphicsData(button) : this.getSpriteData(button);
    const btn = new this(texture, params);

    const {string, anchor, styles} = text.isText ? this.getTextData(text) : "";
    text.isText ? btn.addText(string, anchor, styles) : "";

    return btn;
  }

  static getSpriteData(params){
    const { picture, width, height, radius, anchor } = params;

    return Object.assign({},
      {
        texture: Texture.from(picture),
        width,
        height,
        radius,
        anchor
      });
  }

  static getGraphicsData(params) {
    const { width, height, radius, color, alpha, anchor } = params;

    return Object.assign({},
      {
        texture: new Graphics()
          .beginFill(this.fixColorCode(color), alpha)
          .drawRoundedRect(0, 0, width, height, radius)
          .endFill()
          .generateCanvasTexture(SCALE_MODES.LINEAR, 1),
        width,
        height,
        radius,
        anchor
      });
  }

  static getTextData(params){
    const {string, anchor, ...styles} = params;

    return Object.assign({}, {
      string,
      anchor,
      styles
    });
  }
}

export {
  Button
};
