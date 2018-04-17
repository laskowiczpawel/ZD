
$("#pen").click(function(){
    $("#menu").toggleClass("hide");
});

var oddClick = true;
$("#pen").click(function () {
     $("#pen > i.material-icons").text(oddClick ? "arrow_forward" : "menu");
    oddClick = !oddClick;
});

$("#stars > .material-icons").click(function () {
    $("#stars > .material-icons").innerHTML = "star";
});