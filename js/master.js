//点击'我知道了',元素隐藏
var span3 = document.getElementsByClassName('span3');
var top2 = document.getElementsByClassName('top2');

span3[0].onclick = function () {
    top2[0].style.display = 'none'
}
span3[1].onclick = function () {
    top2[1].style.display = 'none'
}
span3[2].onclick = function () {
    top2[2].style.display = 'none'
}


var hotBtn = document.getElementsByClassName('hotBtn');
var newBtn = document.getElementsByClassName('newBtn');
var hotBtnn = document.getElementsByClassName('hotBtnn');
var newBtnn = document.getElementsByClassName('newBtnn');
// var top2 = document.getElementsByClassName('top2');
var conUl = document.getElementsByClassName('conUl');
var con22 = document.getElementsByClassName('con22');
hotBtn[0].onclick = function () {
    conUl[0].style.display = 'block';
    con22[0].style.display = 'none';
    // top2[0].style.display='block'
    hotBtnn[0].className = 'hotBtn';
    newBtnn[0].className = 'newBtn';
}
newBtn[0].onclick = function () {
    conUl[0].style.display = 'none';
    con22[0].style.display = 'block';
    // top2[0].style.display='none'
    newBtn[0].className = 'newBtnn';
    hotBtn[0].className = 'hotBtnn';
}



var hot = document.getElementsByClassName('hot');
var hott = document.getElementsByClassName('hott');
var t2 = document.getElementsByClassName('t2');
var t3 = document.getElementsByClassName('t3');
console.log(t3);
var t4 = document.getElementsByClassName('t4');
console.log(t4);
var t5 = document.getElementsByClassName('t5');
var t6 = document.getElementsByClassName('t6');
var cont = document.querySelectorAll('.cont')
console.log(1, cont)
for (let i = 0; i < hot.length; i++) {
    console.log(i)
    hot[i].onclick = function () {
        for (let j = 0; j < cont.length; j++) {
            cont[j].style.display = 'none'
            hot[j].style.border = "none"
        }

        hot[i].style.borderBottom = "2px solid #000"

        cont[i].style.display = 'block'
    }
}
// hot[0].onclick = function () {
//     if (hott[0] == undefined) {
//         hot[0].className = 'hott'
//     } else {
//         hott[0].className = 'hot';
//         hot[0].className = 'hott'
//         t2[0].style.display = 'block'
//         t3[0].style.display = 'none'
//         t4[0].style.display = 'none'
//         t5[0].style.display = 'none'
//         t6[0].style.display = 'none'
//     }
// }
// hot[1].onclick = function () {
//     if (hott[0] == undefined) {
//         hot[1].className = 'hott';
//     } else {
//         hott[0].className = 'hot';
//         console.log(1);
//         hot[1].className = 'hott'
//         t2[0].style.display = 'none'
//         t3[0].style.display = 'block'
//         t4[0].style.display = 'none'
//         t5[0].style.display = 'none'
//         t6[0].style.display = 'none'
//     }
// }
// hot[2].onclick = function () {
//     if (hott[0] == undefined) {
//         hot[2].className = 'hott';
//     } else {
//         hott[0].className = 'hot';
//         hot[2].className = 'hott'
//         t2[0].style.display = 'none'
//         t3[0].style.display = 'none'
//         t4[0].style.display = 'block'
//         t5[0].style.display = 'none'
//         t6[0].style.display = 'none'
//     }
// }
// hot[3].onclick = function () {
//     if (hott[0] == undefined) {
//         hot[3].className = 'hott';
//     } else {
//         hott[0].className = 'hot';
//         hot[3].className = 'hott'
//         t2[0].style.display = 'none'
//         t3[0].style.display = 'none'
//         t4[0].style.display = 'none'
//         t5[0].style.display = 'block'
//         t6[0].style.display = 'none'
//     }
// }
// hot[4].onclick = function () {
//     if (hott[0] == undefined) {
//         hot[4].className = 'hott';
//     } else {
//         hott[0].className = 'hot';
//         hot[4].className = 'hott'
//         t2[0].style.display = 'none'
//         t3[0].style.display = 'none'
//         t4[0].style.display = 'none'
//         t5[0].style.display = 'none'
//         t6[0].style.display = 'block'
//     }
// }



