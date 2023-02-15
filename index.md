# **【notec】HTML・CSS コーディングガイドライン**

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

折り返す場合は、折り返した属性と子要素を区別するために、元の行を基準に最低 1 つタブを追加してインデントしてください。

```
<md-progress-circular
    md-mode="indeterminate"
    class="md-accent"
    ng-show="ctrl.loading"
    md-diameter="35">
</md-progress-circular>
```

```
<md-progress-circular md-mode="indeterminate"
    class="md-accent"
    ng-show="ctrl.loading"
    md-diameter="35">
</md-progress-circular>
```

```
<md-progress-circular md-mode="indeterminate" class="md-accent" ng-show="ctrl.loading" md-diameter="35"></md-progress-circular>
```

#### **3.2.3 HTML の引用符(クオーテーション)**

属性値の引用符はシングルクオーテーション('')ではなくダブルクオーテーション（""）を使用する。

```
<!-- 非推奨 -->
<a class='maia-button maia-button-secondary'>サインイン</a>
```

```
<!-- 推奨 -->
<a class="maia-button maia-button-secondary">サインイン</a>
```

## **4 CSS**

### **4.1 CSS ルール**

#### **4.1.1 CSS バリデーション**

<s>W3C が定義する HTML5/HTML5.1 に準拠した CSS を使用してください。</s>
CSS バリデータのバグや独自の構文が必要な場合を除き、WHATWG が定義する [HTML Living Standard](https://momdo.github.io/html/) に準拠した CSS を使用してください。

[Nu Html Checker(HTML/CSS バリデーター)](https://validator.w3.org/nu/)のツールでテストしてください。

これらにより廃止されたプロパティや変更されたプロパティを見つることができるので CSS コードの一定の品質を保持することができます。

#### **4.1.2 クラスの命名規則**

理解しやすく、一般的なクラス名を使用する。

要素の外観を示す命名や暗号のような意味が伝わらない命名をせず、その要素の目的を反映した命名、あるいは一般的な命名を行ってください。

要素の目的を反映した命名は理解しやすく、コードの修正にも強いです。

一般的な命名は、目的がなく兄弟要素場合の補助的な命名手段です。

機能名や一般名を使用することで、不要な記述やコードの修正を減らすことができます。

```
/* 非推奨: 意味がわからない命名 */
.yee-1901 {}

/* 非推奨: 要素の外観を示すような命名 */
.button-green {}
.clear {}
```

```
/* 推奨: 具体的な命名 */
.gallery {}
.login {}
.video {}

/* 推奨: 一般的な命名 */
.aux {}
.alt {}
```

#### **4.1.3 ID とクラス名のスタイル**

クラスの名前は、できるだけ短く、必要な長さのものを使用する。

クラス名はできるだけ短く、そのクラスが何なのかがわかるようにします。

このようなクラス名を使用することで、コードは理解しやすくなり、無駄が減ります。

```
/* 非推奨 */
.navigation {}
.atr {}
```

```
/* 非推奨 */
.nav {}
.author {}
```

#### **4.1.4 クラス名の区切り文字.**

クラス名の単語はハイフンで区切ります。

コードを読んでいる人がすぐにその意味を理解できるように、必要な情報をすぐに見つけることができるように、セレクタ内の単語と略語をハイフン以外の文字（または文字なし）で結合しないでください。

```
/* 非推奨: "demo"と"image"を2単語を分離しない */
.demoimage {}
```

```
/* 非推奨: ハイフンのかわりにアンダースコアを使う */
.error_status {}
```

```
/* 推奨 */
.video-id {}
.ads-sample {}
```

<small>※BEM 記法が使用できる場合は BEM 記法を使用してください</small>

#### **4.1.5 前置詞**

セレクタにアプリケーション固有のプレフィックスを付ける（オプション）。

大規模なプロジェクトや外部サイトにコードが埋め込まれる場合は、クラス名にプレフィックス(名前空間)を使用します。

プレフィックスを使用すると、同じクラス名による衝突を防ぐことができ、検索や置換などのメンテナンスが容易になります。

```
.adw-help {}    /* AdWords */
.maia-note {}   /* Maia */
```

#### **4.1.6 タイプセレクター(小孫セレクター)**

ID とクラス名にタイプセレクター(小孫セレクター)を使用するのを避ける。

パフォーマンスの理由からも、不必要な(小孫セレクター)を使用しないようにします。

```
/* 非推奨 */
ul.example {}
div.error {}
```

```
/* 推奨 */
.example {}
.error {}
```

#### **4.1.7 ID セレクター**

ID セレクターの使用を避ける。

同じ名前の ID 属性はページの中に存在しないという仕様ですが、一般的にページは多くのコンポーネントを持ち、複数のエンジニアによって共同で作業するためその仕様を守るのは難しいでしょう。

どのような場合でも、クラスセレクターを使用することをお勧めします。

```
/* 非推奨 */
#example {}
```

```
/* 推奨 */
.example {}
```

#### **4.1.8 ショートハンド(速記)プロパティ**

可能な限りショートハンド(省略記法)を使用する。

CSS には様々な省略記法のプロパティがあります（font など）。

ショートハンドを利用することで、コードの効率性と理解しやすさが向上します。

```
/* 非推奨 */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0;
```

```
/* 推奨 */
border-top: 0;
font: 100% / 1.6 palatino, georgia, serif;
padding: 0 1rem 2rem;
```

#### **4.1.9 0(ゼロ)と単位**

必要な場合を除き、「0」値の後の単位を省略する。

```
flex: 0px; /* flex-basisには単位が必要です。 */
flex: 1 1 0px; /* 単位がなくても明解ですが、 IEには単位が必要です。 */
margin: 0;
padding: 0;
```

単位はレスポンシブな要素はできるだけ rem を使用する。また rem との混同を避けるために em は使用しない。

優先順位は rem > ％ > px

#### **4.1.10 1 未満の少数の場合、1 の位の 0 は省略しない**

小数が-1 から 1 の場合は 1 の位の 0 は省略しない。

```
font-size: 0.8rem;
```

#### **4.1.11 色指定は HEX(16 進数)を使用する**

HEX は可能であれば 3 桁にする。

可能な限り 3 桁の HEX にすれば、短く簡潔に表すことができます。

```
/* 非推奨 */
.example {
  font-weight: bold !important;
}
```

```
/* 推奨 */
.example {
  font-weight: bold;
}
```

#### **4.1.12 !important 宣言**

important 宣言は使わないでください。

これらの宣言は、CSS の優先順位で適用する仕組みを阻害してしまいます。代わりにセレクタの詳細度を上げてプロパティを上書きするようにしてください。

```
/* 非推奨 */
.example {
  font-weight: bold !important;
}
```

```
/* 推奨 */
.example {
  font-weight: bold;
}
```

#### **4.1.11 CSS ハック**

ユーザーエージェントや CSS ハックによるスタイルは避けてください。

ユーザーエージェントの検出したり、特殊な CSS フィルターやハックによってブラウザ別にスタイルすることは魅力的に感じるかもしれません。
しかし効率よく管理されたソースコードを実現にすることが最も重要と考え、最終手段としてください。
ブラウザ別にスタイルするために CSS ハックなどを行うと、コードが複雑になり保守が難しくなってしまいます。

### **4.2 CSS フォーマットルール**

#### **4.2.1 プロパティの記述順序**

プロパティはアルファベット順で記述する(任意)。

プロジェクトにより一貫したルールに沿って順番にプロパティを記述します。

並び替えのルールに沿って自動で並び変える機能やツールが使えない場合、プロパティをアルファベット順に並べる、習慣、記憶しやすい、手作業による保守が容易な順番などというルールを決めて運用することで一貫したコードを実現できます。

並び替えの際はベンダープレフィックスは無視します。

ただし、ある CSS プロパティに対し複数のベンダープレフィックスを記述する場合は、その並び順はプロジェクト単位で統一する必要があります（例：-moz の次に-webkit を記述する）。

```
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

<small>※Google はアルファベット順になっていますが、視覚整形モデルを適用するのが一般的です。</small>

##### **視覚整形モデル**

- display
- flex

  - flex-grow
  - flex-shrink
  - flex-basis

- flex-flow

  - flex-direction
  - flex-wrap

- justify-content
- align-content
- align-items
- align-self
- order
- visibility
- opacity
- clip ※Deprecated
- clip-path
- list-style

  - list-style-type
  - list-style-position
  - list-style-image

- position
- top
- right
- bottom
- left
- z-index
- float
- clear
- transform

##### **ボックスモデル**

- width
- min-width
- max-width
- height
- min-height
- max-height
- margin

  - margin-top
  - margin-right
  - margin-bottom
  - margin-left

- padding

  - padding-top
  - padding-right
  - padding-bottom
  - padding-left

- overflow

  - overflow-x
  - overflow-y

- border

  - border-width

    - border-top-width
    - border-right-width
    - border-bottom-width
    - border-left-width

  - border-style

    - border-top-style
    - border-right-style
    - border-bottom-style
    - border-left-style

  - border-color

    - border-top-color
    - border-right-color
    - border-bottom-color
    - border-left-color

  - border-image

    - border-image-source
    - border-image-slice
    - border-image-width
    - border-image-outset
    - border-image-repeat

  - border-radius

    - border-top-left-radius
    - border-top-right-radius
    - border-bottom-right-radius
    - border-bottom-left-radius

- box-sizing
- box-shadow

##### **背景**

- background

  - background-image
  - background-position
  - background-size
  - background-repeat
  - background-origin
  - background-clip
  - background-attachment
  - background-color

##### **色**

- color

##### **フォント・テキスト**

- font

  - font-style
  - font-variant
  - font-weight
  - font-stretch
  - font-size
  - line-height
  - font-family

- letter-spacing
- text-decoration

  - text-decoration-color
  - text-decoration-style
  - text-decoration-line

- text-align
- text-indent
- text-transform
- white-space
- word-break
- word-spaciing
- word-wrap
- text-shadow

##### **表**

- table-layout
- border-collapse
- border-spacing
- empty-cells
- caption-side
- vertical-align

##### **UI**

- content
- quotes
- counter-increment
- counter-reset
- outline

  - outline-color
  - outline-style
  - outline-width

- cursor
- resize

##### **アニメーション**

- transition

  - transition-property
  - transition-duration
  - transition-timing-function
  - transition-delay

- animation

  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-delay
  - animation-iteration-count
  - animation-direction
  - animation-fill-mode
  - animation-play-state

##### **その他**

- unicode-bidi
- direction
- page-break-before
- page-break-after
- page-break-inside
- widows
- orphans

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
