//tab展開
var tabButtons = document.getElementsByClassName("tab-btn_container button");
var tabPanles = document.getElementsByClassName("tabPanle");

var currentTab;
function showPanel(panel_index) {
    
    //tabButtons[panel_index].style.backgroundColor="";
    for (var i = 0; i < tabPanles.length; i++) {
        tabPanles[i].style.display = "none";
    }
    tabPanles[panel_index].style.display = "block";
    currentTab = tabPanles[panel_index];
}
if (tabPanles.length > 0) {
    showPanel(0);
}

//換tab時更換lable內容
function changeFloatNavLable() {
    //取得tab內容裡面的主標題
    var tab_P = currentTab.getElementsByClassName("title2");
    var floatNav_ul = document.querySelector(".floatNav ul");

    //清空子物件
    while (floatNav_ul.firstChild) { floatNav_ul.removeChild(floatNav_ul.firstChild); }
    for (i = 0; i < tab_P.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement("a");
        a.innerHTML = tab_P[i].innerHTML;
        //用每個標題當link
        a.setAttribute("href", "#" + tab_P[i].innerHTML);
        //第一個設實心圓
        if (i == 0) { a.classList.add("navTab"); }
        li.appendChild(a);
        floatNav_ul.appendChild(li);
    }
    
    setFloatNav();
}
//判斷目前頁面，執行:
if (window.location.pathname == "/html/activity.html") {
    //currentTab=0;
    changeFloatNavLable();
}

//刷新
setFloatNav();
function setFloatNav() {
    //右側浮動導覽
    var floatNavItems = document.querySelectorAll(".floatNav ul li a");
    console.log(floatNavItems);
    for (var i = 0; i < floatNavItems.length; i++) {
        floatNavItems[i].addEventListener("click", function (e) {
            for (var j = 0; j < floatNavItems.length; j++) {
                floatNavItems[j].classList.remove("navTab");
            }
            this.classList.add("navTab");
            console.log(this);
        });
    }
}

//字數太多自動開啟換行(Table)
var tableContent = document.querySelectorAll(".sub-content table td");
var tableList = document.querySelectorAll(".sub-content table ul");
if (tableContent.length > 0) {
    for (var i = 0; i < tableContent.length; i++) {
        if (tableContent[i].textContent.length > 7) {

            tableContent[i].classList.add("table-td-white-space-prewrap");
            //console.log(tableContent[i].textContent.length);
        }
        else{
            tableContent[i].classList.add("table-td-white-space-nowrap");
        }
    }
    //排除td裡面ul屬性
    if (tableList.length > 0) {
        for (var i = 0; i < tableList.length; i++) {
            tableList[i].parentElement.classList.remove("table-td-white-space-prewrap");
            console.log(tableList[i].parentElement);

        }
    }

}


