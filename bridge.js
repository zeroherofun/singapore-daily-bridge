document.addEventListener("DOMContentLoaded", function () {
  var cookieBar = document.getElementById("sd-cookie");
  var cookieBtn = document.getElementById("sd-cookie-accept");

  if (cookieBtn && cookieBar) {
    if (localStorage.getItem("sd_cookie_ok")) {
      cookieBar.style.display = "none";
    }
    cookieBtn.addEventListener("click", function () {
      localStorage.setItem("sd_cookie_ok", "1");
      cookieBar.style.display = "none";
    });
  }

  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
});
