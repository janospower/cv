document.addEventListener('scroll', function(){

    var docEl = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (docEl[st]||b[st]) / ((docEl[sh]||b[sh]) - window.innerHeight);

	// console.log(percent);

  if (0 <= percent && percent <= 1) {

    // var hone = document.getElementsByClassName("headerone");
    //   hone[0].style.transform = "rotateX("+(docEl[st]||b[st]*0.6)+"deg)";

      // hone[0].style.transform += "translateY("+(percent*2500)+"px)";


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

    var progb = document.getElementsByClassName("scrollprog");
    // console.log(progb[0]);
    progb[0].style.height = (percent * 100)+"%";

    var svg = document.getElementsByClassName("akzentsvg");
    var k;
    for (k = 0; k < svg.length; k++) {
      svg[k].style.fill = colorhue;
    }

    var g = document.getElementsByClassName("rotate");
    var l;
    for (l = 0; l < g.length; l++) {
      g[l].style.transform = "rotate("+(percent*500)+"deg)";
    }
  }
});
// function changetarget() {
//   if(event.target.classList.length==1){
//     event.target.className += " target";
//   }
// }

document.onkeydown = navlightbox;

function navlightbox(e) {

    e = e || window.event;
    // var lightboxes = document.getElementsByClassName("lightbox");
    var tags = ["grenade","alf","spotify","uni"]
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
