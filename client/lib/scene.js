class Scene {

    constructor() {

        this.children = [];

    }

    render() {

        this.children.forEach(function (child) {

            child.render();

        })

    }

}