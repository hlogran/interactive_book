import Phaser from 'phaser'
import { Logo } from '../images'
import { Mushroom } from '../sprites'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Game' })
  }

  create () {
    this.logo = new Logo(this, this.sys.canvas.width / 2, this.sys.canvas.height / 2);

    console.log('this.logo.displayHeight', this.logo.displayHeight);
    console.log('this.logo.scaleY', this.logo.scaleY);

    this.logo.displayHeight = this.sys.canvas.height;
    this.logo.scaleX = this.logo.scaleY;

    console.log('this.logo.displayHeight', this.logo.displayHeight);
    console.log('this.logo.scaleY', this.logo.scaleY);
    console.log('this.logo.scaleY', this.logo.scaleY);
    /*
    this.tweens.add({
      targets: this.logo,
      scaleX: 1.5,
      scaleY: 1.5,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    })
    */
    this.mushroom = new Mushroom(this, 0, 0)
    Phaser.Display.Align.In.Center(this.mushroom, this.add.zone(400, 300, 800, 600))
  }

  update () {
    this.mushroom.update()
  }
}
