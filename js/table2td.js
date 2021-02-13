
//const fileUrl = '../data/data.txt' // provide file location

var data_s;


//讀取本地資料(table)
//function table2td(file, tbodyID) {
function readTextFile(file, tbodyID) {
    var rawFile = new XMLHttpRequest();

    var path = "../data/"+LANG+"/"+file;

    //rawFile.open("GET", file, false);
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                data_s = allText;
                //console.log(data_s);
                //alert(allText);
                splitData(data_s, tbodyID);
            }
        }
    }
    rawFile.send(null);
}
//切割data
function splitData(data, tbodyID) {
    var tb = document.getElementById(tbodyID);
    data = data.replace('\r', '');
    var trs = data.split('\n');
    for (i = 0; i < trs.length; i++) {
        //切tr
        var tr = tb.insertRow(i);
        //切td
        var tds = trs[i].split('\t');
        for (j = 0; j < tds.length; j++) {
            var td = tr.insertCell(j);
            td.innerHTML = tds[j];
        }
    }


}

//#TODO
//List2_Ol_li
function List2_Ol_li(file, olID, otherClass) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                data_s = allText;
               
                //讀取成功切割資料:
                data_s = data_s.replace('\r', '');
                var lis = data_s.split('\n');
                for(i =0;i<lis.length;i++){
                    var ol=document.getElementById(olID);
                    var li=document.createElement('li');
                    li.appendChild(document.createTextNode(lis[i]));
                    //li.firstChild.classList.add("orderList-content");
                    ol.appendChild(li);
                }
            }
        }
    }
    rawFile.send(null);

}