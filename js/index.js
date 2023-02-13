$(document).ready(function(){
    $("a").click(function(e) {
        e.preventDefault();

        $("#framechange").attr("src", $(this).attr("href"));
        $("a").removeClass("nav-active ");
        $(this).addClass("nav-active ");
    })
})
