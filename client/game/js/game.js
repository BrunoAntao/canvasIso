class GameScene extends Scene {

    load() {

        game.cache.add('client/assets/tile.png', 'tile');
        game.cache.add('client/assets/tile_over.png', 'tile_over');

    }

    start() {

        game.camera.x = 32;
        game.camera.y = 200;

        let map = new Map(10, 10);

        for (let x = 0; x < 10; x++) {

            for (let y = 0; y < 10; y++) {

                map.add(x, y, new Tile(this, x, y, 0))

            }

        }

    }

    render() {

        super.render();

    }

}