$(document).on("click", "#nav-home", function () {
  console.log("hi");
  document.getElementById("iMiddleContent").src = "../html/home.html";
});

$(document).on("click", "#nav-blog", function () {
    console.log("hi");
    document.getElementById("iMiddleContent").src = "../html/blog.html";
  });
  

/*
function setIframe(page) {
  $("#iMiddleContent").src = "../html/" + page + ".html";
}
*/
