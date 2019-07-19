import Point from './Point';
import $ from "jquery";

export default class Painter {
    constructor(circle, line, colorPicker) {
        this.circle = circle;
        this.line = line;
        this.colorPicker = colorPicker;
        this.points = [];
        this.$painter = $('.linear-gradient .points');
    }

    init() {
        this.addPoint(12, 12, this.circle.R, '#293462', true);
        this.addPoint(10, 10, -this.circle.R, '#a0f0b6');
        this.render();

        this.line.click((x, y) => {
            let a = x - this.circle.center.X;
            let b = y - this.circle.center.Y;
            let r = Math.sqrt(a * a + b * b);

            this.colorPicker.open(color => {
                this.addPoint(10, 10, r, color);
                this.render();
            });
        });
    }

    __getBgs__ () {
        let bgs = [];
        this.points.forEach(point => {
            let r = point.r;
            let bg = point.background;
            bgs.push({ percent: (this.circle.R - r) / (2*this.circle.R), color: bg })
        });
        return bgs;
    };

    __drawBg__ () {
        let bgs = this.__getBgs__();
        bgs.sort((a, b) => a.percent - b.percent );
        let result = bgs.map(value => value.color + ' ' + (value.percent * 100) + '%').join(',');

        let bgImage = 'linear-gradient(' + (180 + this.line.getDeg()) + 'deg, ' + result + ')';
        $('.linear-gradient').css('background-image', bgImage);
        $('.container').css('background-image', bgImage);
        $('.output p').text(bgImage);
    };

    addPoint(width, height, r, background, canMove = false) {
        let point = new Point(width, height, this.circle, r, background, canMove);
        this.points.push(point);
    }

    render() {
        this.$painter.html('');
        this.__drawBg__();
        this.points.forEach((point, i) => {
            let $point = point.render(this.line.getDeg());
            $point.attr('index', i);
            this.$painter.append($point);

            point.move(deg => {
                this.line.setDeg(deg);
                this.render();
            });

            point.click(() => {
                this.colorPicker.open(color => {
                    point.background = color;
                    this.render();
                });
            });
        });
    }
}