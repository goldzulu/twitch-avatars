const CHARACTERS = ['peasant', 'princess', 'knight', 'wizard_2', 'skeleton'];

function createStandingAnimation(character, scene) {
  var frameNames = [{
    frame: `${character}/standing/${character}.png`,
    key: 'characters',
  }];

  scene.anims.create({ key: `${character}_standing`, frames: frameNames });
}

function createWalkingAnimation(character, scene) {
  var frameNames = scene.anims.generateFrameNames('characters', {
    start: 1,
    end: 8,
    zeroPad: 3,
    prefix: `${character}/walk/${character}_walk_`,
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
  var frameNames = scene.anims.generateFrameNames('characters', {
    start: 1,
    end: 8,
    zeroPad: 3,
    prefix: `${character}/run/${character}_run_`,
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
  var frameNames = scene.anims.generateFrameNames('characters', {
    start: 1,
    end: 4,
    zeroPad: 3,
    prefix: `${character}/jump/${character}_jump_`,
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
  var frameNames = scene.anims.generateFrameNames('characters', {
    start: 1,
    end: 5,
    zeroPad: 3,
    prefix: `${character}/die/${character}_die_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${character}_die`,
    frames: frameNames,
    frameRate: 10,
    repeat: 0,
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
}
