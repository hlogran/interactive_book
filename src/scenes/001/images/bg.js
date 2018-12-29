import { Image } from '../../../ibFramework';

export default class extends Image {
  constructor (scene, x, y) {
    super(scene, x, y, 'bg');
    scene.add.existing(this);
  }
}
