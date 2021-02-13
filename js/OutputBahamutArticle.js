OutputBahamuteArticleList();

function OutputBahamuteArticleList() {
  console.log($("h2").text());
  //讀取文字檔
  var path = "../data/bahamuteArticleData.json";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", path, false);

  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        //拆json
        var objs = JSON.parse(allText);

        console.log(objs.length);
        $.each(objs, function (index, obj) {
          var unit = $($("#article-col-template").html()).clone();
          
          //console.log($("#bahamut-profolio-list ul"));
          //設定
          $(unit).find("h2").html(obj.title_text);
          $(unit).find(".sub-text").html("內容");
          $(unit).find("img").attr("src", obj.thumbnail_url);

          $("#bahamut-profolio-list ul").append(unit);
        });
      }
    }
  };
  rawFile.send(null);
}
