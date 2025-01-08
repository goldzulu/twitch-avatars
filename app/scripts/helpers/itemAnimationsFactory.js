function createCoinAnimation(scene) {
  var frameNames = scene.anims.generateFrameNames('items', {
    start: 1,
    end: 8,
    zeroPad: 4,
    prefix: 'coin/',
    suffix: '.png',
  });

  scene.anims.create({
    key: 'coin_spin',
    frames: frameNames,
    frameRate: 10,
    repeat: -1,
  });
}

function createBlueGemAnimation(scene) {
  var frameNames = scene.anims.generateFrameNames('items', {
    start: 0,
    end: 6,
    zeroPad: 4,
    prefix: 'gems/blue/frame',
    suffix: '.png',
  });

  scene.anims.create({
    key: 'gem_blue_spin',
    frames: frameNames,
    frameRate: 10,
    repeat: -1,
  });
}

function createRedGemAnimation(scene) {
  var frameNames = scene.anims.generateFrameNames('items', {
    start: 0,
    end: 6,
    zeroPad: 4,
    prefix: 'gems/red/frame',
    suffix: '.png',
  });

  scene.anims.create({
    key: 'gem_red_spin',
    frames: frameNames,
    frameRate: 10,
    repeat: -1,
  });
}

export default function itemAnimationsFactory(scene) {
  createCoinAnimation(scene);
  createBlueGemAnimation(scene);
  createRedGemAnimation(scene);
} 