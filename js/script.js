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
      console.log(data);
      target.append(marked.parse(data));
      /*=== ローカルナビ生成 ===*/
      jQuery("h2").each(function (i) {
        var heading = $(this);
        var headingId = "headline_" + (i + 1);
        var headingText = heading.text();
        heading.attr("id", headingId);
        jQuery(".panel").append(
          '<a class="panel-block" href=\'#' +
            headingId +
            "'>" +
            headingText +
            "</a>"
        );
      });
    })
    // error
    .fail(function (jqXHR, textStatus, errorThrown) {
      target.append("This content failed to load.");
    });
});
