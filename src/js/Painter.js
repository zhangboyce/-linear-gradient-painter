import Point from './Point';
import $ from "jquery";
import * as utils from './CoordinateUtils';
import ColorPicker from "./ColorPicker";
import Circle from "./Circle";
import Line from "./Line";

export default class Painter {
    constructor() {
        this.points = [];
        this.$painter = $('.linear-gradient .points');
    }

    init() {
        this.colorPicker = new ColorPicker();
        this.circle = new Circle();
        this.line  = new Line(180);

        let headPoint = new Point(0, this.circle.R, '#293462', true);
        let tailPoint = new Point(0, -this.circle.R, '#a0f0b6');
        this.headPoint = headPoint;
        this.tailPoint = tailPoint;

        this.addPoint(headPoint);
        this.addPoint(tailPoint);
        this.render();

        this.line.click((x, y) => {
            let position = this.circle.page2Center(x, y);
            this.colorPicker.open(color => {
                this.addPoint(new Point(position.x, position.y, color));
                this.render();
            });
        });

        this.line.mouseMove((x, y) => {
            let position = this.circle.page2Center(x, y);
            let distance = utils.distance(this.headPoint, position);

            let percent = distance / (2 * this.circle.R);
            percent = Math.round(percent * 100);

            console.log(percent);
        });
    }

    __getBgs__ () {
        let bgs = [];
        this.points.forEach(point => {
            let linear = point.getLinearGradients(this.headPoint, this.circle);
            bgs.push(...linear)
        });
        return bgs;
    };

    __drawBg__ () {
        let bgs = this.__getBgs__();
        bgs.sort((a, b) => a.percent - b.percent );
        let result = bgs.map(value => value.color + ' ' + Math.round(value.percent * 100) + '%').join(',');

        let bgImage = 'linear-gradient(' + this.line.getAngle() + 'deg, ' + result + ')';
        $('.linear-gradient').css('background-image', bgImage);
        $('.container').css('background-image', bgImage);
        $('.output p').text(bgImage);
    };

    addPoint(point) {
        this.points.push(point);
    }

    render() {
        this.$painter.html('');
        this.__drawBg__();
        this.points.forEach((point, i) => {
            let $point = point.render(this.circle, this.line);
            $point.attr('index', i);
            this.$painter.append($point);

            point.move((pageX, pageY) => {
                let position = this.circle.page2Center(pageX, pageY);
                let angle = utils.angle(position.x, position.y);
                this.points.forEach(p => {
                    p.rotate(angle, this.headPoint, this.circle);
                });
                this.line.rotate(angle);
                this.render();
            });

            point.click(() => {
                this.colorPicker.open(color => {
                    point.setFirstBackground(color);
                    this.render();
                });
            });

            point.dblClick(() => {
                this.colorPicker.open(color => {
                    point.setSecondBackground(color);
                    this.render();
                });
            });
        });
    }
}