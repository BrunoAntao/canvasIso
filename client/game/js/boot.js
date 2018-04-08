var game = new Game(1920 / 2, 1080 / 2);

game.scene.add('game', new GameScene());

game.scene.start('game');