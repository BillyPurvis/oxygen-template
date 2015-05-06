window.onload = function() {
  document.getElementById("background").style.height = (window.innerHeight + 100) + "px";
  $("section").animate( {
    paddingTop: "14px",
    opacity: "1",
  });
  $("header.secondaryfade").animate( {
    opacity: "1",
  }, 1000);
};

window.onresize = function() {
  document.getElementById("background").style.height = (window.innerHeight + 100) + "px";
};

jQuery.easing.def = "easeOutExpo";
