document.addEventListener('scroll', function(){

    var docEl = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (docEl[st]||b[st]) / ((docEl[sh]||b[sh]) - window.innerHeight);

	// console.log(percent);
  if (0 <= percent && percent <= 1) {
    
  }


});
