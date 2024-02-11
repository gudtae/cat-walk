import './style.css'
import { Game} from 'phaser'
import GameMain from './components';
import PreloadGame from './sceen/prelode';

const canvas = document.getElementById('app') as HTMLCanvasElement


const config = {
  type: Phaser.CANVAS,
  width: 940,
  height: 600,
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT, // Режим масштабирования
    autoCenter: Phaser.Scale.CENTER_BOTH, // Центрировать сцену

  },
  scene: [PreloadGame, GameMain],
};

new Game(config);