var zhankai = document.getElementsByClassName('zhankai');
console.log(zhankai);
var ii = document.getElementsByClassName('i');
var iC = document.getElementsByClassName('i');

var iup = document.getElementsByClassName('iup')
var top22 = document.getElementsByClassName('top22')
// for (let i = 0; i < zhankai.length; i++) {
//     console.log(top22)
//     let isExpand = false
//     zhankai[i].addEventListener('click', () => {
//         if (isExpand) {
//             // 收回

//             // top22[i].style.display = 'none'
//             // console.log(top22[i].style.display)
//             for (let k = 0; k < top22.length; k++) {

//                 top22[k].style.display = 'none'
//                 iup[k].className = 'i';
//                 //收回
//                 // if (!(iup[k] == undefined)) {
//                 //     iup[k].className = 'i';
//                 //    }

//                 // top22[j].style.display = 'block' // 展开所有
//             }
//             isExpand = false

//         } else {
//             isExpand = true;

//             for (let j = 0; j < top22.length; j++) {
//                 // top22[j].style.display = 'none'
//                 top22[j].style.display = 'block'
//                // 展开所有
//                if (iup[j] == undefined) {
//                    console.log(i[0]);
//                 i[0].className = 'iup';
//                }

//             }
//             // top22[i].style.display = 'block' // 展开单个
//         }


//     })

// }

for (let i = 0; i < hot.length; i++) {
    console.log(i)
    zhankai[i].onclick = function () {
        if (iup[0] == undefined) {
            // ii[0].className = 'iup';
            for (let i = 0; i < top22.length; i++) {
                ii[0].className = 'iup';
                // i[i].className = 'iup';
                top22[i].style.display = 'block'
            }
        } else {
            // iup[0].className = 'ii';
            for (let i = 0; i < top22.length; i++) {
                iup[0].className = 'i';
                // iup[i].className = 'i';
                top22[i].style.display = 'none'
            }
        }
    }
}



// zhankai[0].onclick = function () {
//     if (iup[0] == undefined) {
//         // ii[0].className = 'iup';
//         // console.log(ii[1]);
//         // ii[i].className = 'iup';
//         for (let i = 0; i < top22.length; i++) {
//             ii[0].className = 'iup';
            
//             top22[i].style.display = 'block'

//         }
//     } else {
//         // iup[0].className = 'ii';
//         for (let i = 0; i < top22.length; i++) {
//             iup[0].className = 'ii';
//             top22[i].style.display = 'none'
//         }
//     }
// }


// zhankai[1].onclick = function () {
//     if (iup[0] == undefined) {
//         // ii[0].className = 'iup';
//         for (let i = 0; i < top22.length; i++) {
//             ii[0].className = 'iup';
//             // i[i].className = 'iup';
//             top22[i].style.display = 'block'
//         }
//     } else {
//         // iup[0].className = 'ii';
//         for (let i = 0; i < top22.length; i++) {
//             iup[0].className = 'ii';
//             // iup[i].className = 'i';
//             top22[i].style.display = 'none'
//         }
//     }

// }

// zhankai[2].onclick = function () {
//     if (iup[0] == undefined) {
//         ii[2].className = 'iup';
//         for (let i = 0; i < top22.length; i++) {
//             top22[i].style.display = 'block'
//         }
//     } else {
//         iup[0].className = 'ii';
//         for (let i = 0; i < top22.length; i++) {
//             top22[i].style.display = 'none'
//         }
//     }

// }

// zhankai[3].onclick = function () {
//     if (iup[0] == undefined) {
//         ii[3].className = 'iup';
//         for (let i = 0; i < top22.length; i++) {
//             top22[i].style.display = 'block'
//         }
//     } else {
//         iup[0].className = 'ii';
//         for (let i = 0; i < top22.length; i++) {
//             top22[i].style.display = 'none'
//         }
//     }

// }
// zhankai[4].onclick = function () {
//     if (iup[0] == undefined) {
//         ii[4].className = 'iup';
//         for (let i = 0; i < top22.length; i++) {
//             top22[i].style.display = 'block'
//         }
//     } else {
//         iup[0].className = 'ii';
//         for (let i = 0; i < top22.length; i++) {
//             top22[i].style.display = 'none'
//         }
//     }

// }
// console.log(document.nodeName);
// zhankai[0].onclick=function(){
//     console.log(1);
//         iup[0].className='i';
//         console.log(i[0]);

// }