class Map {

    constructor(width, length) {

        this.data = [];

        for (let x = 0; x < width; x++) {

            this.data[x] = [];

            for (let y = 0; y < length; y++) {

                this.data[x][y] = null;

            }

        }

    }

    add(tile, x, y) {

        this.data[x][y] = tile;

    }

}