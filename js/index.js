$(document).ready(function(){
    $("a").click(function(e) {
        e.preventDefault();
    if (!$(this).hasClass("nav-no-active")) {
      $("#framechange").attr("src", $(this).attr("href"));
      $("a").removeClass("nav-active ");
      $(this).addClass("nav-active ");
        }
    });
});

function changeIframeSrc(newSrc) {
    // zmień adres URL strony z nowym adresem URL zawierającym nazwę pliku w src
    var newUrl = "/lernvideos-v2a/" + newSrc;
    window.location.href = newUrl;
  }