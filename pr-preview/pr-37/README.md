# GitHub Pages of Japan Datadog User Group

- Managed by @IchiroKano
- Member @chaspy

## Local Development

```
bundle
bundle exec jekyll s
open http://127.0.0.1:4000
```

## このリポジトリについて

GitHub Pages で JDDUGのランディングページ(LP)を公開しています。
下記にLPを更新する環境・手順を記します。

## GitHubページを更新する大まかな流れ

1. 最初に Pull して。
2. マークダウン形式のファイルを編集もしくは追加。
3. commit & push すれば、github actions で自動的にビルド＆デプロイされます（30秒くらいかかります）。

## （ブログページ）新しいブログを追加する方法
下記のファイル名で新規ファイルを作成してください。自動的にブログリストに掲載されます。

#### ファイル名の形式： YYYY-MM-DD-topics.md
 ［例］2024-07-07-jddug3.md

#### ブログ書式

「著者の名前」はこのリポジトリで固定化すること。タイトルは日本語でよい。

```
---
layout: post
author: 著者の名称
title: "ページに表示されるタイトル"
---

以下、マークダウン形式でブログ記事を記載する
```


## （固定ページ）更新方法
固定ページはルート(/)にmdファイルを保存します。
固定ページへのリンクはHTML内に記載したり、ナビゲーションメニューに表示したりします。

- /index.md
- /about.md
- /heros.md
- 画像は /assets/images に置いてください

## （グローバルナビゲーション）更新方法

［/data/navigation.yml］を更新します。

例：メニュー名とそのリンク先
```
- name: About
  link: /about/
```


## 気になったこと

- 「jddug」のリポジトリとれなかった
