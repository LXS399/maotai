window.addEventListener('load',function(){

    // 第一个p1页面在5秒的时候  开始缩放
    var p1Bg=document.querySelector('.p1-bg');
    var panama=document.querySelector('.panama');
    // 这两个需要加模糊效果
    var p1=document.querySelector('.p1');
    // 需要加缩放
    var bg1=document.querySelector('.bg1'); // 当到这个页面的时候判断时间
    var p12=document.querySelector('.p1-2');
    var wobble=document.querySelector('.wobble');
    if(bg1.style.display=='block'){
        timer; // 当页面显示的时候 调用时间函数
        timer1;
    }
    var timer=setTimeout(function(){
        // 时间函数执行添加类名
        p1Bg.classList.add('fitler');
        panama.classList.add('fitler');
        p1.classList.add('zoom');
        p12.classList.add('zoom1');
    },5000);
    var timer1=setTimeout(function(){
        wobble.style.display='block';

    },7500)
});