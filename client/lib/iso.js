class Tile extends Sprite {

    constructor(scene, x, y, z) {

        super(scene, 'tile', x, y, z)

        let self = this;

        this.events = {

            over: function () {

                self.key = 'tile_over';

            },

            out: function () {

                self.key = 'tile';

            }

        };

    }

    render() {

        super.render();

    }

}

function isoto2d(x, y, z) {

    return { x: 32 * x + 32 * y, y: 16 * x - 16 * y - z * 32 };

}

function screentoiso(game, x, y) {

    x = x - game.camera.x;
    y = y - game.camera.y;

    return { x: (x / 32 + y / 16) / 2, y: - (y / 16 - (x / 32)) / 2 };

}