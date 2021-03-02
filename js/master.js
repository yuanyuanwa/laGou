//点击'我知道了',元素隐藏
var span3 = document.getElementsByClassName('span3');
var top2 = document.getElementsByClassName('top2');

span3[0].onclick=function(){
    top2[0].style.display='none'
}
span3[1].onclick=function(){
    top2[1].style.display='none'
}

var hotBtn = document.getElementsByClassName('hotBtn');
var newBtn = document.getElementsByClassName('newBtn');
var hotBtnn = document.getElementsByClassName('hotBtnn');
var newBtnn = document.getElementsByClassName('newBtnn');
// var top2 = document.getElementsByClassName('top2');
var conUl = document.getElementsByClassName('conUl');
var con22=document.getElementsByClassName('con22');
hotBtn [0].onclick=function(){
    conUl[0].style.display='block';
    con22[0].style.display='none';
    // top2[0].style.display='block'
    hotBtnn[0].className='hotBtn';
    newBtnn[0].className='newBtn';
}
newBtn[0].onclick=function(){
    conUl[0].style.display='none';
    con22[0].style.display='block';
    // top2[0].style.display='none'
    newBtn[0].className='newBtnn';
    hotBtn[0].className='hotBtnn';
}