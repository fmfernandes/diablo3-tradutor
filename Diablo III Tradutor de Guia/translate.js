//a[class=d3_active_skill] gera "Diablo III" como nome pois é necessário passar o check de idade

$("a[class=d3_set], a[class=d3_legendary]").each(function(index, link) {
  $.get($(this).attr("href").replace("en", "pt"), function(html) {
    var itemName = $(html).find("title").text().replace(" - Guia - Diablo III", "");
    $(link).text(itemName);
  });
});


