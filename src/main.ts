import './style.css'
import { Game} from 'phaser'
import GameMain from './components';
import PreloadGame from './sceen/prelode';
import Valentine from './sceen/valentine';
import Credits from './sceen/credits';

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
      // debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT, // Режим масштабирования
    autoCenter: Phaser.Scale.CENTER_BOTH, // Центрировать сцену
    zoom: 3
  },
  scene: [PreloadGame, GameMain, Valentine, Credits],
};

new Game(config);