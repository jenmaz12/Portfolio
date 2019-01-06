window.onload = function() {
    function mobile_layout(){
        var viewportWidth = $(window).width();
        if (viewportWidth < 375) {
            $(".contact-row").addClass("justify-content-sm-center");
            $(".contact-column").addClass("justify-content-sm-center");
        }
    }
    mobile_layout();
}
