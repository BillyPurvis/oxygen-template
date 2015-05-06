window.onload = function() {
  document.getElementById("background").style.height = (window.innerHeight + 100) + "px";
  
  $("section").animate( {
    paddingTop: "14px",
    opacity: "1",
  });

  $("header.secondary").animate( {
    opacity: "1",
  }, 1000);
};

jQuery.easing.def = "easeOutExpo";
