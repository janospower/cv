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

      var colorhue = "hsl("+ (starthue+ (1-percent * 360)) +", 89%, 61%)"
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


  document.onkeydown = navlightbox;

  function navlightbox(e) {

    e = e || window.event;
    // var lightboxes = document.getElementsByClassName("lightbox");
    var tags = ["grenade","spotify","uni","icon","technisch","sunshine","app"]
    // var as = document.getElementsByClassName("lightbox");

    if (e.keyCode == '38' || e.keyCode == '37') {
      for (var i = 0; i < tags.length; i++) {
        if (tags[i]==event.target.id) {
          if (i==0) {
            window.location.href = "#"+tags[tags.length-1];
          }
          else {
            window.location.href = "#"+tags[i-1];
          }
        }
      }
    }
    else if (e.keyCode == '39' || e.keyCode == '40') {
      //  alert("down or right");
      // console.log();
      // if(event.target.classList.length==1){
      //   event.target.className += " target";
      // }
      for (var i = 0; i < tags.length; i++) {
        if (tags[i]==event.target.id) {
          if (i==tags.length-1) {
            window.location.href = "#"+tags[0];
          }
          else {
            window.location.href = "#"+tags[i+1];
          }
          // console.log(event.target.id)
        }
      }
    }
    else if (e.keyCode == '8' || e.keyCode == '32' || e.keyCode == '27') {
      window.location.href = "#_";
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
