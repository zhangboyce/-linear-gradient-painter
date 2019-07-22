import $ from 'jquery';

function colors() {
    const $colors = $('#color-picker');
    function open() {
        $colors.addClass('show');
    }
    function close() {
        $colors.removeClass('show');
    }

    function animateCSS($target, animationName, callback) {
        $target.addClass('fast animated '+ animationName);

        if (callback && typeof callback === 'function') {
            $target.bind('animationend', handleAnimationEnd);
        }
        function handleAnimationEnd() {
            $target.removeClass('fast animated '+ animationName);
            $target.unbind('animationend', handleAnimationEnd);
            callback($target)
        }
    }

    function render(colors, callback = () => {}) {
        $('.color').remove();
        colors.forEach(function (color) {
            let $color = $("<div class='color'></div>");
            color.forEach(function (c, i) {
                let $item = $("<div class='color-item'></div>");
                $item.css('background', c);
                $item.css('height', '25%');

                $item.click(function () {
                    if (callback) {
                        callback(c);
                    }
                    close();

                });
                $color.append($item);
            });

            $('.colors').append($color);
            animateCSS($color, 'zoomIn');
        });
    }

    return { open, close, render, target: $colors }
}

export default class ColorPicker {
    constructor(count = 12) {
        this.count = count;
        this.callback = () => {};
        this.$colors = colors();
        this.colors = [
            ["#eeeeee", "#00adb5", "#393e46", "#222831"],
            ["#6a2c70", "#b83b5e", "#f08a5d", "#f9ed69"],
            ["#95e1d3", "#eaffd0", "#fce38a", "#f38181"],
            ["#eaeaea", "#ff2e63", "#252a34", "#08d9d6"],
            ["#fc5185", "#f5f5f5", "#3fc1c9", "#364f6b"],
            ["#ffffd2", "#fcbad3", "#aa96da", "#a8d8ea"],
            ["#71c9ce", "#a6e3e9", "#cbf1f5", "#e3fdfd"],
            ["#40514e", "#11999e", "#30e3ca", "#e4f9f5"],
            ["#8785a2", "#f6f6f6", "#ffe2e2", "#ffc7c7"],
            ["#abedd8", "#46cdcf", "#3d84a8", "#48466d"],
            ["#112d4e", "#3f72af", "#dbe2ef", "#f9f7f7"],
            ["#ffde7d", "#f6416c", "#f8f3d4", "#00b8a9"],
            ["#53354a", "#903749", "#e84545", "#2b2e4a"],
            ["#311d3f", "#522546", "#88304e", "#e23e57"],
            ["#a5dee5", "#e0f9b5", "#fefdca", "#ffcfdf"],
            ["#14ffec", "#0d7377", "#323232", "#212121"],
            ["#61c0bf", "#bbded6", "#fae3d9", "#ffb6b9"],
            ["#ffaaa5", "#ffd3b6", "#dcedc1", "#a8e6cf"],
            ["#cca8e9", "#c3bef0", "#cadefc", "#defcf9"],
            ["#3e4149", "#444f5a", "#ff9999", "#ffc8c8"],
            ["#ff165d", "#ff9a00", "#f6f7d7", "#3ec1d3"],
            ["#521262", "#6639a6", "#3490de", "#6fe7dd"],
            ["#355c7d", "#6c5b7b", "#c06c84", "#f67280"],
            ["#ffd460", "#f07b3f", "#ea5455", "#2d4059"],
            ["#edb1f1", "#d59bf6", "#9896f1", "#8ef6e4"],
            ["#99ddcc", "#f6f6f6", "#ffe2e2", "#bad7df"],
            ["#c4edde", "#7ac7c4", "#f73859", "#384259"],
            ["#cabbe9", "#ffcef3", "#fdfdfd", "#a1eafb"],
            ["#ff8c94", "#ffaaa6", "#ffd3b5", "#dcedc2"],
            ["#ff5722", "#eeeeee", "#00adb5", "#303841"],
            ["#fecea8", "#ff847c", "#e84a5f", "#2a363b"],
            ["#283c63", "#928a97", "#fbe8d3", "#f85f73"],
            ["#1e2022", "#52616b", "#c9d6df", "#f0f5f9"],
            ["#ff7e67", "#fafafa", "#a2d5f2", "#07689f"],
            ["#a56cc1", "#a6acec", "#ace7ef", "#cefff1"],
            ["#e8ffe8", "#a6fff2", "#74f9ff", "#00e0ff"],
            ["#ff9de2", "#8c82fc", "#b693fe", "#7effdb"],
            ["#625772", "#f9a1bc", "#fefaec", "#a9eee6"],
            ["#f57170", "#f5f5f5", "#10ddc2", "#15b7b9"],
            ["#f25d9c", "#b61aae", "#590d82", "#0c056d"],
            ["#0dceda", "#6ef3d6", "#c6fce5", "#ebfffa"],
            ["#878ecd", "#b9bbdf", "#dde7f2", "#dff4f3"],
            ["#769fcd", "#b9d7ea", "#d6e6f2", "#f7fbfc"],
            ["#ffaaa5", "#ffd3b6", "#fdffab", "#a8e6cf"],
            ["#d7fbe8", "#9df3c4", "#62d2a2", "#1fab89"],
            ["#fc85ae", "#9e579d", "#574b90", "#303a52"],
            ["#fbafaf", "#f2c6b4", "#f3e8cb", "#99e1e5"],
            ["#a6d0e4", "#f9ffea", "#ffecda", "#d4a5a5"],
            ["#c5e3f6", "#fc5c9c", "#fccde2", "#fcefee"],
            ["#eeeeee", "#d72323", "#3a4750", "#303841"],
            ["#7e6bc4", "#c79ecf", "#d6c8ff", "#fef0ff"],
            ["#537780", "#11d3bc", "#55e9bc", "#fffcca"],
            ["#ed8d8d", "#8d6262", "#4d4545", "#393232"],
            ["#dbedf3", "#f73859", "#404b69", "#283149"],
            ["#f5c7f7", "#a393eb", "#5e63b6", "#27296d"],
            ["#fa4659", "#f0fff3", "#c6f1e7", "#11cbd7"],
            ["#f3f798", "#eab4f8", "#fcc8f8", "#c7f5fe"],
            ["#7098da", "#6eb6ff", "#90f2ff", "#e0fcff"],
            ["#fff5a5", "#ffaa64", "#ff8264", "#ff6464"],
            ["#004a7c", "#005691", "#e8f1f5", "#fafafa"],
            ["#ffc93c", "#ff9a3c", "#ff6f3c", "#155263"],
            ["#bfcfff", "#c8e7ed", "#ffffc2", "#ffa5a5"],
            ["#e3e3e3", "#f95959", "#455d7a", "#233142"],
            ["#f5f5f5", "#d3d4d8", "#3fbac2", "#4d606e"],
            ["#8971d0", "#7dace4", "#95e8d7", "#adf7d1"],
            ["#625772", "#f38181", "#fefaec", "#a9eee6"],
            ["#e67a7a", "#ffebb7", "#fff4e1", "#9ddcdc"],
            ["#ffbd39", "#e61c5d", "#930077", "#3a0088"],
            ["#649dad", "#66c6ba", "#a4e5d9", "#c8f4de"],
            ["#f2f4c3", "#ffdcf5", "#fdc7ff", "#c7f3ff"],
            ["#fecea8", "#ff847b", "#e84a5f", "#2a363b"],
            ["#fbac91", "#fbe1b6", "#7fdfd4", "#a7efe9"],
            ["#f76b8a", "#fcfefe", "#eaf6f6", "#66bfbf"],
            ["#d2ecf9", "#1891ac", "#1f5f8b", "#253b6e"],
            ["#d9faff", "#00bbf0", "#005792", "#00204a"],
            ["#ff7c38", "#e03e36", "#b80d57", "#700961"],
            ["#4a266a", "#7f4a88", "#de95ba", "#ffd9e8"],
            ["#2f9296", "#46b7b9", "#87dfd6", "#dff5f2"],
            ["#6c5b7c", "#c06c84", "#f67280", "#f8b595"],
            ["#c86b85", "#e6a4b4", "#f3d7ca", "#f5eee6"],
            ["#c0ffc2", "#fdffba", "#ffeab6", "#f69d9d"],
            ["#f67280", "#c06c84", "#6c5b7b", "#35477d"],
            ["#163172", "#1e56a0", "#d6e4f0", "#f6f6f6"],
            ["#7c7575", "#b8b0b0", "#dfd3d3", "#fbf0f0"],
            ["#ba52ed", "#ff99fe", "#a4f6f9", "#e4fffe"],
            ["#f2bbbb", "#ed93cb", "#ca82f8", "#a1d9ff"],
            ["#f8ecfd", "#c264fe", "#a82ffc", "#7a08fa"],
            ["#80d6ff", "#edf798", "#fab57a", "#f06868"],
            ["#00fff5", "#00adb5", "#393e46", "#222831"],
            ["#a7ff83", "#17b978", "#086972", "#071a52"],
            ["#537791", "#c1c0b9", "#f7f6e7", "#e7e6e1"],
            ["#1f4e5f", "#79a8a9", "#aacfd0", "#f4f7f7"],
            ["#aedefc", "#fff6f6", "#ffdfdf", "#fb929e"],
            ["#2eb872", "#a3de83", "#feffe4", "#fa4659"],
            ["#8f8787", "#ebcbae", "#f9f9f9", "#a6e4e7"],
            ["#f19584", "#fea386", "#f6e4c4", "#29c6cd"],
            ["#d988bc", "#ffa8b8", "#ffd2a5", "#ffffc1"],
            ["#70a1d7", "#a1de93", "#f7f48b", "#f47c7c"],
            ["#34495e", "#5da0a2", "#aacfd0", "#f4f7f7"],
            ["#355c7d", "#c06c84", "#f67280", "#f8b195"],
            ["#ff8260", "#ff4057", "#900048", "#240041"],
            ["#29252c", "#33425b", "#d8e9f0", "#f33535"],
            ["#f1c40f", "#34495e", "#ecf0f1", "#3498db"],
            ["#eeeeee", "#00adb5", "#3a4750", "#303841"],
            ["#eeeeee", "#4ecca3", "#393e46", "#232931"],
            ["#756c83", "#f38181", "#b9e1dc", "#fbfbfb"],
            ["#ac73ff", "#aca8ff", "#9de5ff", "#d5fdff"],
            ["#7e80ff", "#ebc6ff", "#fbeeff", "#c7ffff"],
            ["#0245a3", "#8fbaf3", "#bdf1f6", "#f2fcfc"],
            ["#ffcee4", "#fb90b7", "#d01257", "#0f1021"],
            ["#048998", "#3bb4c1", "#e3e3e3", "#f6f5f5"],
            ["#4797b1", "#c5ecbe", "#f7f3ce", "#ffdede"],
            ["#ea0599", "#9a0f98", "#6a0572", "#39065a"],
            ["#56132a", "#741938", "#c61951", "#f64662"],
            ["#00eaff", "#1f8ea3", "#284184", "#020438"],
            ["#34495e", "#22313f", "#8dc6ff", "#e4f1fe"],
            ["#fe9797", "#dd5b82", "#913175", "#560764"],
            ["#427996", "#645c84", "#a2738c", "#eaafaf"],
            ["#eafff7", "#afffdf", "#49beb7", "#fc345c"],
            ["#264e86", "#0074e4", "#74dbef", "#eff0f4"],
            ["#403f48", "#596c68", "#95a792", "#e3d9ca"],
            ["#ff89c0", "#e3ffc3", "#6df1cc", "#2fc5cc"],
            ["#f6c7c7", "#fd94b4", "#ff467e", "#f12b6b"],
            ["#ffc300", "#ec610a", "#a40a3c", "#6b0848"],
            ["#1d2786", "#6a65d8", "#ffcdcd", "#ffe6eb"],
            ["#f6fcae", "#d89fff", "#c7f5ff", "#ffabe5"],
            ["#00c9b1", "#005d6c", "#00043c", "#ffa3ac"],
            ["#3d6cb9", "#00d1ff", "#00fff0", "#fafaf6"],
            ["#a3f7bf", "#29a19c", "#435055", "#27323a"],
            ["#7c73e6", "#c4c1e0", "#ffe9e3", "#fafafa"],
            ["#95e1d3", "#d6f7ad", "#fce38a", "#f38181"],
            ["#f56262", "#fca180", "#ffd480", "#fffe9f"],
            ["#454553", "#4aa0d5", "#d8e9f0", "#eb586f"],
            ["#f8b195", "#f67280", "#c06c84", "#6c567b"],
            ["#ffe8d5", "#fdb87d", "#ff8364", "#ff4d4d"],
            ["#59606d", "#70acb1", "#c6f1e7", "#f0fff3"],
            ["#474744", "#2994b2", "#fffbe0", "#ffb400"],
            ["#6892d5", "#79d1c3", "#c9fdd7", "#f8fcfb"],
            ["#9efcb4", "#f5fc9e", "#fddd8a", "#fd9191"],
            ["#f7e9e3", "#ffc0c2", "#6dc9c8", "#0e3150"],
            ["#03414d", "#72dfd0", "#a0f6d2", "#e6f8f6"],
            ["#e7e7de", "#008891", "#00587a", "#0f3057"],
            ["#616161", "#8aae92", "#c4e3cb", "#f4f9f4"],
            ["#470031", "#971549", "#cf455c", "#ff9898"],
            ["#685454", "#ea8a8a", "#ebd5d5", "#f2f2f2"],
            ["#163a5f", "#1d566e", "#21aba5", "#45eba5"],
            ["#fff8b5", "#b5ff7d", "#52d681", "#00ad7c"],
            ["#fde9c9", "#fcc29a", "#13829b", "#29d2e4"],
            ["#f60c86", "#fff6a2", "#9feed1", "#11cbd7"],
            ["#e8ffc1", "#9ef5cf", "#51dacf", "#0278ae"],
            ["#fcb2bf", "#cf56a1", "#8b2f97", "#511e78"],
            ["#353940", "#3e92a3", "#dfe0d4", "#ff5335"],
            ["#ffd6d6", "#fca7a7", "#fc624d", "#18587a"],
            ["#1a3c40", "#144d53", "#307672", "#e4eddb"],
            ["#cffdf8", "#65c0ba", "#216583", "#f76262"],
            ["#eeeeee", "#0092ca", "#393e46", "#222831"],
            ["#04f2d5", "#01a7a3", "#04837b", "#015051"],
            ["#8a79af", "#d38cad", "#ffd2a5", "#ffffc1"],
            ["#6e5773", "#d45d79", "#ea9085", "#e9e2d0"],
            ["#5a92af", "#86c1d4", "#9cd9de", "#d9f9f4"],
            ["#1f4e5f", "#0881a3", "#f4e7d3", "#f9f8ed"],
            ["#e3eff3", "#cde3eb", "#6e828a", "#143a52"],
            ["#3d0240", "#137083", "#b7b7b7", "#fae3e3"],
            ["#8a1253", "#c51350", "#e8751a", "#fda403"],
            ["#bb5a5a", "#e79e85", "#eaceb4", "#f2e9d0"],
            ["#3090a1", "#7bcecc", "#fef8e6", "#bc5148"],
            ["#757a79", "#9ba6a5", "#aeccc6", "#bbe9db"],
            ["#3b4a6b", "#22b2da", "#f0d43a", "#f23557"],
            ["#efd510", "#f2910a", "#e94822", "#2c2d34"],
            ["#d7f8f7", "#bee4d2", "#fab2ac", "#eda1c1"],
            ["#ffbbe1", "#fc7fb6", "#dd356e", "#b80257"],
            ["#476269", "#40a798", "#f1f1f1", "#f5e1da"],
            ["#ccffec", "#ffdede", "#ffe8cf", "#fdfdc4"],
            ["#fbd0f5", "#f7f680", "#94f6f2", "#d7aef3"],
            ["#dbedf3", "#00818a", "#404b69", "#283149"],
            ["#fde9c9", "#ea5455", "#2d4059", "#343434"],
            ["#512e67", "#c54c82", "#ff6699", "#fafafa"],
            ["#ffacac", "#e45a84", "#583c87", "#3e1e68"],
            ["#fc5185", "#fce38a", "#3fc1c9", "#364f6b"],
            ["#141010", "#680747", "#c3195d", "#f70776"],
            ["#020205", "#e43a19", "#f2f4f7", "#111f4d"],
            ["#ffe084", "#ffc057", "#f98b60", "#ea5959"],
            ["#f6f6f6", "#ee2b47", "#2c2e3e", "#34374c"],
            ["#fcd2c2", "#ffbbbb", "#0b3846", "#294a66"],
            ["#ececda", "#ff304f", "#0e2f56", "#118df0"],
            ["#e8d5b7", "#f9b248", "#fc3a52", "#0e2431"],
            ["#ebf7fd", "#a5def1", "#36506c", "#233142"],
            ["#2e3a87", "#1972a4", "#2cc4cb", "#73f7dd"],
            ["#5c8d89", "#74b49b", "#a7d7c5", "#d3f6d1"],
            ["#6c737e", "#7393a7", "#b5cfd8", "#e8ecf1"],
            ["#eeeeee", "#f6c90e", "#3a4750", "#303841"],
            ["#0f4137", "#12776f", "#f9c7cf", "#e7f5f2"],
            ["#4ba2ac", "#50c9ba", "#9ee6cf", "#f0eec9"],
            ["#f6318c", "#fff2be", "#a0eecc", "#36d1c4"],
            ["#b30753", "#e41655", "#280f34", "#bff4ed"],
            ["#f2855e", "#d7eef2", "#f6f6e9", "#194769"],
            ["#ff5733", "#c70039", "#900c3f", "#581845"],
            ["#ff5126", "#fcedda", "#b6d7de", "#daebee"],
            ["#476268", "#40a798", "#f1f1f1", "#f5e1da"],
            ["#f7f7f7", "#93deff", "#606470", "#323643"],
            ["#122d42", "#3e6b89", "#3dd2cc", "#cbf9da"],
            ["#ea5455", "#f6f6f6", "#ffb400", "#2d4059"],
            ["#f05941", "#be3144", "#872341", "#2f1b41"],
            ["#ffaded", "#c768ff", "#7045ff", "#83ffe1"],
            ["#ffffdf", "#3a718c", "#5ea3a6", "#f0bebe"],
            ["#919190", "#c4eada", "#fcf3ca", "#ef7b7b"],
            ["#48466d", "#0081c6", "#46cdcf", "#abedd8"],
            ["#3f4b83", "#41a4c3", "#58d5d3", "#f8d5f0"],
            ["#ea4961", "#f5827d", "#fcceaa", "#9bb899"],
            ["#f6f6f6", "#fc3c3c", "#0f4471", "#083358"],
            ["#ffe98a", "#c84771", "#61105e", "#280b45"],
            ["#555273", "#65799b", "#b6d5e1", "#e2eff1"],
            ["#ffd8d8", "#e99b9b", "#50595c", "#302939"],
            ["#fff8d2", "#fffbf3", "#ffd7e9", "#eb89b5"],
            ["#4a4a4a", "#ffcd38", "#ffdd67", "#f3f3f3"],
            ["#ffedb2", "#ffbf87", "#ff9867", "#ff4545"],
            ["#fd367e", "#932b77", "#4e1184", "#0e1555"],
            ["#bdc3c7", "#ecf0f1", "#34495e", "#2c3e50"],
            ["#ecf2f9", "#c8d9eb", "#f0d9da", "#f9ecec"],
            ["#233b6e", "#415f9d", "#d3d6db", "#eff0f4"],
            ["#eeeeee", "#fd7014", "#393e46", "#222831"],
            ["#283e56", "#1989ac", "#fef4e8", "#970747"],
            ["#1a0841", "#4f9da6", "#ffad5a", "#ff5959"],
            ["#6730ec", "#7984ee", "#a9d2ff", "#d2f6fc"],
            ["#623448", "#973961", "#d62b70", "#ff006c"],
            ["#94f3e4", "#37aa9c", "#333f44", "#1a1a1b"],
            ["#fa7f7f", "#f8fba2", "#a0e4b0", "#c2fcd9"],
            ["#be3144", "#303841", "#3a4750", "#d3d6db"],
            ["#52575d", "#41444b", "#dfd8c8", "#cabfab"],
            ["#f1bbd5", "#a12559", "#5f1854", "#3b0944"],
            ["#f9f9f9", "#ff7a8a", "#113a5d", "#062743"],
            ["#3b577d", "#44679f", "#c0d9e5", "#ddf5f7"],
            ["#5c2626", "#b74242", "#ea7362", "#ffd6b6"],
            ["#ff8364", "#ffb677", "#ffd98e", "#6bd5e1"],
            ["#ffb6ff", "#db97ff", "#a100ff", "#9ffbfb"],
            ["#fdffe7", "#c9fdd7", "#99f0ca", "#8c7676"],
            ["#0de2ea", "#0f81c7", "#06648c", "#015668"],
            ["#ec625f", "#313131", "#414141", "#525252"],
            ["#fbffb1", "#ffccfc", "#ffa8ec", "#eb76ff"],
            ["#5782bb", "#64d7d6", "#fffeec", "#c4aff0"],
            ["#264e86", "#5e88fc", "#74dbef", "#afffff"],
            ["#27253d", "#326765", "#7da87b", "#f5f5c6"],
            ["#f3ffb9", "#a6ed8e", "#1aa59a", "#1b5a7a"],
            ["#6ef7c8", "#5cc1b3", "#757882", "#ff6473"],
            ["#1d242b", "#0077c0", "#c7eeff", "#fafafa"],
            ["#2c3e50", "#2980b9", "#33cccc", "#ecf0f1"],
            ["#6356e5", "#55b3f3", "#90eee1", "#f3f6f6"],
            ["#ac005d", "#f85959", "#ff9f68", "#feff89"],
            ["#e9b5d2", "#951556", "#561050", "#35013f"],
            ["#ffc4d0", "#f7ddde", "#fbe8e7", "#fcf5ee"],
            ["#ff7844", "#a64942", "#53354a", "#1b1f3a"],
            ["#390050", "#5a5d9d", "#6bc5d2", "#e1f5f2"],
            ["#e14594", "#7045af", "#2b3595", "#182952"],
            ["#0d3446", "#176d81", "#71adb5", "#d8dfe2"],
            ["#aaffc7", "#5fcc9c", "#215b63", "#232855"],
            ["#ff8ba0", "#e41f7b", "#86003c", "#000000"],
            ["#ff0592", "#fc5bb6", "#ffbee3", "#fff6fb"],
            ["#8c54a1", "#aea1ea", "#b2ebf9", "#fafbd4"],
            ["#ffbe00", "#e6e6d4", "#1c819e", "#005874"],
            ["#83b271", "#abcb89", "#d2ea9b", "#e7f0d2"],
            ["#e8ffc1", "#a5ecd7", "#51adcf", "#0278ae"],
            ["#ff7070", "#965f8a", "#4f5e7f", "#4ac6b7"],
            ["#97ecc5", "#00dbe7", "#01aac1", "#00649f"],
            ["#eb55bf", "#b292ea", "#8bdbf5", "#f1ffd9"],
            ["#65c6c4", "#408ab4", "#34699a", "#113f67"],
            ["#8ff5d2", "#fcffc9", "#faf885", "#f79486"],
            ["#2c2c2c", "#ff5f5f", "#83ffe6", "#fcfcfc"],
            ["#5e616a", "#e8aa8c", "#e2dcd5", "#f9f3e6"],
            ["#f4fa9c", "#f469a9", "#ba53de", "#88bef5"],
            ["#ffd6a4", "#fde9df", "#fffdfb", "#0881a3"],
            ["#f5eded", "#d72323", "#3e3636", "#000000"],
            ["#40514e", "#11999e", "#30e3ca", "#f3f6f6"],
            ["#ffcab0", "#ffebbb", "#fdffcd", "#e0ffcd"],
            ["#f8d99b", "#f8a79b", "#e45171", "#002c6a"],
            ["#957dad", "#d291bc", "#fec8d8", "#ffdfd3"],
            ["#2552ac", "#597fca", "#5ac8d8", "#f1f4f6"],
            ["#fd5f00", "#f6f6e9", "#005792", "#13334c"],
            ["#eae7e7", "#f9f8eb", "#76b39d", "#155e63"],
            ["#203562", "#3e588f", "#c0c5cd", "#e3e8f8"],
            ["#295e6a", "#dfeff0", "#f6f6f6", "#c2faf1"],
            ["#fdf6f6", "#a5e9e1", "#388186", "#2e2b2b"],
            ["#0f0766", "#59057b", "#ab0e86", "#e01171"],
            ["#226b80", "#35b0ab", "#c5f0a4", "#faffb8"],
            ["#e5a5ff", "#7b6cf6", "#5432d3", "#241e92"],
            ["#6789ba", "#7ec0e4", "#f02a71", "#14103b"],
            ["#596e79", "#c7b198", "#dfd3c3", "#f0ece2"],
            ["#dbedf3", "#da0463", "#404b69", "#283149"],
            ["#fecea8", "#ff847c", "#f03861", "#45171d"],
            ["#41228e", "#7b3b8c", "#a94caf", "#f54ea2"],
            ["#1e6262", "#2d767f", "#b4f1f1", "#ecfffb"],
            ["#f8b500", "#5c636e", "#393e46", "#f7f7f7"],
            ["#f5c8bd", "#ffe3b0", "#f5ffcb", "#a9eca2"],
            ["#ff4273", "#ff9d76", "#fffde1", "#1fffff"],
            ["#7fffd6", "#3ad3cd", "#0a3442", "#104455"],
            ["#2e383f", "#07617d", "#ececeb", "#f9a828"],
            ["#7a57d1", "#4fc1e9", "#5be7c4", "#f5f7fa"],
            ["#b8dff0", "#7971ea", "#3e4e88", "#1a2c5b"],
            ["#346473", "#25a55f", "#9bdf46", "#e9f679"],
            ["#fc5185", "#364f6b", "#43dde6", "#f0f0f0"],
            ["#a6aa9c", "#f7d3ba", "#e6e7e5", "#f5efe3"]
        ];

        this.__initHandles__();
        this.currentColors = this.__getRandomArrayElements__(this.colors, this.count);


    }

    __initHandles__() {
        this.$colors.target.find('.btn.close').click(() => {
            this.close();
        });

        this.$colors.target.find('.btn.exchange').click(() => {
            this.exchange();
        });
    }

    __getRandomArrayElements__(arr, count) {
        let shuffled = arr.slice(0),
            i = arr.length,
            min = i - count,
            temp,
            index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }

    exchange() {
        this.currentColors = this.__getRandomArrayElements__(this.colors, this.count);
        this.$colors.render(this.currentColors, this.callback, true);
    }

    __documentClickHandler__(e) {
        let $target = this.$colors.target;
        if(!$target.is(e.target) && $target.has(e.target).length === 0){
            this.close();
        }
    }

    open(callback = () => {}) {
        this.callback = callback;
        this.$colors.open();
        this.$colors.render(this.currentColors, this.callback);

        $(document).bind('click', this.__documentClickHandler__.bind(this));
    }

    close() {
        this.$colors.close();

        $(document).unbind('click', this.__documentClickHandler__)
    }
}