import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    console.log(emojis)
  }

  addBananas() {
    let monkeyWithBananas = this.emojis.map(monkey => monkey + this.banana)
    console.log(monkeyWithBananas)
    monkeyWithBananas.forEach(element => {
      let div = document.getElementById("emojis");
      let p = document.createElement("p");
      p.textContent = monkeyWithBananas;
      div.appendChild(p);
      // return monkeyWithBananas;
    })
  }
}
