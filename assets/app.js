window.onload = function() {
    function mobile_layout(){
        var viewportWidth = $(window).width();
        if (viewportWidth < 375) {
            $(".contact-row").addClass("justify-content-center");
            $(".contact-column").addClass("justify-content-center");
            $(".contact-image").addClass("row");
        }
    }
    mobile_layout();
}
