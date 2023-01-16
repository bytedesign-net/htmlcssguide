$(function() {
    /*=== サイドバーの見出し生成  ===*/
    $("h2").each(function(i) {
        var heading = $(this);
        var headingId = "headline_" + (i + 1);
        var headingText = heading.text();
        heading.attr("id", headingId);
        $(".nav-heading").append("<li class=''><a href='#" + headingId + "'>" + headingText + "</a></li>");
    });
});