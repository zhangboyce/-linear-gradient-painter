/**
 * 根据以circle圆心为原点的坐标值计算原点到该点向量相对于X轴的夹角
 * @param x 以circle圆心为原点的x坐标
 * @param y 以circle圆心为原点的y坐标
 * @returns {number}
 */
export function angle(x, y) {
    if (x === 0 && y === 0) return 0;

    let l = Math.sqrt(x*x + y*y);
    let a = Math.acos(x/l);
    let ret = a * 180 / Math.PI;
    if (y < 0) {
        return Math.round(360 - ret);
    }
    return Math.round(ret);
}

/**
 * 将以circle圆心为原点的坐标系中的一点旋转angle角度后新的坐标值
 * @param x
 * @param y
 * @param angle
 * @returns {{x: number, y: number}}
 */
export function rotate(x, y, angle) {
    let r = Math.sqrt(x*x + y*y);
    return {
        x: r * Math.cos(angle * Math.PI / 180),
        y: r * Math.sin(angle * Math.PI / 180)
    }
}

export function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}