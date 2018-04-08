class Game {

    constructor(width, height) {

        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');

        this.bgcolor = '#000000';

        let self = this;

        this.camera = {

            x: 0,
            y: 0

        }

        this.cache = {

            array: [],

            add: function (src, key) {

                let image = new Image();
                image.src = src;
                this.array[key] = image;

            }

        }

        this.scene = {

            active: null,
            array: [],

            add: function (key, scene) {

                this.array[key] = scene;
                scene.game = self;
                scene.load();

            },

            remove: function (key) {

                if (this.array[key]) {

                    this.array.splice(key, 1);

                }

            },

            start: function (key) {

                this.array[key].start();
                this.active = this.array[key];

            }

        }

        document.addEventListener('mousemove', function (event) {

            let x = event.pageX;
            let y = event.pageY;

            let pos = screentoiso(self, x, y);

            self.scene.active.children.forEach(function (tile) {

                checkinbounds(pos, tile);

            });

        })

        self = this;

        (function loop() {

            requestAnimationFrame(loop);
            self.render();

        })()

    }

    render() {

        this.ctx.fillStyle = this.bgcolor;

        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();

        this.ctx.translate(this.camera.x, this.camera.y);

        if (this.scene.active) {

            this.scene.active.render();

        }

        this.ctx.restore();

    }

}

function checkinbounds(pos, tile) {

    if (pos.x > tile.x && pos.x < tile.x + 1 && pos.y > tile.y && pos.y < tile.y + 1) {

        if (tile.events.over) {

            tile.events.over();

        }

    } else {

        if (tile.events.out) {

            tile.events.out();

        }

    }

}