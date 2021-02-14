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
    var four=document.querySelector('.four');
    // 谷堆
    var p39 = document.querySelector('.p3-9');
    // 进度条
    var p34 = document.querySelector('.p3-4'), p35 = document.querySelector('.p3-5');
    // 要点击的手
    var p381 = document.querySelector('.p3-3-1');
    // 隐藏的手
    var p38 = document.querySelector('.p3-8');
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
    // window.addEventListener('touchstart',function(e){
    //     console.log(e.targetTouches[0].pageX);
    //     console.log(p39.offsetWidth);
    // })
    // 鼠标开始的位置
    var startX=0,startY=0;
    // 盒子开始的距离
    var startMouseX=0,startMouseY=0;
    // 最大的移动距离
    var MaxmoveY=four.offsetWidth-p39.offsetWidth;
    var MaxmoveX=four.offsetHeight-p39.offsetHeight;
    p39.addEventListener('touchstart',function(e){
        p36.style.display='none';
        p38.style.display='none';
        startX = e.targetTouches[0].pageY; // 鼠标开始的位置
        startY = e.targetTouches[0].pageX;
        startMouseX=this.offsetTop;  // 盒子开始离左边的距离
        startMouseY=this.offsetLeft;
        
    })
    // four.addEventListener('touchmove',function(e){
    //     // 鼠标移动的位置
    //     var touchX = e.targetTouches[0].pageY+375;
    //     var touchY= e.targetTouches[0].pageX+667;
    //     touchX=touchX-startX+startMouseX;
    //     touchY=touchY-startY+startMouseY;
    //     if(touchX<0){
    //         touchX=0;
    //     }else if(touchX>MaxmoveX){
    //         touchX=MaxmoveX
    //     }
    //     if(touchY<0){
    //         touchY=0;
    //     }else if(touchY>MaxmoveY){
    //         touchY=MaxmoveY;
    //     }
    //     p39.style.top=touchY/(1448/100)+'vh';
    //     p39.style.left=touchX/(1448/100)+'vh';
    // })

    

});


