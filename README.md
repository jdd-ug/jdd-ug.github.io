# GitHub Pages of Japan Datadog User Group

- Managed by @IchiroKano
- Member @chaosoldier, @dl-sakuraba, @futahashi, @hsnmaaaaa, @mananyuki, @mopp, @oyaki14, @t-kaga, @taijihagino, @tatsuo48

## このリポジトリについて

Japan Datadog User Group（JDDUG）のランディングページと開催レポートを管理するリポジトリです。

> [!NOTE]
> `main` ブランチへpushすると、GitHub ActionsがJekyllでサイトをビルドし、GitHub Pagesへデプロイします。

主なファイルと役割は次のとおりです。

| パス | 役割 |
| --- | --- |
| `index.md` | トップページ、次回イベント、過去イベントカードの表示 |
| `_data/events.yml` | 過去イベントカードの情報 |
| `_posts/` | 開催レポートなどの記事 |
| `heros.md` | JDDUGに登壇いただいた皆様の一覧 |
| `assets/images/` | 記事やイベントカードで使用する画像 |
| `_data/navigation.yml` | グローバルナビゲーション |

## Local Development

下記コマンドでRuby Gemをインストールし、JekyllのローカルWebサーバーを起動して表示を確認します。

```bash
bundle
bundle exec jekyll s
open http://127.0.0.1:4000
```

## ①【開催前】イベントの情報を掲載する

### 1. connpassの情報を確認する

次の情報を準備します。

- イベント名と開催回
- 開催日と開催地域
- connpassのイベントURL
- connpassのサムネイル画像URL

### 2. トップページの「次回イベント」を更新する

`index.md` の `次回イベント` にある `.event-images` 内へ、connpassへのリンクとサムネイルを追加します。

```html
<a href="https://datadog-jp.connpass.com/event/イベントID/">
  <img
    src="https://media.connpass.com/thumbs/.../event-image.png"
    alt="JDDUG meetup #20"
  >
</a>
```

> [!IMPORTANT]
> 終了済みのイベントは「次回イベント」から外します。開催レポートを作る場合は、後述の手順で `_data/events.yml` へ移します。

## ②【開催後】開催レポートを追加する

### 1. 開催レポートを作成する

#### Meetupの記事名

> [!IMPORTANT]
> Meetupは次の命名規則を使用してください。この名前からイベントカードが開催レポートを自動検出します。

```text
_posts/YYYY-MM-DD-jddug{開催回}.md
```

例：Meetup #20を2026年8月10日に開催した場合

```text
_posts/2026-08-10-jddug20.md
```

#### Meetup以外の個別イベントの記事名

> [!NOTE]
> Meetup以外の記事は、内容が分かる任意のslugを使用できます。

```text
_posts/YYYY-MM-DD-{内容を表すslug}.md
```

例：

```text
_posts/2025-10-16-summit-tokyo.md
```

#### 記事のFront Matter

```yaml
---
layout: post
author: 著者のshort_name
title: "JDDUG meetup #20@札幌 レポート"
---
```

> [!NOTE]
> 公開URLは `_config.yml` の設定により日付から自動生成されます。

```text
_posts/2026-08-10-jddug20.md
  → https://jdd-ug.github.io/2026/08/10/
```

### 2. 画像を追加する

Meetupごとに画像用ディレクトリを作ります。

```text
assets/images/jddug{開催回}/
```

> [!TIP]
> 集合写真のファイル名に固定の規則はありません。次は配置例です。

```text
assets/images/jddug20/0900_meetup.jpg
```

記事内ではルート相対パスで参照します。

```markdown
![集合写真](/assets/images/jddug20/0900_meetup.jpg)
```

> [!WARNING]
> 画像は表示用途に適したサイズへ縮小・圧縮してください。元の写真をそのまま置くと、トップページやGitリポジトリが重くなります。

### 3. `_data/events.yml` にイベントを追加する

新しいイベントをファイルの先頭に追加します。

> [!NOTE]
> Meetupと個別イベントの記載例、各項目の説明は `_data/events.yml` の先頭コメントを参照してください。

> [!TIP]
> Meetupの記事名が `jddug{開催回}.md` の規則に従っていれば、Jekyllが記事を自動検出し、カード画像と「開催レポート」ボタンへリンクします。

### 4. 登壇者一覧を更新する

`heros.md` の先頭へ、既存と同じ表形式で発表とLTを追加します。

```markdown
## Meetup#20 @札幌

| # | Contents | Speaker |
| --- | --- | --- |
| 1 | 発表タイトル | 登壇者名 |
| --- | --- | --- |
| LT1 | LTタイトル | 登壇者名 |
```

> [!IMPORTANT]
> 登壇タイトルと登壇者名は、connpassと開催レポートの表記が一致しているか確認してください。

### 5. 「次回イベント」を整理する

> [!WARNING]
> 開催済みのイベントを `index.md` の「次回イベント」から削除します。次のイベントが公開済みであれば、新しいconnpass情報へ差し替えます。

## commit・push・デプロイ確認

意図したファイルだけが変更されていることを確認します。

```bash
git status
git diff
git add 対象ファイル
git commit -m "変更内容を表すメッセージ"
git push origin main
```

> [!IMPORTANT]
> push後はGitHub ActionsのJekyllビルドとPagesデプロイが成功したことを確認し、公開ページでも変更内容を確認してください。

## （固定ページ）更新方法

固定ページはリポジトリ直下のMarkdownファイルで管理します。

- `index.md`
- `about.md`
- `heros.md`

画像は `assets/images/` に置いてください。

## （グローバルナビゲーション）更新方法

`_data/navigation.yml` を更新します。

```yaml
- name: About
  link: /about/
```
