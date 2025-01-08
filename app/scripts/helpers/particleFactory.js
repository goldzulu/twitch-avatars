/**
 * Creates the explosion particle emitter
 *
 * @export
 * @param {Phaser.Scene} scene
 * @returns {Phaser.GameObjects.Particles.ParticleEmitterManager} emitter
 */
export function buildExplosion(scene) {
  // Create particle emitters using the new syntax
  const smokeEmitter = scene.add.particles(0, 0, 'explosion', {
    frame: ['smoke-puff', 'cloud', 'smoke-puff'],
    angle: { min: 240, max: 300 },
    speed: { min: 200, max: 300 },
    quantity: 6,
    lifespan: 2000,
    alpha: { start: 1, end: 0 },
    scale: { start: 1.5, end: 0.5 },
    emitting: false
  });

  const redEmitter = scene.add.particles(0, 0, 'explosion', {
    frame: 'red',
    angle: { min: 0, max: 360, steps: 32 },
    lifespan: 1000,
    speed: 400,
    quantity: 32,
    scale: { start: 0.3, end: 0 },
    emitting: false
  });

  const muzzleEmitter = scene.add.particles(0, 0, 'explosion', {
    frame: 'muzzleflash2',
    lifespan: 200,
    scale: { start: 2, end: 0 },
    rotate: { start: 0, end: 180 },
    emitting: false
  });

  // Create a container to hold all emitters
  const container = scene.add.container();
  container.add([smokeEmitter, redEmitter, muzzleEmitter]);

  // Add a custom emitParticleAt method to match previous usage
  container.emitParticleAt = function(x, y) {
    smokeEmitter.setPosition(x, y);
    redEmitter.setPosition(x, y);
    muzzleEmitter.setPosition(x, y);
    
    smokeEmitter.explode();
    redEmitter.explode();
    muzzleEmitter.explode();
  };

  return container;
}
