import Phaser from 'phaser';
import { Scene } from '../../ibFramework';
import * as images from './assets/images';
import { bg } from './images';
import { mar } from './animations';

const KEY = '001';

export default class extends Scene {
  constructor () {
    super(KEY, images);
  }

  create () {


    this.container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
    this.mar = new mar(this, 0, 0);
    this.mar.displayHeight = this.sys.canvas.height;
    this.mar.scaleX = this.mar.scaleY;
    this.container.add(this.mar);

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
