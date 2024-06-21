var bannerItemImg = document.querySelector(".Banneritem-img");
var bannerImgArr = ['images/banner_1.png', 'images/banner_2.png', 'images/banner_3.png'];
var fbtnArr = document.querySelectorAll(".viewC-fbtn-item");
var stopBox = document.querySelector(".viewC-fbtn")
var Arri = 0;
var bannerBox = document.querySelector(".banner-item");
var title = document.querySelector(".viewC-title");
var tips = document.querySelector(".viewC-title-tips");
var titleArr = ["24小时检测 ", "安全保密", "流程极简"];
var tipsArr = ["多元化应用场景", "海量数据资源", "科学的检测技术"];
var a = null;
// var bgsl = document.querySelector(".bgsl");
// var bgxz = document.querySelector(".bgxz");
// var yzzw = document.querySelector(".yzzw");
// var cjwt = document.querySelector(".cjwt");
var checkNow = document.querySelectorAll(".checkNow");
var zcb = document.querySelector(".B1-bottomBtn");
var tyb = document.querySelector(".B2-bottomBtn");
var bkb = document.querySelector(".B3-bottomBtn");
var sbb = document.querySelector(".B4-bottomBtn");
var fT = document.querySelector(".f-t");
var openNew = document.querySelector(".openNew");
var FXtop = document.querySelector(".fix-top");
var FXline = document.querySelector(".f-line");
//按钮跳转

// bgsl.onclick = function () {
//   window.open("dxs.html")
// }
// bgxz.onclick = function () {
//   window.open("query.html")
// }
// yzzw.onclick = function () {
//   window.open("http://truth.wanfangdata.com.cn/")
// }
// cjwt.onclick = function () {
//   window.open("#")
// }
// for (var i = 0; i < checkNow.length; i++) {
//   checkNow[i].onclick = function () {
//     window.location.href = "yjs.html"
//   }
// }
// zcb.onclick = function () {
//   window.location.href = "zc.html"
// }
// tyb.onclick = function () {
//   window.location.href = "ty.html"
// }
// bkb.onclick = function () {
//   window.location.href = "dxs.html"
// }
// sbb.onclick = function () {
//   window.location.href = "yjs.html"
// }
// fT.onclick = function () {
//   window.location.href = "yjs.html"
// }
// openNew.onclick = function () {
//   window.location.href = "yjs.html"
// }
//
// FXtop.onclick = function() {
//   window.open("#")
// }

//IE9  classList
if (!("classList" in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function () {
      var self = this;

      function update(fn) {
        return function (value) {
          var classes = self.className.split(/\s+/g),
            index = classes.indexOf(value);

          fn(classes, index, value);
          self.className = classes.join(" ");
        }
      }

      return {
        add: update(function (classes, index, value) {
          if (!~index) classes.push(value);
        }),

        remove: update(function (classes, index) {
          if (~index) classes.splice(index, 1);
        }),

        toggle: update(function (classes, index, value) {
          if (~index)
            classes.splice(index, 1);
          else
            classes.push(value);
        }),

        contains: function (value) {
          return !!~self.className.split(/\s+/g).indexOf(value);
        },

        item: function (i) {
          return self.className.split(/\s+/g)[i] || null;
        }
      };
    }
  });
}

//循环图片
function settimer() {
  return setInterval(function () {
    bannerItemImg.src = bannerImgArr[++Arri];
    if (Arri == 2) {
      bannerBox.style.marginTop = "30px"
    }
    if (Arri != 2) {
      bannerBox.style.marginTop = 0
    }
    for (var i = 0; i < fbtnArr.length; i++) {
      if (i == Arri) {
        fbtnArr[i].classList.add("active");
        title.innerText = titleArr[i]
        tips.innerText = tipsArr[i]
      } else {
        fbtnArr[i].classList.remove("active");
      }
    }
    if (Arri >= 2) {
      Arri = -1;
    }
  }, 1900);
}
var timer = settimer();

//点击切换图片
var $__0 = function (i) {
  fbtnArr[i].onclick = function () {
    if (a) {
      clearTimeout(a)
    }
    bannerItemImg.src = bannerImgArr[i];
    if (i == 2) {
      bannerBox.style.marginTop = "30px"
    }
    if (i != 2) {
      bannerBox.style.marginTop = 0
    }
    fbtnArr[i].classList.add("active");
    title.innerText = titleArr[i]
    tips.innerText = tipsArr[i]
    for (var j = 0; j < fbtnArr.length; j++) {
      if (j !== i) {
        fbtnArr[j].classList.remove("active");
      }
    }
    clearInterval(timer);
    if (i == 2) {
      Arri = -1;
    } else {
      Arri = i;
    }
    // a = setTimeout(function () {
    //   timer = settimer();
    // }, 2000);
  };
};
for (var i = 0; i < fbtnArr.length; i++) {
  $__0(i);
}

//鼠标移入清除定时器  移出生成定时器
stopBox.onmouseover = function () {
    clearInterval(timer)
}
stopBox.onmouseout = function () {
    timer = settimer()
}

//滚动事件  回到顶部
var body = document.querySelector("body")
var fixBottom = document.querySelector(".fix-bottom")
var header = document.querySelector(".header-wrapper")
window.onscroll = function () {

  if (document.documentElement.scrollTop !== 0) {
    header.style.boxShadow = "1px 1px 6px 0 #ccc"
  }
  if (document.documentElement.scrollTop == 0) {
    header.style.boxShadow = "none"
  }
  if (document.documentElement.scrollTop >= 400) {
    fixBottom.style.display = "block"
    FXline.style.display = "block"
    FXtop.style.borderBottom = "none"
  }
  if (document.documentElement.scrollTop < 400) {
    fixBottom.style.display = "none"
    FXline.style.display = "none"
    FXtop.style.borderBottom = "1px solid #edf0f2"
  }
}


fixBottom.onclick = function () {
  if (IEVersion() != 9) {
    (function top() {
      var speed = Math.floor(-document.documentElement.scrollTop / 10)
      document.documentElement.scrollTop += speed
      var totop = window.requestAnimationFrame(top)
      if (document.documentElement.scrollTop == 0) {
        window.cancelAnimationFrame(totop)
      }
    })()
  } else {
    var x = setInterval(function () {
      var speed = Math.floor(-document.documentElement.scrollTop / 10)
      document.documentElement.scrollTop += speed
      if(document.documentElement.scrollTop == 0){
        clearInterval(x)
      }
    })
  }
}
// window.onscroll = function(){
//     var X = document.documentElement.scrollTop
//     console.log(X)
// }
//判断浏览器
function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11  
  } else {
    return -1; //不是ie浏览器
  }
}