window.addEventListener('load', function () {

    var wire = document.querySelector('.move');
    var bg = document.querySelector('.bg');

    var timer2 = setTimeout(() => {
        if (wire.offsetWidth == window.innerHeight) {
            bg.style.display = 'none';
            bg1.style.display = 'block';
        }
    }, 8000);


    // 第一个p1页面在5秒的时候  开始缩放
    var p1Bg = document.querySelector('.p1-bg');
    var panama = document.querySelector('.panama');
    // 这两个需要加模糊效果
    var p1 = document.querySelector('.p1');
    // 需要加缩放
    var bg1 = document.querySelector('.bg1'); // 当到这个页面的时候判断时间
    var p12 = document.querySelector('.p1-2');
    var wobble = document.querySelector('.wobble');
    if (bg1.style.display == 'block') {
        clearTimeout(timer);
        clearTimeout(timer1);
        timer; // 当页面显示的时候 调用时间函数
        timer1;
    }
    var timer = setTimeout(function () {
        // 时间函数执行添加类名
        p1Bg.classList.add('fitler');
        panama.classList.add('fitler');
        p1.classList.add('zoom');
        p12.classList.add('zoom1');
    }, 9500);
    var timer1 = setTimeout(function () {
        wobble.style.display = 'block';

    }, 10500)
    //  点击背景往上 酒瓶旋转

    // 酒瓶落地换图片
    var bottle = document.querySelector('.bottle ');
    var p19 = document.querySelector('.p1-9');

    // 创建自己的茅台
    var bg2 = document.querySelector('.bg2');
    bottle.addEventListener('touchstart', function () {

        this.classList.add('bottle1');
        bg1.classList.add('bgzoom');
        p1Bg.style.marginTop = 3 + 'vh';
        setTimeout(function () {
            // 时间到 换图片
            p12.src = 'img/p1_6.png';
            // 酒瓶落地酒香出现
            p19.classList.remove('dn');
            p19.classList.add('aroma');
            bottle.style.transform = 'rotate(0)';
            p12.classList.add('p1-6');
            p12.classList.remove('p1-2');
        }, 3000);
        setTimeout(function () {
            p12.src = 'img/p1_7.png';
            p19.classList.add('aroma1');
            p19.classList.remove('aroma');
            p12.classList.add('p1-7');
            p12.classList.remove('p1-6');
        }, 4000)
        setTimeout(function () {
            p12.src = 'img/p1_8.png';
            p19.classList.add('aroma2');
            p19.classList.remove('aroma1');
            p12.classList.add('p1-8');
            p12.classList.remove('p1-7');
        }, 5000)
        // 切换页面
        setTimeout(function () {
            bg1.style.display = 'none';
            bg2.style.display = 'block';
        }, 7000);
    })

    var create = document.querySelector('.create');
    var bg3 = document.querySelector('.bg3');
    create.addEventListener('touchstart', function () {
        bg2.style.display = 'none';
        bg3.style.display = 'block';
    })

    // 开始制作
    //大盒子
    var four = document.querySelector('.four');
    // 谷堆
    var p39 = document.querySelector('.p3-9');
    // 进度条
    var p34 = document.querySelector('.p3-4'), p35 = document.querySelector('.p3-5');
    // 要点击的手
    var p381 = document.querySelector('.p3-8-1');
    // 要显示的图片
    var p318 = document.querySelector('.p3-18');
    // 隐藏的手
    var p38 = document.querySelector('.p3-8');
    // 隐藏的箭头
    var p37 = document.querySelector('.p3-7');
    // 要隐藏的图片
    var p36 = document.querySelector('.p3-6');
    // 要切换的图片
    var p311 = document.querySelector('.p3-11');
    // 进度数值
    var num = document.querySelector('#percent');
    // 脚
    var p33 = document.querySelector('.p3-3'), p331 = document.querySelector('.p3-3-1');
    // 下一步
    var sizing = document.querySelector('.sizing');


    p39.addEventListener('click', function () {
        p38.style.display = 'none';
        p36.style.display = 'none';
        p37.style.display = 'none';
        animate(255, p39, 10, 'l');
        var l = 0;
        var timer3 = setInterval(function () {
            l = p39.offsetLeft;
            if (l == 255) {
                p39.style.display = 'none';
                p311.src = 'img/p3_12.png';
                p381.classList.remove('dn');
                p318.classList.remove('dn');
                var num1 = 0;
                var sum1 = 0;
                function click() {

                    // var flag = true;

                    // function Raise(flag) {


                    // }
                    
                    num1++;
                    p35.style.zIndex = 2;
                    p35.style.height=num1*25+'px';
                    console.log(p35.offsetHeight);
                    // Raise(flag);

                    sum1 += 20;
                    num.innerHTML = sum1;
                    if (num1 == 0) {
                        p318.classList.add('dn');
                        p381.classList.add('dn');
                        removeEventListener('click', click);
                    }
                }
                window.addEventListener('click', click)

                clearInterval(timer3);
            }

        }, 500);
    })
    function animate(target, obj, speed, type) {
        // 传值进来  移动多少
        // target  距离
        // obj 对象   
        // speed 速度
        // type  方向
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // 当移动的距离大于等于目标的值  停止
            // if (obj.offsetLeft >= target ) {
            //     clearInterval(obj.timer);
            // } else {
            if (type.toLowerCase() == 'r') {
                if (obj.offsetLeft >= target) {
                    clearInterval(obj.timer);
                } else {
                    // 每次移动的距离在原来的位置+1
                    obj.style.left = obj.offsetLeft + 1 + 'px';
                }
            } else if (type.toLowerCase() == 'l') {
                if (obj.offsetLeft <= target) {
                    clearInterval(obj.timer);
                } else {
                    obj.style.left = obj.offsetLeft - 1 + 'px';
                }
            } else if (type.toLowerCase() == 'b') {
                if (obj.offsetTop >= target) {
                    clearInterval(obj.timer);
                } else {
                    obj.style.top = obj.offsetTop + 1 + 'px';
                }

            } else if (type.toLowerCase() == 't') {
                if (obj.offsetTop <= target) {
                    clearInterval(obj.timer);
                } else {
                    obj.style.top = obj.offsetTop - 1 + 'px';
                }
            }

        }, speed)
    }
});


