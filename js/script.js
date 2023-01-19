//mdファイル読み込み
window.onload = function () {
  marked_js_render();
};
/*
 * 拡張の追加
 */
function marked_js_render() {
  // marked.js + highlight.js
  var renderer = new marked.Renderer();

  // code syntax hilightの編集
  renderer.code = function (code, language) {
    return (
      "<pre" +
      '><code class="hljs">' +
      hljs.highlightAuto(code).value +
      "</code></pre>"
    );
  };

  marked.setOptions({
    renderer: renderer,
  });
}
jQuery(document).ready(function () {
  const target = jQuery("#content");
  jQuery
    .ajax("index.md")
    // success
    .done(function (data, textStatus, jqXHR) {
      target.append(marked.parse(data));
      /*=== ローカルナビ生成 ===*/
      let i,
        j = 1;
      jQuery(":header").each(function (n) {
        let heading = $(this);
        let headingText = heading.text();
        if (heading.is("h2")) {
          if (i === 1) {
            jQuery(".panel-tabs is-active").append(
              "<a>" + headingText + "</a>"
            );
          } else {
            jQuery(".panel-tabs").append("<a>" + headingText + "</a>");
          }
        } else if (heading.is("h3")) {
          jQuery(".panel").append('<p class="h3">' + headingText + "</p>");
        } else if (heading.is("h4")) {
          let headingId = "headline_" + i;
          heading.attr("id", headingId);
          jQuery(".panel").append(
            '<a class="h4 panel-block" href=\'#' +
              headingId +
              "'>" +
              headingText +
              "</a>"
          );
          j++;
        }
      });
    })
    // error
    .fail(function (jqXHR, textStatus, errorThrown) {
      target.append("This content failed to load.");
    });
});
