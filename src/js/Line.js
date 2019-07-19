import $ from "jquery";

export default class Line {
    constructor(angle) {
        this.$line = $('#line');
        this.angle = angle;
    }

    rotate(angle) {
        this.angle = 270 - angle;
        this.$line.css('transform', 'rotate(' + this.angle + 'deg)');
    }

    getAngle() {
        return this.angle;
    }

    click(callback = () => {}) {
        this.$line.click(e => {
            e.preventDefault();
            e.stopPropagation();

            let x = e.pageX;
            let y = e.pageY;

            callback(x, y);
        });
    }
}