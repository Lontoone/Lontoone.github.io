$(document).on("click", "#nav-home", function () {
  document.getElementById("iMiddleContent").src = "../html/home.html";
});

$(document).on("click", "#nav-blog", function () {
  document.getElementById("iMiddleContent").src = "../html/blog.html";
});

$(document).on("click", "#nav-games", function () {
  document.getElementById("iMiddleContent").src = "../html/games.html";
});

/*
function setIframe(page) {
  $("#iMiddleContent").src = "../html/" + page + ".html";
}
*/
