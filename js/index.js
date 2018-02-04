ready(function(){
  var starthue = 0 //152
  var phys = document.getElementById("phys");
  var obj = document.getElementsByClassName("svgobject");
  var g = phys.getSVGDocument().getElementsByClassName("rotate");
  var b = document.body;
  var docEl = document.documentElement;


  var scroll = function () {
    var st = 'scrollTop';
    var sh = 'scrollHeight';

    var percent = (docEl[st]||b[st]) / ((docEl[sh]||b[sh]) - window.innerHeight);

    if (0 <= percent && percent <= 1) {

      var x = document.getElementsByClassName("akzentbg");
      var i;

      var colorhue = "hsl("+ (starthue+ (1-percent*1.5 * 360)) +", 89%, 61%)"
      for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = colorhue;
      }
      var y = document.getElementsByClassName("akzent");
      var j;
      for (j = 0; j < y.length; j++) {
        y[j].style.color = colorhue;
      }


      var m;
      for (m = 0; m < obj.length; m++) {
        var el =  obj[m].getSVGDocument().getElementsByClassName("akzentsvg");
        // console.log(el.length);
        var i;
        for (var i = 0; i < el.length; i++) {
          el[i].style.fill = colorhue;
        }
      }


      var l;
      for (l = 0; l < g.length; l++) {
        if (l==1) {
          g[l].style.transform = "rotate("+(-percent*2000)+"deg)";
        }
        else {
          g[l].style.transform = "rotate("+(percent*5000)+"deg)";
        }
      }
    }
  };

  var throttled = throttle(scroll, 10)
  document.addEventListener('scroll', throttled);

  var tiles = document.getElementsByClassName("tile");
  for (var i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener('click', expandGrid, true);
  }

  function expandGrid(event) {
    if (this.classList.contains("tilefocus")) {
      this.classList.remove("tilefocus");
    }
    else {
      for (var i = 0; i < tiles.length; i++) {
          tiles[i].classList.remove("tilefocus");
      }
      this.className += " tilefocus";
    }
  };

  document.onkeydown = navlightbox;

  function navlightbox(e) {

    e = e || window.event;
    // var lightboxes = document.getElementsByClassName("lightbox");
    var focus = document.getElementsByClassName('tilefocus')[0];

    if (e.keyCode == '38' || e.keyCode == '37') {
      focus.classList.remove("tilefocus");
      focus.previousElementSibling.className += " tilefocus";
    }
    else if (e.keyCode == '39' || e.keyCode == '40') {
        focus.classList.remove("tilefocus");
        focus.nextElementSibling.className += " tilefocus";
    }
    else if (e.keyCode == '8' || e.keyCode == '32' || e.keyCode == '27') {
      focus.classList.remove("tilefocus");
    }
  };



  // throttle as seen in underscore.js
  function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

});
function ready(f){/in/.test(document.readyState)?setTimeout('ready('+f+')',9):f()}
function switcher(o) {
  var top = document.getElementsByClassName('top')[o];
  var bottom = document.getElementsByClassName('bottom')[o];
  top.classList.remove("top");
  top.className += " bottom";
  bottom.classList.remove("bottom");
  bottom.className += " top";
}
