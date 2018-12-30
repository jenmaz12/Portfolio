$(document).ready(function() {
    var name;
    var modal;
    $(document).on("click",".nav-link",function(){
        $(".modal").attr("style","display: none");
        name = $(this).attr("data-name");
        modal = document.getElementById(name + "-page");
        modal.style.display = "block";
        $(document).on("click",".close",function(){
            modal.style.display = "none";
        })
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            };
        };
    });

    
});