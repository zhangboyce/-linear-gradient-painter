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

    mouseMove(callback = () => {}) {
        this.$line.mousemove(e => {
            e.preventDefault();
            e.stopPropagation();

            let x = e.pageX;
            let y = e.pageY;

            callback(x, y);
        })
    }

    __mousePosition__(e) {
        e = e || window.event;
        return {
            x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
            y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop};
    }
}