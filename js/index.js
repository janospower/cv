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
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "hsl("+ (152+ (percent * 360)) +", 89%, 61%)";
    }
    var y = document.getElementsByClassName("akzent");
    var j;
    for (j = 0; j < y.length; j++) {
      y[j].style.color = "hsl("+ (152+ (percent * 360)) +", 89%, 61%)";
    }
  }


});
