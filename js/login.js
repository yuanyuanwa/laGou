var img1 = document.getElementsByClassName('img1');
var img11 = document.getElementsByClassName('img11');
var img2 = document.getElementsByClassName('img2');
var img22 = document.getElementsByClassName('img22');
var imgBox = document.getElementsByClassName('imgBox');
var inpLeft = document.getElementsByClassName('inpLeft');
var inpLeft2 = document.getElementsByClassName('inpLeft2');



img1[0].onclick =function(){
    if(img11[0]==undefined){
        img1[0].classList.add("img11");
        img2[0].classList.add("img22");
        inpLeft[0].style.display='none'
        inpLeft2[0].style.display='block'

    }else{
        // img11[0].className='img1';
        // img22[0].className='img2'
        img1[0].classList.remove("img11");
        img2[0].classList.remove("img22");
        inpLeft[0].style.display='block'
        inpLeft2[0].style.display='none'
    }
}
img2[0].onclick =function(){
    if(img11[0]==undefined){
        img1[0].classList.add("img11");
        img2[0].classList.add("img22");
        inpLeft[0].style.display='none'
        inpLeft2[0].style.display='block'
    }else{
        // img11[0].className='img1';
        // img22[0].className='img2'
        img1[0].classList.remove("img11");
        img2[0].classList.remove("img22");
        inpLeft[0].style.display='block'
        inpLeft2[0].style.display='none'
    }
}


var img_ul = document.getElementById('spa')
var p1 = document.getElementsByClassName('p1');
var p2 = document.getElementsByClassName('p2');
var linBox2 = document.getElementsByClassName('linBox2');
console.log(linBox2);
var linBox = document.getElementsByClassName('linBox');

var rate = 5; //一张图片的切换速度， 单位为px
console.log(img_ul.offsetLeft);

function Roll(distance) { //参数distance：滚动的目标点（必为图片宽度的倍数）
    // img_ul.style.left//每次运行该函数必须清除之前的定时器！
    // console.log(rate);//判断图片移动的方向 (0-rate)向左，rate向右
    // if(img_ul.offsetLeft>= img_ul.style.left){
    //     img_ul.style.left
    // }
    var speed = img_ul.offsetLeft < distance ? rate : (0 - rate);
    img_ul.timer = setInterval(function () { //设置定时器，每隔10毫秒，调用一次该匿名函数
        img_ul.style.left =img_ul.offsetLeft+rate+ "px"; //每一次调用滚动到的地方 (速度为 speed px/10 ms)      
        console.log(img_ul.offsetLeft);
        // console.log(img_ul.offsetLeft);
        var leave = distance - img_ul.offsetLeft; //距目标点剩余的px值  

        /*接近目标点时的处理，滚动接近目标时直接到达， 避免rate值设置不当时不能完整显示图片*/
        if (Math.abs(leave)  <= rate) {
            clearInterval(img_ul.timer);
            img_ul.style.left = distance + "px";
        }
    }, 10);
}
function Roll2(distance) { //参数distance：滚动的目标点（必为图片宽度的倍数）
    // img_ul.style.left//每次运行该函数必须清除之前的定时器！
    // console.log(rate);//判断图片移动的方向 (0-rate)向左，rate向右
    // if(img_ul.offsetLeft>= img_ul.style.left){
    //     img_ul.style.left
    // }
    img_ul.timer = setInterval(function () { //设置定时器，每隔10毫秒，调用一次该匿名函数
        img_ul.style.left =img_ul.offsetLeft-rate+ "px"; //每一次调用滚动到的地方 (速度为 speed px/10 ms)      
        console.log(img_ul.offsetLeft);
        // console.log(img_ul.offsetLeft);
        var leave = distance - img_ul.offsetLeft; //距目标点剩余的px值  
        console.log(leave);
        console.log(11);

        /*接近目标点时的处理，滚动接近目标时直接到达， 避免rate值设置不当时不能完整显示图片*/
        if (Math.abs(leave) <= rate) {
            clearInterval(img_ul.timer);
            img_ul.style.left = distance + "px";
        }
    }, 10);
}
p2[0].onclick=function(){
    Roll(145) 
    p1[0].style.color='#555'
    p2[0].style.color='#00b38a'
    linBox2[0].style.display='none'
    linBox[0].style.display='block'
    // p1[0].style.color='#00b38a'
    // p2[0].style.color='#555'
}
p1[0].onclick=function(){
    Roll2(0) 
    p1[0].style.color='#00b38a'
    p2[0].style.color='#555'
    linBox2[0].style.display='block'
    linBox[0].style.display='none'
}

