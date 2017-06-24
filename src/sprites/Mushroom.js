import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  onClick() {
    console.log(' CLICK ', this)
  }
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    console.log(this.events.onInputDown)
    this.inputEnabled = true;

    this.events.onInputDown.add(this.onClick, this);
  }

  update () {
    this.angle += 1
  }
}
