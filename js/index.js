window.addEventListener('load', function () {

    var wire=document.querySelector('.move');
    var bg=document.querySelector('.bg');

    var timer2=setTimeout(() => {
        console.log(wire.offsetWidth);
        if(wire.offsetWidth==window.innerHeight){
            bg.style.display='none';
            bg1.style.display='block';
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
});