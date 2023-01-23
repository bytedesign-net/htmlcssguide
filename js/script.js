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
    let string = hljs.highlightAuto(code).value;
    const pattern = "非推奨";
    if (string.indexOf(pattern) > -1) {
      return (
        '<pre class="code-ng"' +
        '><code class="hljs">' +
        hljs.highlightAuto(code).value +
        "</code></pre>"
      );
    } else {
      return (
        '<pre class="code-ok"' +
        '><code class="hljs">' +
        hljs.highlightAuto(code).value +
        "</code></pre>"
      );
    }
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
          jQuery(".panel").append('<p class="h2 mb-0">' + headingText + "</p>");
          if (i === 1) {
            jQuery(".panel-tabs is-active").append(
              "<a>" + headingText + "</a>"
            );
          } else {
            jQuery(".panel-tabs").append("<a>" + headingText + "</a>");
          }
        } else if (heading.is("h3")) {
          jQuery(".panel").append('<p class="h3 mb-0">' + headingText + "</p>");
        } else if (heading.is("h4")) {
          let headingId = "headline_" + j;
          heading.attr("id", headingId);
          jQuery(".panel").append(
            '<a class="h4 panel-block has-text-link" href=\'#' +
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

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});
