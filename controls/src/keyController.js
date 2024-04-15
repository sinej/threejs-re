export class KeyController {
  constructor() {

    // 생성자
    this.keys = [];

    window.addEventListener('keydown', e=> {
        console.log("e.code down", e.code);
        this.keys[e.code] = true;
    })

    window.addEventListener('keyup', e=> {
      console.log("e.code delete", e.code);
      delete this.keys[e.code];
    })
  }
}