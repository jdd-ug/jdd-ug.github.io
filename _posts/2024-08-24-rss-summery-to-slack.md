---
layout: post
author: chaspy
title: "RSS で取得した Datadog 関連記事を生成 AI で要約して Slack に流す仕組み"
---

Organizer の @chaspy です。この記事では JDDUG の Slack に Datadog 関連記事を要約して流す方法について紹介します。これをみて興味を持った人はぜひ [Slack にも参加](https://t.co/dpBETMaosn)いただけると嬉しいです！

免責事項: この仕組みは [Platform Engineering Meetup](https://platformengineering.connpass.com/) 主催の [@jacopen](https://twitter.com/jacopen) さんがやっている方法をほぼそのまま実装したものです。この場を借りて感謝申し上げます。参照: [X: Feedly AI を使って集めた記事を OpenAI API で要約させて Slack に投げるパイプラインを作った](https://x.com/jacopen/status/1786273957827748062)

# 完成したもの

## Datadog 公式 RSS の要約

![Datadog 公式 RSS の要約](/assets/images/rss-datadog.png)

## Medium や Zenn などの Blog 記事の要約

![Medium や Zenn などの Blog 記事の要約](/assets/images/rss-blog.png)

# 仕組み

Workflow を make.com で作成し、Feedly / OpenAI / Slack とそれぞれ Integration しています。

![make.com で作成した workflow](/assets/images/rss-make.png)

Feedly の方で事前にフォルダ単位で RSS を登録しておきます。

![Feedly](/assets/images/rss-feedly.png)

Watch Articles というモジュールを利用しています。

OpenAI Integration では記事を要約させます。

![alt text](/assets/images/rss-openai.png)

messagee content は以下のようにしてプロンプトを組み立てています。こちらも @jacopen さんから教えていただいたものほぼそのままです。(若干親しみやすい一言を絵文字付きで入れるところをアレンジしたぐらい)

---

以下の内容を要約して、日本語で出力してください。

最初に以下を発言してください。

🔍🔍🔍 新しい記事が見つかったよ 💡💡💡
`2.title`
`2.alternate[].href'`

次に箇条書きでポイントを整理し、その後内容を要約する文章を出力してください。

箇条書きポイントを書く際のヘッダは
★ この記事のポイント

内容の要約は
★ 要約

としてください。

==で囲まれた内容でコンテンツを与えますので、それを要約してください。
もしコンテンツがなければ、次の URL にアクセスして内容を要約してください。

{{2.alternate}}{{2.alternate[].href}}

最後に、この記事を読んでみたくなるような感想を絵文字付きで、親しみやすい口調で 1 行で添えてください。

==
`2.summary`
`2.content`
==

---

最後の Slack のところは特段説明不要でできると思います。

make.com の無料枠に収まるように、1 日 1 回の実行をしています。特に英語記事を要約してくれるのは助かりますね。

流れた記事について Slack Thread でコミュニティメンバーでワイワイできるともっと楽しいだろうなと思っております。

以上、RSS で取得した記事を Slack に要約して流す仕組みでした。いろんなコミュニティで有用だと思うのでぜひ試してみてください。

なお JDDUG LP の Post も同様に流れるようにしているので、この記事も流れるはずです w

それでは良い Datadog Life を！
