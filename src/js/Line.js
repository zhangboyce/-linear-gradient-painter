import $ from "jquery";

export default class Line {
    constructor() {
        this.$line = $('#line');
        this.deg = 0;
    }

    setDeg(deg) {
        this.deg = deg;
        this.$line.css('transform', 'rotate(' + deg + 'deg)');
    }

    getDeg() {
        return this.deg;
    }

    click(callback = () => {}) {
        this.$line.click(e => {
            e.preventDefault();
            e.stopPropagation();

            let x = e.clientX;
            let y = e.clientY;
            callback(x, y);
        });
    }
}