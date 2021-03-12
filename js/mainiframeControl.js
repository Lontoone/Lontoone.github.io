$(document).on("click", "#nav-home", function () {
  document.getElementById("iMiddleContent").src = "../html/home.html";
});

$(document).on("click", "#nav-blog", function () {
  document.getElementById("iMiddleContent").src = "../html/blog.html";
});

$(document).on("click", "#nav-games", function () {
  document.getElementById("iMiddleContent").src = "../html/games.html";
});
$(document).on("click", "#nav-webs", function () {
  document.getElementById("iMiddleContent").src = "../html/website.html";
});
$(document).on("click", "#nav-git", function () {
  document.getElementById("iMiddleContent").src = "../html/github.html";
});
/*
function setIframe(page) {
  $("#iMiddleContent").src = "../html/" + page + ".html";
}
*/
