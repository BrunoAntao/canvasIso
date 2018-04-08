class Sprite {

    constructor(scene, key, x, y, z) {

        let p = isoto2d(x, y, z);

        this.x = x;
        this.y = y;
        this.z = z;

        this.screenx = p.x;
        this.screeny = p.y;

        this.scene = scene;
        this.game = scene.game;

        this.key = key;

        let self = this;

        this.events = {

            over: function () {

            },

            out: function () {

            }

        };

        scene.children.push(this);

        this.game.ctx.drawImage(this.game.cache.array[this.key], this.screenx, this.screeny - 16);

    }

    render() {

        this.game.ctx.drawImage(this.game.cache.array[this.key], this.screenx, this.screeny - 16);

    }
}