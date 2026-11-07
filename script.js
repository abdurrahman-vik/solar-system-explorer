// Shows one page and hides all the others
function showPage(id) {
  var pages = document.querySelectorAll(".page");

  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }

  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);

  // The home arrow shows on topic pages only
  var arrow = document.getElementById("homeArrow");

  if (id === "home") {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
}

// Back to top button appears after scrolling down 400 pixels
window.onscroll = function () {
  var btn = document.getElementById("topBtn");

  if (window.scrollY > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function goTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
