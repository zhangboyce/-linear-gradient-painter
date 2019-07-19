import $ from "jquery";
import * as utils from './CoordinateUtils';

export default class Point {
    constructor(x, y, background, canMove) {
        this.x = x;
        this.y = y;
        this.width = 12;
        this.height = 12;
        this.background = background;
        this.canMove = canMove;
        this.$point = $("<div class='point'></div>");
    }

    rotate(angle, headPoint, circle) {
        let distance = utils.distance(headPoint, this);
        angle = distance <= circle.R ? angle : 180 + angle;
        let position = utils.rotate(this.x, this.y, angle);
        this.x = position.x;
        this.y = position.y;
    }

    percent(headPoint, circle) {
        let distance = utils.distance(headPoint, this);
        return distance / (2 * circle.R);
    }

    startMoving() {
        this.$point.addClass('moving');
    }

    stopMoving() {
        this.$point.removeClass('moving');
    }

    render(circle) {
        let offset = circle.center2Offset(this.x, this.y);
        this.$point.css('width', this.width + 'px');
        this.$point.css('height', this.height + 'px');
        this.$point.css('background-color', this.background);
        this.$point.css('top', (offset.y - this.height / 2) + 'px');
        this.$point.css('left', (offset.x - this.width  / 2) + 'px');

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

                callback(ev.pageX, ev.pageY);
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