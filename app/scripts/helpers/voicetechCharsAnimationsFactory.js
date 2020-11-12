const CHARACTERS = ['vtfan', 'vtsuperfan', 'vtwizard', 'vtyoda', 'vtskeleton', 'vtmandalorian', 'vtwonderwoman','vtcaptainmarvel','vtspiderman','vtsuperman','vtbatman','vtblackpanther','vtcaptainamerica','vtdrstrange','vtC3PO','vtR2D2'];

function createStandingAnimation(character, scene) {
  var frameNames = [{
    frame: `standing/${character}.png`,
    key: 'voicetechchars',
  }];

  scene.anims.create({ key: `${character}_standing`, frames: frameNames });
}

function createWalkingAnimation(character, scene) {
  var frameNames = scene.anims.generateFrameNames('voicetechchars', {
    start: 1,
    end: 8,
    zeroPad: 2,
    prefix: `${character}/${character}_walk_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${character}_walk`,
    frames: frameNames,
    frameRate: 5,
    repeat: -1,
  });
}

function createRunningAnimation(character, scene) {
  var frameNames = scene.anims.generateFrameNames('voicetechchars', {
    start: 1,
    end: 8,
    zeroPad: 2,
    prefix: `${character}/${character}_run_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${character}_run`,
    frames: frameNames,
    frameRate: 10,
    repeat: -1,
  });
}

function createJumpAnimation(character, scene) {
  var frameNames = scene.anims.generateFrameNames('voicetechchars', {
    start: 1,
    end: 4,
    zeroPad: 2,
    prefix: `${character}/${character}_jump_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${character}_jump`,
    frames: frameNames,
    frameRate: 10,
    repeat: 0,
  });
}

function createDieAnimation(character, scene) {
  var frameNames = scene.anims.generateFrameNames('voicetechchars', {
    start: 1,
    end: 5,
    zeroPad: 2,
    prefix: `${character}/${character}_die_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${character}_die`,
    frames: frameNames,
    frameRate: 10,
    repeat: 0,
  });
}

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

export default function animationsFactory(scene) {
  CHARACTERS.forEach(character => {
    createWalkingAnimation(character, scene);
    createRunningAnimation(character, scene);
    createJumpAnimation(character, scene);
    createDieAnimation(character, scene);
    createStandingAnimation(character, scene);
  });

  createCoinAnimation(scene);
  createBlueGemAnimation(scene);
  createRedGemAnimation(scene);
}
