export default function ImageRepository(onload) {
  this.imagesToLoad = 3;

  this.background = new Image();
  this.background.src = require("background.png");
  this.background.onload = e => --this.imagesToLoad || onload();

  this.ship = new Image();
  this.ship.src = require("spaceship.png");
  this.ship.onload = e => --this.imagesToLoad || onload();

  this.laser = new Image();
  this.laser.src = require("laser.png");
  this.laser.onload = e => --this.imagesToLoad || onload();

  this.enemyLaser = new Image();
  this.enemyLaser.src = require("enemy-laser.png");
  this.laser.onload = e => --this.imagesToLoad || onload();

  this.enemy = new Image();
  this.enemy.src = require("enemy.png");
  this.enemy.onload = e => --this.imagesToLoad || onload();
}