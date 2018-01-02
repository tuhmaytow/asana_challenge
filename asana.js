// function myFunction() {
//     var x = document.getElementById("buttondiv");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// $(document).ready(function(){
//     $("button").click(function(){
//         $(".card").toggle();
//     });
// });

$(".button").click(function(){
    $.ajax({
      url: "https://app.asana.com/api/1.0/tasks/509406739863201",
      method: "GET",
      Authorization: {
        Bearer: "0/0c60e78596a717c771c04c1c35b0a451"
      },
      success: function(result){
        $(".card").html(result);
    }});
});
