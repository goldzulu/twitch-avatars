/*
 *  `app` module
 *  ============
 *
 *  Provides the game initialization routine.
 */

//  Import game instance configuration.
import * as config from '@/config';

/**
 *  Create a `Phaser.Game` instance and boot the game.
 */
export function boot() {
  const game = new Phaser.Game(config);
  return game;
}

boot();
