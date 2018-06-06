/**
 * Created by bowen on 2016/12/13.
 */


/**
 * 扇形图
 * @param x
 * @param y
 * @param radius
 * @param sDeg
 * @param eDeg
 * @returns {CanvasRenderingContext2D}
 */
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {

    this.save();

    this.translate(x, y);

    this.beginPath();

    this.arc(0, 0, radius, sDeg, eDeg);

    this.save();

    this.rotate(eDeg);

    this.moveTo(radius, 0);

    this.lineTo(0, 0);

    this.restore();

    this.rotate(sDeg);

    this.lineTo(radius, 0);

    this.closePath();

    this.restore();

    return this;

};


/**
 * 扇形评分图
 * @param id
 * @param list
 */
var pieAssEss = function (id, list) {

    var high = strToNumber(list[0]),
        middle = strToNumber(list[1]),
        low = strToNumber(list[2]);

    var assess = Math.floor(high / (high + middle + low) * 100);

    var cvs = document.getElementById(id),
        ctx = cvs.getContext('2d');

    cvs.width = 350;
    cvs.height = 200;

    /**
     * 在100,100处开始画图
     */
    ctx.translate(100, 100);

    ctx.beginPath();

    /**
     * 首先画一个圆，包裹里面的好评度信息
     */
    ctx.arc(0, 0, 60, 0, 2 * Math.PI);
    ctx.strokeStyle = "#d1d1d1";
    ctx.stroke();

    /**
     * 画一个扇形
     * 扇形以进度条的方式体现好评度
     */
    ctx.sector(0, 0, 60, 1.5 * Math.PI, (assess * 0.02 + 1.5) * Math.PI);
    ctx.fillStyle = "#2cb3ff";
    ctx.fill();

    /**
     * 画一个圆遮蔽部分扇形，并写上好评度
     */
    ctx.beginPath();
    ctx.arc(0, 0, 48, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.font = '20px Arial';
    ctx.fillStyle = '#2cb3ff';
    ctx.fillText(assess + '%', -20, -5);
    ctx.font = '16px Arial';
    ctx.fillText('好评度', -25, 20);
    ctx.stroke();

    /**
     * 圆旁边给出详细评价数量说明
     * @type {string}
     */
    ctx.font = '500 14px Arial';
    ctx.fillStyle = '#666666';
    ctx.fillText('好评 : ( ' + high + ' )', 70, -25);
    ctx.fillText('中评 : ( ' + middle + ' )', 70, 5);
    ctx.fillText('差评 : ( ' + low + ' )', 70, 35);

    /**
     * 画出两条边线
     */
    ctx.moveTo(0, -60);
    ctx.lineTo(140, -60);
    ctx.moveTo(0, 60);
    ctx.lineTo(140, 60);
    ctx.stroke();
    ctx.closePath();


    /**
     * 弧线连接两条边线
     */
    ctx.beginPath();
    ctx.arc(140, 0, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();

};


/**
 * 该函数将图库中所有需要用到数字的地方格式化
 * @param str
 * @returns {*}
 */
var strToNumber = function (str) {

    if (typeof str == 'string') {

        str = str.replace(/[^0-9.]*/g, '');

        return parseInt(str);

    } else if (typeof str == 'number') {

        return str;

    } else {

        return 0;

    }

};

