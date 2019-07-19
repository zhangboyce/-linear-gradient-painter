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
            X: centerX, Y: centerY
        };
    }
}