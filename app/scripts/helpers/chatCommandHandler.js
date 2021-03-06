import { canTriggerCommand } from './phaserHelpers';

export const COMMANDS = [
  {
    command: 'run',
    method: 'startRunning',
    event: 'userChatAction',
  },
  {
    command: 'jump',
    method: 'jump',
    event: 'userChatAction',
  },
  {
    command: 'dbag',
    method: 'makeDbag',
    event: 'userChatAction',
  },
  {
    command: 'spin',
    method: 'spin',
    event: 'userChatAction',
  },
  {
    command: 'die',
    method: 'remove',
    event: 'userChatAction',
  },
  {
    command: 'mushroom',
    method: 'makeGiant',
    event: 'userChatAction',
  },
  {
    command: 'booli',
    method: 'tackle',
    event: 'userChatAction',
  },
  {
    command: 'coins',
    method: 'sayCoinsCount',
    event: 'userChatAction',
  },
  {
    command: 'wave',
    method: 'waveJump',
    event: 'userChatAction',
    applyAll: true,
  },
  {
    command: 'lurk',
    method: 'lurk',
    event: 'userChatAction',
  },
  {
    command: 'thechild',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtyoda'],
  },
  {
    command: 'vader',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtwizard'],
  },
  {
    command: 'mandalorian',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtmandalorian'],
  },
  {
    command: 'wonderwoman',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtwonderwoman'],
  },
  {
    command: 'spiderman',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtspiderman'],
  },
  {
    command: 'captainmarvel',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtcaptainmarvel'],
  },
  {
    command: 'superman',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtsuperman'],
  },
  {
    command: 'batman',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtbatman'],
  },
  {
    command: 'blackpanther',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtblackpanther'],
  },
  {
    command: 'captainamerica',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtcaptainamerica'],
  },
  {
    command: 'drstrange',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtdrstrange'],
  },
  {
    command: 'c3po',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtC3PO'],
  },
  {
    command: 'r2d2',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtR2D2'],
  },
  {
    command: 'hulk',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vthulk'],
  },
  {
    command: 'biden',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtbiden'],
  },
  {
    command: 'trump',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vttrump'],
  },
  {
    command: 'thor',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtthor'],
  },
  {
    command: 'groot',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['vtgroot'],
  },
  {
    command: 'princess',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['princess'],
  },
  {
    command: 'snowman',
    method: 'changeCharacter',
    event: 'userChatAction',
    args: ['snowman'],
  },
  {
    command: 'join',
    method: 'addUserSprite',
    event: 'sceneEvent',
  },
  {
    command: 'fireworks',
    method: 'triggerFireworks',
    event: 'sceneEvent',
  },
  {
    command: 'reverse',
    method: 'reverseGravity',
    event: 'sceneEvent',
  },
  {
    command: 'ball',
    method: 'addSpikedBall',
    event: 'sceneEvent',
  },
  {
    command: 'controls',
    method: 'displayControls',
    event: 'sceneEvent',
  },
  {
    command: 'audio',
    method: 'displayAudioCommands',
    event: 'sceneEvent',
  },
  {
    command: 'subs',
    method: 'subCelebrate',
    event: 'sceneEvent',
    private: true,
  },
  {
    command: 'addcoins',
    method: 'simulateCheer',
    event: 'sceneEvent',
    private: true,
  },
  {
    command: 'clearCoins',
    method: 'clearBrowserStorage',
    event: 'sceneEvent',
    private: true,
  },
  {
    command: 'raidTest',
    method: 'raidAlert',
    event: 'sceneEvent',
    private: true,
  },
  {
    command: 'so',
    method: 'voiceShoutOut',
    event: 'sceneEvent',
    private: true,
  },
  {
    command: 'tts',
    method: 'textToSpeech',
    event: 'sceneEvent',
    private: true,
  },
];

export function trigger(scene, command, user, message, flags, extra) {
  const foundCommand = COMMANDS.find(
    c => c.command.toLowerCase() === command.toLowerCase()
  );
  const userLastUsedCommand = extra.sinceLastCommand.user;

  if (!foundCommand) return;
  if (!foundCommand.event) {
    throw new Error('Must provide event name');
  }

  if (canTriggerCommand(foundCommand, flags, userLastUsedCommand)) {
    scene.events.emit(foundCommand.event, {
      user,
      message,
      flags,
      method: foundCommand.method,
      args: foundCommand.args,
      applyAll: foundCommand.applyAll,
    });
  }
}
