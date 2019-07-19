import './less/main.less';
import ColorPicker from './js/ColorPicker';
import Circle from './js/Circle';
import Line from './js/Line';
import Painter from './js/Painter';

let colorPicker = new ColorPicker();
let circle = new Circle();
let line  = new Line();
let painter = new Painter(circle, line, colorPicker);

painter.init();