import $ from "jquery";

export default class Point {
    constructor(width, height, circle, r, background, canMove) {
        this.width = width;
        this.height = height;
        this.circle = circle;
        this.r = r;
        this.background = background;
        this.canMove = canMove;
        this.$point = $("<div class='point'></div>");
    }

    top(deg) {
        let __deg__ = Math.abs(deg) * Math.PI / 180;
        return this.circle.R + (-Math.cos(__deg__)*this.r) - this.width / 2;
    }

    left(deg) {
        let __deg__ = Math.abs(deg) * Math.PI / 180;
        return this.circle.R + Math.sin(__deg__)*this.r - this.height / 2;
    }

    startMoving() {
        this.$point.addClass('moving');
    }

    stopMoving() {
        this.$point.removeClass('moving');
    }

    render(deg) {
        this.$point.css('width', this.width + 'px');
        this.$point.css('height', this.height + 'px');
        this.$point.css('background-color', this.background);
        this.$point.css('top', this.top(deg) + 'px');
        this.$point.css('left', this.left(deg) + 'px');

        if (this.canMove) {
            this.$point.addClass('movable');
            this.$point.hover(this.startMoving.bind(this), this.stopMoving.bind(this))
        }

        return this.$point;
    }

    move(callback = () => {}) {
        if (!this.canMove) return;
        this.$point.mousedown(e => {
            e.preventDefault();
            document.onmousemove = ev =>{
                this.startMoving();

                let a = ev.clientX - this.circle.center.X;
                let b = ev.clientY - this.circle.center.Y;
                let deg = Math.atan(Math.abs(a / b)) / (Math.PI / 180);

                if (a > 0 && b > 0) deg = 180 - deg;
                if (a < 0 && b > 0) deg = 180 + deg;
                if (a < 0 && b < 0) deg = 360 - deg;
                deg = Math.round(deg);

                callback(deg);
            };

            document.onmouseup = () => {
                this.stopMoving();
                document.onmousemove = null;
                document.onmouseup = null
            }
        });
    }

    click(callback = () => {}) {
        this.$point.click((e) => {
            e.preventDefault();
            e.stopPropagation();

            callback();
        });
    }

}