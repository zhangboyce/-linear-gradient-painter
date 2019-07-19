export default class Circle {
    constructor() {
        let width = 400;
        let height = 400;
        let linearGradient = document.getElementsByClassName('linear-gradient')[0];
        linearGradient.style.width = width + 'px';
        linearGradient.style.height = height + 'px';

        let offsetX = linearGradient.offsetLeft;
        let offsetY = linearGradient.offsetTop;

        let centerX = offsetX + width / 2;
        let centerY = offsetY + height / 2;

        this.R = width / 2;
        this.center = {
            X: centerX,
            Y: centerY
        };
    }

    /**
     * 将以页面左上角为原点的坐标系转换为以circle圆心为原点的坐标系
     * @param x 以页面左上角为原点的x坐标
     * @param y 以页面左上角为原点的y坐标
     * @returns {{x: number, y: number}}
     */
    page2Center(x, y) {
        return {
            x: x - this.center.X,
            y: this.center.Y - y
        }
    }

    /**
     * 将以circle圆心为原点的坐标系转换为circle左上角为原点的坐标系
     * @param x 以circle圆心为原点的x坐标
     * @param y 以circle圆心为原点的y坐标
     * @returns {{x: number, y: number}}
     */
    center2Offset(x, y) {
        return {
            x: x + this.R,
            y: this.R - y
        }
    }
}