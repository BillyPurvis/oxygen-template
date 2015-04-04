window.onload = function() {
    document.getElementById("background").style.height= (window.innerHeight+100)+"px";

    $("section").animate( {
        paddingTop: "84px",
        opacity: "1",
    });
};

jQuery.easing.def = "easeOutExpo";
