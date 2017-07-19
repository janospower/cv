document.addEventListener('scroll', function(){

    var docEl = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (docEl[st]||b[st]) / ((docEl[sh]||b[sh]) - window.innerHeight);

	// console.log(percent);

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

    var progb = document.getElementsByClassName("scrollprog");
    // console.log(progb[0]);
    progb[0].style.width = (percent * 100)+"%";

    var svg = document.getElementsByClassName("akzentsvg");
    var k;
    for (k = 0; k < svg.length; k++) {
      
        svg[k].style.stroke = colorhue;

      if (svg[k].style.fill!="") {
        svg[k].style.fill = colorhue;
      }
    }
  }


});
