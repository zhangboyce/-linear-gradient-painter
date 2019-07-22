import $ from "jquery";
import * as utils from './CoordinateUtils';

export default class Point {
    constructor(x, y, background, canMove) {
        this.x = x;
        this.y = y;
        this.width = 12;
        this.height = 12;
        this.canMove = canMove;
        this.$point = $("<div class='point'></div>");
        this.setBackground(background);
    }

    setBackground(color) {
        this.setFirstBackground(color);
        this.setSecondBackground(color);
    }

    setFirstBackground(color) {
        this.first_background = color;
    }

    setSecondBackground(color) {
        this.second_background = color;
    }

    getLinearGradients(headPoint, circle) {
        let percent = this.percent(headPoint, circle);
        let color1 = this.first_background;
        let color2 = this.second_background;

        if (color1 === color2) return [{ percent, color: color1 }];
        else return [{ percent, color: color1 }, { percent, color: color2 }]
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

    render(circle, line) {
        let offset = circle.center2Offset(this.x, this.y);
        let bg_image = this.first_background + ' 50%, ' + this.second_background + ' 50%';
        this.$point.css('width', this.width + 'px');
        this.$point.css('height', this.height + 'px');
        this.$point.css('background-image', 'linear-gradient(' + line.getAngle() + 'deg, ' + bg_image + ')');
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
        this.$point.click(e => {
            e.preventDefault();
            e.stopPropagation();

            callback();
        });
    }

    dblClick(callback = () => {}) {
        this.$point.dblclick(e => {
            e.preventDefault();
            e.stopPropagation();

            callback();
        });
    }

}