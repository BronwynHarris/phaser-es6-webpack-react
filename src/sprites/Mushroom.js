import Phaser from 'phaser'

import { guiAction } from '../gui-system'
export default class extends Phaser.Sprite {
  onClick() {
    guiAction('BUTTON_CLICKED', {name: 'stuff', orig: this})
  }
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.inputEnabled = true;

    this.events.onInputDown.add(this.onClick, this);
  }

  update () {
    this.angle += 1
  }
}
