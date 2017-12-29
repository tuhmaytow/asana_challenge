// function myFunction() {
//     var x = document.getElementById("buttondiv");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

$(document).ready(function(){
    $("button").click(function(){
        $(".card").toggle();
    });
});
