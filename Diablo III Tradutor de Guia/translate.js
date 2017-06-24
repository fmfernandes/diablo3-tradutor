// a[class='d3_build_passive_skill_link d3_passive_skill'] apaga a imagem da skill

// passar pelo check de idade
$.post('https://us.battle.net/d3/pt/age', {day: 1, month: 3, year: 1337});

$("a[class=d3_set], a[class=d3_legendary], a[class=d3_active_skill]").each(function(index, link) {
  $.get($(this).attr("href").replace("en", "pt").replace("http", "https"), function(html) {
    var itemName = $(html).find("title").text().replace(" - Guia - Diablo III", "");
    $(link).text(itemName);
  });
});
