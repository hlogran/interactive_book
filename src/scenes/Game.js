import Phaser from 'phaser'
import { Logo } from '../images'
import { Bg } from '../images'
import { Mushroom } from '../sprites'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Game' })
  }

  create () {


    this.container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);

    this.bg = new Bg(this, 0, 0);
    this.bg.displayHeight = this.sys.canvas.height;
    this.bg.scaleX = this.bg.scaleY;
    this.container.add(this.bg);

    /*
    this.container.add(this.logo);

    this.events.on('resize', (w, h) => {
      this.container.setPosition(w / 2, h / 2);
      this.container.displayHeight = h;

      this.container.scaleX = this.container.scaleY;

      console.log(this.container.getBoundsTransformMatrix());

    }, this);
    */
  }


  update () {
    //this.mushroom.update()
  }
}
