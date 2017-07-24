
var i = 4793;
var svgelements = 28;

window.onload = auto();

function setColor() {
  var rand = [];
  for (j = 0; j < svgelements; j++) {
    rand[j] = false;
  }
      var bina = ((i*55924) >>> 0).toString(2).split("");


      for (j = 0; j < bina.length; j++){
        if (bina[j] == "1") {
          rand[j + (28 - bina.length)]=true;
        }
      }


      for (j = 0; j < svgelements; j++) {
        //if(rand[j]){
        if (Math.floor(Math.random()+0.5)==1){
          document.getElementById(j).style.stroke = "black";
        }
        else {
          document.getElementById(j).style.stroke = "none";
        }
      }
      fileName =  i+'.svg';
      i++;
      //document.getElementById('downloadLink').click();
}

function auto(){
i=0;
  setInterval(function () {
    if(i < 4800 +1){ // parseInt(1111111111111111111111111111, 2) -> 268435455 overflow
      setColor();
    }

  }, 100);
}

function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}

var fileName; // You can use the .txt extension if you want

$('#downloadLink').click(function(){
    downloadInnerHtml(fileName, 'holder','text/html');
}); //JQuery!!
