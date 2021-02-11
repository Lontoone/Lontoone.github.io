function setHtmlHeader() {
  var s = "../html/header_templet.txt";
  
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", s, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        //data_s=allText;
        //alert(allText);
        console.log(allText);
        document.head.innerHTML = allText;
      }
    }
  };
  rawFile.send(null);
}
