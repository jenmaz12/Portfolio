// $(document).ready(function() {
//     // declare variables
//     var name;
//     var modal;
//     // when icon is clicked . . .
//     $(document).on("click",".nav-link",function(){
//         // Hide modals that are currently open
//         $(".modal").attr("style","display: none");
//         // Get the data-name of the clicked icon
//         name = $(this).attr("data-name");
//         // Get the modal by id using the icon data-name and "-page"
//         modal = document.getElementById(name + "-page");
//         // unhide the modal
//         modal.style.display = "block";
//         // when the x is clicked, hide the modal
//         $(document).on("click",".close",function(){
//             modal.style.display = "none";
//         })
//         // when anything outside the modal is clicked, hide the modal
//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             };
//         };
//     });

    
// });