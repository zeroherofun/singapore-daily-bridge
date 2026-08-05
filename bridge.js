(function () {
  "use strict";

  var COOKIE_KEY = "sd_cookie_consent";
  var COOKIE_MONTHS = 6;
  var banner = document.getElementById("cookie-banner");

  function setConsent(value) {
    var expires = new Date();
    expires.setMonth(expires.getMonth() + COOKIE_MONTHS);
    document.cookie =
      COOKIE_KEY +
      "=" +
      encodeURIComponent(JSON.stringify(value)) +
      ";expires=" +
      expires.toUTCString() +
      ";path=/;SameSite=Lax";
    if (banner) banner.hidden = true;
  }

  function getConsent() {
    var match = document.cookie.match(new RegExp("(?:^|; )" + COOKIE_KEY + "=([^;]*)"));
    if (!match) return null;
    try {
      return JSON.parse(decodeURIComponent(match[1]));
    } catch (e) {
      return null;
    }
  }

  if (banner && !getConsent()) {
    banner.hidden = false;

    var acceptBtn = banner.querySelector(".sd-cookie-accept");
    var rejectBtn = banner.querySelector(".sd-cookie-reject");
    var customiseBtn = banner.querySelector(".sd-cookie-customise-toggle");
    var customisePanel = banner.querySelector(".sd-cookie-customise");
    var saveBtn = banner.querySelector(".sd-cookie-save");

    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        setConsent({ essential: true, analytics: true, marketing: true });
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        setConsent({ essential: true, analytics: false, marketing: false });
      });
    }

    if (customiseBtn && customisePanel) {
      customiseBtn.addEventListener("click", function () {
        customisePanel.hidden = !customisePanel.hidden;
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        setConsent({
          essential: true,
          analytics: !!banner.querySelector("#cookie-analytics").checked,
          marketing: !!banner.querySelector("#cookie-marketing").checked,
        });
      });
    }
  }

  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
})();
