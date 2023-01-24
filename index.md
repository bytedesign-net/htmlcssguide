﻿# **【notec】HTML・CSS コーディングガイドライン**

Powered by [Google Style Guides](https://google.github.io/styleguide/), [@tsunogai](https://qiita.com/tsunogai/items/05b944debbcac35fbc18)様(CC BY 3.0)

## **1.はじめに**

本ガイドラインは個人またはチームにてコーディング手法に規則・方針を作ることにより、記法の統一化や複数人でコーディングする際のコミュニケーションの円滑化、担当者の引き継ぎの手間を削減するためのものです。

## **2 一般事項**

### **2.1 共通のスタイル規則**

#### **2.1.1 プロトコル**

`<image>`や`<media>`、`<script>` などのエンディベッドコンテンツ(埋め込み要素)には可能な限り https を利用する。

```
<!-- 非推奨：プロトコルの省略 -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- 非推奨：httpの利用 -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
```

```
<!-- 推奨 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
```

```
/* 非推奨：プロトコルの省略 */
@import '//fonts.googleapis.com/css?family=Open+Sans';

/* 非推奨: HTTPの利用 */
@import 'http://fonts.googleapis.com/css?family=Open+Sans';
```

```
/* 推奨 */
@import 'https://fonts.googleapis.com/css?family=Open+Sans';
```

#### **2.1.2 Link**

相対パスで記述する。URL の index.html は省略。

```
<!-- 非推奨 -->
<a href="../style-guide/index.html">デザインシステムへ</a>
```

```
<!-- 推奨 -->
<a href="../style-guide/">デザインシステムへ</a>
```

```
/* 非推奨 */
background-image:url(../../img/style-guide/hero-sytle-guide.gif);
```

```
/* 推奨 */
background-image:url(../img/style-guide/hero-sytle-guide.gif);
```

### **2.2 共通のフォーマットルール**

#### **2.2.1 インデント**

インデントはタブ 1 個分。半角スペースは利用しない。

```
<ul>
    <li>Fantastic</li>
    <li>Great</li>
</ul>
```

```
.example {
    color: blue;
}
```

#### **2.2.2 大文字を使用しない**

全てのコードは小文字で記述する: HTML の要素名、属性、属性値（text/CDATA を除く）、CSS セレクター、プロパティ、およびプロパティ値（文字列を除く）に適用。

```
<!-- 非推奨 -->
<A HREF="/">Home</A>
```

```
<!-- 推奨 -->
<img src="google.png" alt="Google">
```

```
/* 非推奨 */
color: #E5E5E5;
```

```
/* 推奨 */
color: #e5e5e5;
```

#### **2.2.3 末尾の空白**

末尾の空白は削除します。

末尾の空白は不要で、ソースコードを比較をする際に邪魔になります。

```
<!-- 非推奨 -->
<p>何?_
```

```
<!-- 推奨 -->
<p>はい、お願いします。
```

### **2.3 共通のメタタグのルール**

#### **2.3.1 エンコード**

UTF-8(BOM 無し)を使用する。

`<meta charset = "utf-8">`で HTML テンプレートと文書のエンコーディングを指定してください。

使用しているエディターの文字エンコーディングは UTF-8 を使用し、BOM(Byte Order Mark)は使用しないでください。

スタイルシートやスクリプトは UTF-8 で記述し、エンコーディングは避けてください。

#### **2.3.2 コメント**

必要に応じて、可能な限りコードを説明する。

コードを説明するためにコメントを使用してください。そのコードが何を、どのような目的で、なぜそのような記述にしたいのか。

ただし、完全に文書化したコーディングの追及は現実的ではないので参考程度にしてください。

#### **2.3.3 アクションアイテム**

アクションアイテム(チーム内の要対応箇所)は`TODO`でマークすること。

`TODO`のみを使用して強調し、`@@`のような他の形式は強調しない。

連絡先は`TODO（contact）`の形式で丸かっこで囲んで追加します。

アクションアイテムは`TODO：action item`の形式でコロンの後に追加します。

## **3 HTML**

### **3.1 HTML スタイルルール**

#### **3.1.1 ドキュメントタイプ**

HTML5 を使用する。

HTML の開始は`<!DOCTYPE html>` `<html>`と記述する。

void 要素は/で閉じない。例：`<br />`ではなく、 `<br>`と記述する。

#### **3.1.2 HTML バリデーション**

[コンテンツモデル](https://developer.mozilla.org/ja/docs/Web/HTML/Content_categories)に従い、文書構造に沿ったマークアップを心がける。

[W3C HTML validator](https://validator.w3.org/nu/)のようなバリデーションツールを使用してテストする。

```
<!-- 非推奨 -->
<title>テスト</title>
<article>これはテストです。
```

```
<!-- 推奨 -->
<!DOCTYPE html>
<html lang="ja">
<meta charset="utf-8">
<title>テスト</title>
<article>これはテストです。</article>
```

#### **3.1.3 セマンティックな HTML を書く**

目的に応じた HTML 要素(タグ)を使用する。

例えば見出し`h*`要素、本文は`p`要素、リンクは`a`要素、ボタンは`button`など。

目的に応じた HTML 要素を使用することは、アクセシビリティ、コードの再利用、および効率化の観点において重要です。

```
<!-- 非推奨 -->
<div onclick="goToRecommendations();">推奨事項</div>
```

```
<!-- 推奨 -->
<a href="recommendations/">推奨事項</a>
```

#### **3.1.4 マルチメディアの代替コンテンツ**

マルチメディアは代替コンテンツを用意する必要がある。

画像、動画、アニメーションオブジェクトなどのマルチメディアは、必ず代替コンテンツを用意してください。必要に応じて字幕や説明文を使用してください。

アクセシビリティ上の理由から、代替コンテンツを用意することは重要です。画像に`@alt`がない場合、視覚障害者のユーザーは画像が何を意味しているのかわかる手がかりがほとんどなく、動画や音声に関して何を意味しているのか理解できないかもしれません。

(alt 属性に冗長性が生じる可能性のある画像や、純粋に装飾目的の画像は、代替コンテンツを使用せず、`alt=""`としてください)

```
<!-- 非推奨 -->
<img src="spreadsheet.png">
```

```
<!-- 推奨 -->
<img src="spreadsheet.png" alt="スプレッドシートのスクリーンショット">
<img src="padding.png" alt="">
```

#### **3.1.5 関係の分離**

HTML（文書構造）と CSS（スタイル）と Script（動き、振る舞い）の相互関係をできるだけなくし、独立させる。

ドキュメントやテンプレートには HTML の記述のみとし、文書構造だけの記述にしてください。

スタイルに関する記述は css ファイルへ、振る舞いに関しては js ファイルへ記述にしてください。

HTML からリンクした css ファイルや js ファイルは分割せずに単一のファイルをまとめることでリンクを減らすことができます。

```

<!-- 非推奨 -->
<!DOCTYPE html>
<html lang="ja">
<head>
<title>最悪なHTML</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
</head>
<body>
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>サイトで何度か見たことがありますが、今確信しました。<u>HTMLってバカじゃない!?</u>
<center>わたしのサイトをスタイルする方法がないなんて信じられない!</center>
```

```
<!-- 推奨 -->
<!DOCTYPE html>
<html lang="ja">
<head>
<title>初めてのCSSだけのデザイン</title>
<link rel="stylesheet" href="default.css">
</head>
<body>
<h1>初めてのCSSだけのデザイン</h1>
<p>サイトで何度か見たことがありますが、今日は実際にそうしています。HTMLから装飾的なものを取り除き、相互関係をなくしています。</p>
<p>すごいですね!
```

#### **3.1.6 実体参照**

実体参照は使用しない。

`&mdash;`(&mdash;)`&rdquo;`(&rdquo;)`&#x263a;`(&#x263a;)のような実体参照は必要ありません。

ただし`&lt;`(&lt;)`&gt;`(&gt;)`&amp;`(&amp;)`&copy;`(&copy;)などの特別な意味を持つ文字や機種依存文字は例外です。

```
<!-- 非推奨 -->
円の通貨記号は &ldquo;&yen;&rdquo;です。
```

```
<!-- 推奨 -->
円の通貨記号は ”\”です。
```

#### **3.1.7 閉じタグを省略可能な要素**

html, body, p, td など[閉じタグを省略可能な要素](https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission)は省略しない。

```
<!-- 非推奨 -->
<p>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
```

```
<!-- 推奨 -->
<p>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
```

#### **3.1.8 `type`属性**

stylesheet と script の type 属性は省略する。

stylesheet（css を使用していない場合）と script（javaScript を使用していない場合）には、type 属性を使用しないでください。

HTML5 では text/css と text/javascript はデフォルトで指定されているため、これらに type 属性を指定する必要はありません。

```
<!-- 非推奨 -->
<link rel="stylesheet" href="css/style.css" type="text/css">
```

```
<!-- 推奨 -->
<link rel="stylesheet" href="css/style.css">
```

```
<!-- 非推奨 -->
<script src="js/script.js" type="text/javascript"></script>
```

```
<!-- 推奨 -->
<script src="js/script.js"></script>
```

#### **3.1.9 `id`属性**

不必要な`id`属性は避ける。

`class`属性は装飾に、`data`属性は script に使用することを推奨します。

`id`属性がどうしても必要な場合は、javaScript の命名規則(キャメルケース)と混同しないように、値に必ずハイフンを入れてください（例：id="profile", id="userProfile"ではなく、id="user-profile"とする）。

要素に`id`属性がある場合、ブラウザはその `id`属性をグローバルウィンドウプロトタイプの名前付きプロパティとして利用できるようにしますが、これは予期せぬ振る舞いを引き起こす可能性があります。ハイフンを含む `id`属性の値はプロパティ名として利用可能ですが、グローバルな javaScript 変数として参照することはできません。

```
<!-- 非推奨: `window.userProfile`は<div>ノードを参照するために解決されます。 -->
<div id="userProfile"></div>
```

```
<!-- 推奨: `id` 属性は is 必須であり、値にはハイフンを含めます -->
<div aria-describedby="user-profile">
  …
  <div id="user-profile"></div>
  …
</div>
```

### **3.2 HTML のフォーマットのルール**

#### **3.2.1 共通のフォーマット**

ブロッククオート(引用)、リスト、テーブル要素は都度改行し、子要素はすべてインデントする。

スタイルと関係なく(CSS では表示特性ごとに要素の役割を決めることができるため)、ブロック、リスト、テーブルの要素はすべて改行する。

ブロッククオート、リスト、テーブル要素の子要素は tab でインデントする。

```
<blockquote>
    <p><em>宇宙</em>、それは最後の辺境です。</p>
</blockquote>
```

```
<ul>
    <li>山田</li>
    <li>佐藤</li>
    <li>鈴木</li>
</ul>
```

```
<table>
    <thead>
        <tr>
            <th scope="col">収入</th>
            <th scope="col">税金</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>\500</td>
            <td>\450</td>
        </tr>
    </tbody>
</table>
```

#### **3.2.2 HTML 改行**

長い行は適宜改行する。

HTML 文字の列を制限するような推奨はしませんが、読みやすくなる場合は長い行を折り返すとよいでしょう。

折り返す場合は、折り返した属性と子要素を区別するために、元の行を基準に最低 1 つのタブを追加してインデントしてください。

```
<!-- 非推奨 -->
<md-progress-circular
    md-mode="indeterminate"
    class="md-accent"
    ng-show="ctrl.loading"
    md-diameter="35">
</md-progress-circular>
```

```
<!-- 非推奨 -->
<md-progress-circular md-mode="indeterminate"
    class="md-accent"
    ng-show="ctrl.loading"
    md-diameter="35">
</md-progress-circular>
```

```
<!-- 推奨 -->
<md-progress-circular md-mode="indeterminate" class="md-accent" ng-show="ctrl.loading" md-diameter="35"></md-progress-circular>
```

#### **3.2.3 HTML の引用符(クオーテーション)**

属性値の引用符はダブルクオーテーション（"）を使用する。

<!-- 非推奨 -->

<a class='maia-button maia-button-secondary'>サインイン</a>

<!-- 推奨 -->

<a class="maia-button maia-button-secondary">サインイン</a>

## **4 CSS**

### **4.1 CSS ルール**

#### **4.1.1 CSS バリデーション**

できるだけバリデーションを行う。

[W3C CSS validator](https://jigsaw.w3.org/css-validator/)のツールを使用してテストできる。

#### **4.1.2 ID およびクラスの命名規則**

意味がある、共通の ID とクラス名を使用する。

フレームワーク(Bootstrap 等)を使用している場合はそのフレームワークに合わせた命名規則に沿った命名を行う。

.btn-primary や .btn-danger といった既存には無いユーティリティを追加する時や、既存コンポーネントを継承して新しいコンポーネントを作るなど Bootstrap に依存した拡張をするときに行う方法です。Bootstrap が読み込まれている事が前提になっている以上、Bootstrap の一部として考える為、命名規則も Bootstrap と同じ全て - 区切りで命名します。またサイズに関するユーティリティに関しては、small サイズなら -sm、large サイズなら -lg などといった表記も既存のそれに合わせて省略したのもを命名します。

Bootstrap の命名に沿わないコンポーネントを自作する場合は[](https://tech-dig.jp/bem-css-html/)BEM の設計思想を踏まえて命名します。

##### **Bootstrap+BEM を取り入れた独自の命名規則**

複数の単語になる場合はハイフン(-)でつなぐ。ただしハイフンは 2 つまでとする。

ネスト(階層)はアンダースコア(\_)でつなぐ。アンダースコアは 1 つまでとする

<div class="block\_element-lg"></div>

Bootstrap 同様にマルチクラスを利用する

<!-- 非推奨 シングルクラス -->

.block, .block-modifier {

`    `width: 100%;

}

.block_element, .block_element-modifier, .block-modifier_element {

`    `background-color: blue;

`    `margin-left: 10px;

`    `width: 25%;

}

.block_element-modifier {

`    `background-color: red;

}

.block-modifier {

`    `margin-top: 20px;

}

.block-modifier_element {

`    `background-color: green;

}

シングルクラスの利点は、HTML 側で指定するクラスが一つで事足りるのでコード量が少なくシンプルになる、
デザイン崩れのリスクを抑えることが出来るというのがあげられますが、
デザインのパターンの柔軟性が乏しくなるという欠点も持ち合わせます。

<!-- 推奨 マルチクラス -->

.block {

`    `width: 100%;

}

.block .block_element {

`    `background-color: blue;

`    `margin-left: 10px;

`    `width: 25%;

}

.block .block_element.block_element-modifier {

`    `background-color: red;

}

.block.block-modifier {

`    `margin-top: 20px;

}

.block.block-modifier .block-modifier_element {

`    `background-color: green;

}

マルチクラスは柔軟性が高いという利点がありますが、
HTML 側で指定するクラスが多くなるのと指定ミスでデザインが崩れるという欠点もあります。

/\* 非推奨: 意味を持たない \*/

#yee-1901 {}

/\* 推奨: 具体的 \*/

#gallery {}

#login {}

.video {}

/\* 推奨: 共通 \*/

.aux {}

.alt {}

#### **4.1.3 ID とクラス名のスタイル**

できるだけ短い方がいいが単語を省略して意味がわからなくなるより、長くても具体的でわかりやすい方がよい。

ID またはクラス名が何であるかをできる限り簡単に。

スペルミスや間違いがないように単語のスペルや意味を調べて命名する。

できるだけ業界で一般的な命名を行う。

慣れるまでは習熟度が高い人やチーム内で相談して決める。

/\* 非推奨 \*/

#navigation {} //分かりやすいが少し長い

.atr {} //属性(attribute)の意味？省略し、かつ漠然とした命名でわからない。

/\* 推奨 \*/

#nav {} //nav は共通の省略で、Bootstrap でも.nav の命名で使用されているので統一されてわかりやすい。

.author {} //具体的でよい

#### **4.1.4 疑似要素・疑似クラス**

疑似要素のコロンは 2 つとする。

/\* 推奨 \*/

a::before {}

a::after {}

a::first-letter {}

a::first-line {}

疑似クラスのコロン 1 つとする

/\* 推奨 \*/

a:active {}

a:hover {}

a:disabled {}

a:nth-child {}

#### **4.1.5 タイプセレクタ―(小孫セレクタ―)**

ID とクラス名にタイプセレクタを使用するのを避ける。

パフォーマンスの理由からも、不必要な子孫セレクタを使用するのは避ける。

/\* 非推奨 \*/

ul#example {}

div.error {}

/\* 推奨 \*/

#example {}

.error {}

#### **4.1.6 ショートハンド(速記)プロパティ**

出来る限りショートハンドを使用する。

ただし明示的にショートハンドを使用しないことも許可。

/\* 非推奨 \*/

border-top-style: none;

font-family: palatino, georgia, serif;

font-size: 100%;

line-height: 1.6;

padding-bottom: 2rem;

padding-left: 1rem;

padding-right: 1rem;

padding-top: 0;

/\* 推奨 \*/

border-top: 0;

font: 100%/1.6 palatino, georgia, serif;

padding: 0 1rem 2rem;

#### **4.1.7 0 と単位**

必要な場合を除き、「0」値の後に単位指定を省略する。

必要でない限り、「0」の後に単位を使用しない。

flex: 0px; /\* この flex-basis には単位が必要です。 \*/

flex: 1 1 0px; /\* あいまいな単位ではなく、 IE11 では必要. \*/

margin: 0;

padding: 0;

単位はレスポンシブな要素はできるだけ rem を使用する。また rem との混同を避けるために em は使用しない。

優先順位は rem > ％ > px

#### **4.1.8 小数の 1 の位の 0 は省略する**

小数が-1 から 1 の場合は 1 の位の 0 は省略する。

font-size: .8rem;

#### **4.1.9 色指定は HEX(16 進数)を使用する**

可能であれば 3 文字の色コードを使用し、コメントで何色か記載する。

また、例外として#fff と#000 は HEX ではなく、明示的に white、#000 は black と記述する

/\* 非推奨 \*/

color: #eebbcc;

color: #fff;

color: #000;

/\* 推奨 \*/

color: #ebc; //ペールピンク

color: white;

color: black;

#### **4.1.10 プレフィックス(接頭辞)**

大規模サイトを構築する場合に ID やクラス名が重複しないように main や aside、div(.wrapper)などに固有のクラス名をつける。

.adw-help {} /\* AdWords \*/

#maia-note {} /\* Maia \*/

#### **4.1.11 ハック**

!important の使用は非推奨だが、理由のコメント付きで使用することは許可する。ネガティブマージンも同様。ただし、多用することは禁止。

CSS を使用した特定のブラウザや OS に対する UA(ユーザーエージェント)の判定は避ける。違うアプローチを先に試す。

#### **4.1.12 ベンダープレフィックス**

ベンダープレフィックスについては推奨環境のブラウザが対応している場合は不要とする。

具体的な基準は[Autoprefixer CSS online](https://autoprefixer.github.io/)にて任意のソースを貼り付け、Browserslist を [last 1 version](最新のバージョン)に変更したうえで、ベンダープレフィックスが付与されないもの。

flex, transform, transition, @keyframes, animation-, background: linear-gradient はプレフィックスは必要。(2020 年 5 月現在)

#### **4.1.12 メディアクエリ**

原則、ブレイクポイントが小さいものから優先して記載する(モバイルファースト)

メディアクエリの記述は CSS ファイルの 1 か所にまとめるのではなく、コンポーネントごとに記述する。

ブレイクポイントについては Bootstrap4 の仕様＋独自の拡張ポイントは以下のとおりとする。

|               **xs(スマホ横以上 \*拡張)**                | 320px(コンテナー最大幅: 345px)   |
| :------------------------------------------------------: | :------------------------------- |
|                   **sm(スマホ横以上)**                   | 576px(コンテナー最大幅: 540px)   |
|                  **md(タブレット以上)**                  | 768px(コンテナー最大幅: 720px)   |
| **lg(低解像度デスクトップまたは高解像度タブレット以上)** | 992px(コンテナー最大幅: 960px)   |
|           **xl(デスクトップまたはノート以上)**           | 1200px(コンテナー最大幅: 1140px) |
|       **xxl(デスクトップまたはノート以上 \*拡張)**       | 1400px(コンテナー最大幅: 1320px) |

/\* レスポンシブ対応のメディアクエリの SCSS の記述例 \*/

/\*-----------------------------------------\*/

/\* この宣言を SCSS ファイルの冒頭に記載する \*/

/\*-----------------------------------------\*/

//min-width

$breakpoint-up: (

`    `'xs': 'screen and (min-width: 320px)',

`    `'sm': 'screen and (min-width: 576px)',

`    `'md': 'screen and (min-width: 768px)',

`    `'lg': 'screen and (min-width: 992px)',

`    `'xl': 'screen and (min-width: 1200px)',

`    `'xxl': 'screen and (min-width: 1400px)',

) !default;

//max-width

$breakpoint-down: (

`    `'xs': 'screen and (min-width: 319px)',

`    `'sm': 'screen and (min-width: 575px)',

`    `'md': 'screen and (min-width: 767px)',

`    `'lg': 'screen and (min-width: 991px)',

`    `'xl': 'screen and (min-width: 1199px)',

`    `'xxl': 'screen and (min-width: 1399px)',

) !default;

//@mixin の定義

@mixin mq-up($breakpoint: md) { // 初期値は md をセット

`    `@media #{map-get($breakpoint-up, $breakpoint)} {

`        `@content;

`    `}

}

@mixin mq-down($breakpoint: md) { // 初期値は md をセット

`    `@media #{map-get($breakpoint-down, $breakpoint)} {

`        `@content;

`    `}

}

/\*-----------------------------------------\*/

/\* 特大ボタンを min-width を使用して作成する例 \*/

/\*-----------------------------------------\*/

.btn-big {

`    `padding: 1rem 2rem;

`    `border-radius: .6rem;

`    `font-size: 2.5rem;

`    `line-height: 3;

`    `@include mq-up(xs) { // 320px 以上の幅の場合

`        `font-size: 2.5rem;

`    `}

`    `@include mq-up(sm) { // 576px 以上の幅の場合

`        `font-size: 2.8rem;

`    `}

`    `@include mq-up() { // 768px 以上の幅の場合 mq-up(md)と書いても OK

`        `font-size: 3rem;

`    `}

`    `@include mq-up(lg) { // 992px 以上の幅の場合

`        `font-size: 3.2rem;

`    `}

`    `@include mq-up(xl) { // 1200px 以上の幅の場合

`        `font-size: 3.5rem;

`    `}

`    `@include mq-up(xxl) { // 1400px 以上の幅の場合

`        `font-size: 3.8rem;

`    `}

}

#### **4.1.13 Z-index**

Z-index については以下のルールとする。

- position プロパティを必ず併用する (position: static 以外)
- 整数値のみ
- z-index は以下の有効範囲内を意識する

|           **範囲**            |                                      **コンテンツタイプ**                                      |                                                                                                                                                                                                                 **説明**                                                                                                                                                                                                                 |
| :---------------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   -1(これ以下は禁止とする)    |                                        背景要素<br>body                                        |                                                                                                                                                                                                                 特になし                                                                                                                                                                                                                 |
| 0(z-index プロパティ指定なし) |                  メインコンテンツ・通常の広告<br>main, article, section など                   |                                                                                                                                                                                                     通常のコンテンツと一緒に置く広告                                                                                                                                                                                                     |
|            0 ～ 3             |     Bootstrap のコンポーネント要素<br>ボタングループ、インプットグループ、ページネーション     |                                                                                                                                                                                 0 はデフォルト（初期値）、1 は :hover、2 は :active/.active、3 は :focus                                                                                                                                                                                 |
|         1000 〜 1070          |                                  Bootstrap のオーバーレイ要素                                  | <p>ツールチップ、ポップオーバー、ナビゲーションバー、ドロップダウン、モーダルなど </p><p>$zindex-dropdown:          1000 !default;</p><p>`    `$zindex-sticky: 1020 !default;</p><p>`    `$zindex-fixed:             1030 !default;</p><p>`    `$zindex-modal-backdrop: 1040 !default;</p><p>`    `$zindex-modal:             1050 !default;</p><p>`    `$zindex-popover: 1060 !default;</p><p>`    `$zindex-tooltip: 1070 !default;</p> |
|      5,000 〜 1,999,999       |                                            拡張広告                                            |                                                                                                                                                                                        ポップアップ広告など、画面手前に現れることがあるバナーなど                                                                                                                                                                                        |
|    5,000,000 〜 5,999,999     | サイトナビゲーションに関する重要な拡張要素<br>header, footer, aside, nav, button, h1, ロゴなど |                                                                                                                                                                                  ドロップダウンナビゲーションや警告のモーダルなど、画面を覆うような要素                                                                                                                                                                                  |

### **4.2 CSS フォーマットルール**

#### **4.2.1 プロパティの記述順序**

大まかに以下の順で記述する。

- display
- list-style
- position
- float
- clear
- width
- height
- margin
- padding
- border
- background
- color
- font
- text-decoration
- text-align
- vertical-align
- white-space
- other text
- content

![Mozzilaのプロパティ記述順](Aspose.Words.69ea866f-6533-4747-b28e-0f989277c388.001.png)

[【CSS】CSS プロパティの記述順について考えてみた|unitopi](http://unitopi.com/css-order/)

宣言ブロック、宣言とプロパティ

![](Aspose.Words.69ea866f-6533-4747-b28e-0f989277c388.001.png)

---

#### **4.2.2 宣言の末尾**

宣言の末尾は漏れなくセミコロンを記述する。

ただし、scss から min.css にコンパイルした場合は自動的にの末尾のセミコロンは省略されるのでこれについては例外とする

/\* 非推奨 \*/

.test {

`    `display: block;

`    `height: 100px

}

/\* 推奨 \*/

.test {

`    `display: block;

`    `height: 100px;

}

#### **4.2.3 プロパティ名の末尾**

コロンの後ろに半角スペースを１つ入れる。

/\* 非推奨 \*/

h3 {

`    `font-weight:bold;

}

/\* 推奨 \*/

h3 {

`    `font-weight: bold;

}

#### **4.2.4 セレクタと宣言ブロックの区切り**

セレクタ―の末尾とブロックの間に半角スペースを 1 つ入れる

/\* 非推奨: 半角スペースがない \*/

#video{

`    `margin-top: 1em;

}

/\* 非推奨: 不要な改行 \*/

#video

{

`    `margin-top: 1em;

}

/\* 推奨 \*/

#video {

`    `margin-top: 1em;

}

#### **4.2.5 セレクタ―と宣言の区切り**

セレクターと宣言は改行する。

/\* 非推奨 \*/

a:focus, a:active {

`    `position: relative; top: 1px;

}

/\* 推奨 \*/

h1,

h2,

h3 {

`    `font-weight: normal;

`    `line-height: 1.2;

}

#### **4.2.6 ルールの区切り**

ルールは改行し、1 行空ける。

html {

`    `background: #fff;

}

body {

`    `margin: auto;

`    `width: 50%;

}

#### **4.2.7 CSS の引用符**

属性セレクタやプロパティ値の引用符にはダブルクォーテーション（"）ではなく、シングルクォーテーション（'）を使用する。

URI(url())値には引用符を使用しない。

例外：@charset を使用する必要がない場合は、シンブログルクフォーテーションは許可しない為、ダブルクォーテーションを使用する。

/\* 非推奨 \*/

@import url("https://www.google.com/css/maia.css");

html {

`    `font-family: "open sans", arial, sans-serif;

}

/\* 推奨 \*/

@import url(https://www.google.com/css/maia.css);

html {

`    `font-family: 'open sans', arial, sans-serif;

}

### **4.3 CSS メタルール**

#### **4.3.1 セクションのコメント**

Foundation, Layout, Object(Bootstrap でいう部品-コンポーネント), Utility の 4 つのグループにまとめる。[FLOU とは](https://webnaut.jp/technology/20170407-2421/)

/\*====================================================

Foundation

・全てのベースとなるスタイル

・基本的にコードの追加はしない

====================================================\*/

html, body, h1, h2, h3, h4, ul, ol, dl, li, dt, dd, p, div, span, img, a, table, tr, th, td など

/\*====================================================

Layout

・要素の配置や、幅や高さを指定するクラス

・ページを構成するヘッダーやフッター、メインのコンテンツエリア、サイドバー等のコンテンツブロックはここに記述。

====================================================\*/

header, footer, main, article, aside など

/\*====================================================

Object

・ページをまたいで使われる各種パーツを定義するクラス

・そのパーツ内で常に同様の振る舞いをするものに関してのみスタイルを定義

====================================================\*/

.alert, .badge, .breadcrumb, .btn, .card, .carousel, .collapse, .dropdown, .form, .jumbotron, .list-group, .modal, nav, navbar など

.btn-daily { //日替わりの新入荷・値下用ボタン

`    `display: inline-block;

`    `padding: 0.375rem 0.75rem; !default;

`    `border: 1px solid transparent !default;;

`    `border-radius: 0.25rem; !default;

`    `background-color: transparent !default;

`    `color: $primary !default;

`    `font-size: 1rem; !default;

`    `line-height: 1.5; !default;

`    `text-align: center;

`    `vertical-align: middle;

`    `transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

}

/\*====================================================

Utility

・調整用のクラス

・margin、padding、font-size、color などを付与するのに使用

・他種類のパーツ間の空き調整や、パーツとして認められないような、自由な振る舞いをする要素に対してこちらのクラスを使用

====================================================\*/

.btn-daily-sm { //日替わりのスモールボタン

`    `border-radius: 0.2rem;

`    `font-size: 0.875rem;

`    `line-height: 1.5;

}

.btn-daily-lg { //日替わりのラージボタン

`    `border-radius: 0.3rem;

`    `padding: 0.5rem 1rem;

`    `font-size: 1.25rem;

`    `line-height: 1.5;

}

.btn-daily-newarrival { //日替わりの新入荷ボタン

`    `border 2px solid #3173e3; //ブルー

`    `color: #2ac2da; //スカイブルー

}

.btn-daily-pricedown { //日替わりの値下げボタン

`    `border 2px solid $blue; //イエロー

`    `color: #ed802e; //オレンジ

}

## **終わりに**

_一貫性を保ってください。_

コードを編集する場合、数分かけて編集する周辺のコードを確認しましょう。皆が計算式の前後にスペースを入れているのであれば、あなたもそうするべきです。コメントの前後が＃で囲われているなら、あなたもそうしましょう。

一貫性を保つポイントは、皆がコーディングに集中できるように共通の語彙を持つことです。ここでは、人々が知っている語彙でグローバルなスタイルを提示していますが、ローカルのスタイルのほうが重要です。

あなたが追加したコードが、まわりと大きく違うコードだと、読む人のリズムが崩れるので、このようなことは避けましょう。
