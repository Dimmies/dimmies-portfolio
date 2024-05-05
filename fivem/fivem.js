$( document ).ready(function() {
    $("#fullview").fadeOut(0)
    $(".gallery-cell > img").on("click", function(ele) {
        $("#fullview-img").attr("src", $(ele.target).attr("src"))
        $("#fullview").fadeIn(300)
    })

    $("#fullview").on("click", function(ele) {
        $("#fullview").fadeOut(300)
    })
});

$(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        $("#fullview").fadeOut(300)
    }
});