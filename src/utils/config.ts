import './style.css'
import GameMain from '../sceen/game-main';
import PreloadGame from '../sceen/prelode';
import Valentine from '../sceen/valentine';
import Credits from '../sceen/credits';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 940,
  height: 600,
  parent: 'phaser',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      // debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT, // Режим масштабирования
    autoCenter: Phaser.Scale.CENTER_BOTH, // Центрировать сцену
    zoom: 3
  },
  scene: [PreloadGame, GameMain, Valentine, Credits],
  render: {
    pixelArt: true
  }
};

