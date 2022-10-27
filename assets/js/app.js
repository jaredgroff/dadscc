/* ====================
Drawing Canvas
==================== */
$(document).ready(function () {
  $.markerPen({
    color: "#f1f1f1",
    stroke: 5,
    opacity: ".95",
  });
});

/* ====================
Navbar
==================== */
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

/* ====================
Navbar Active
==================== */
$("a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500
  );
  return false;
});

// Cache selectors
var topMenu = $(".navbar"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class
  menuItems
    .parent()
    .removeClass("active-link")
    .end()
    .filter("[href='#" + id + "']")
    .parent()
    .addClass("active-link");
});

/* ====================
Recipes Tabs
==================== */
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
