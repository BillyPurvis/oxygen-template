window.onload = function() {
  document.getElementById("background").style.height = (window.innerHeight + 100) + "px";
  $("section").animate( {
    paddingTop: "14px",
    opacity: "1",
  }, 1250);
  $("header.secondaryfade").animate( {
    opacity: "1",
  }, 1250);
};

jQuery.easing.def = "easeOutExpo";
