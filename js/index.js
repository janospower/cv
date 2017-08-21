var scroll = function () {
  var docEl = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';

  var percent = (docEl[st]||b[st]) / ((docEl[sh]||b[sh]) - window.innerHeight);

  if (0 <= percent && percent <= 1) {

    var x = document.getElementsByClassName("akzentbg");
    var i;
    var colorhue = "hsl("+ (152+ (percent * 360)) +", 89%, 61%)"
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = colorhue;
    }
    var y = document.getElementsByClassName("akzent");
    var j;
    for (j = 0; j < y.length; j++) {
      y[j].style.color = colorhue;
    }

    var obj = document.getElementsByClassName("svgobject");
    var m;
    for (m = 0; m < obj.length; m++) {
      var el =  obj[m].getSVGDocument().getElementsByClassName("akzentsvg");
      // console.log(el.length);
      var i;
      for (var i = 0; i < el.length; i++) {
        el[i].style.fill = colorhue;
      }
    }
    var phys = document.getElementById("phys");
    var g = phys.getSVGDocument().getElementsByClassName("rotate");
    var l;
    for (l = 0; l < g.length; l++) {
      if (l==1) {
        g[l].style.transform = "rotate("+(-percent*1000)+"deg)";
      }
      else {
        g[l].style.transform = "rotate("+(percent*800)+"deg)";
      }
    }
  }
};
var waiting = false;
document.addEventListener('scroll', function(){
    if (waiting) {
        return;
    }
    waiting = true;

    scroll();

    setTimeout(function () {
        waiting = false;
    }, 100);
});


document.onkeydown = navlightbox;

function navlightbox(e) {

  e = e || window.event;
  // var lightboxes = document.getElementsByClassName("lightbox");
  var tags = ["grenade","alf","alffunc","spotify","uni","icon","technisch","sunshine","app"]
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
