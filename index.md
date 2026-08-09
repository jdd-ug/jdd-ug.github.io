---
title: JDD-UG (Japan Datadog User Group)
layout: default
---

# JDDUG; Japan Datadog User Group

JDDUG とは、日本でDatadogを活用しているユーザーが運営する、Datadogユーザーのためのコミュニティです。

[東京](/2020/01/01/){: .btn .btn-purple }　
[札幌](/2020/01/02/){: .btn .btn-purple }　
[福岡](/2020/01/03/){: .btn .btn-purple }　
[沖縄](/2020/01/04/){: .btn .btn-purple }　
[グローバル](https://www.datadoghq.com/user-groups/){: .btn .btn-purple }

![集合写真](/assets/images/meetup6-all.jpg)
_JDDUG6 の時に撮影した集合写真_

- イベントページ connpass: [https://datadog-jp.connpass.com/](https://datadog-jp.connpass.com/)
- グローバル Datadog User Group: [https://www.datadoghq.com/user-groups/](https://www.datadoghq.com/user-groups/)

## 次回イベント
次回イベントは connpass で告知します。

<!-- ここから２カラム表示のためのCSS。イベント１件だけなら削除すること -->
<style>
  .event-images {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .event-images a {
    flex: 1 1 calc(50% - 20px); /* PC: 2カラム */
  }

  .event-images img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  /* スマホ（600px以下）は1カラムにする */
  @media (max-width: 600px) {
    .event-images a {
      flex: 1 1 100%;
    }
  }
</style>

<div class="event-images">
  <a href="https://datadog-jp.connpass.com/event/389998/">
    <img src="https://media.connpass.com/thumbs/8d/72/8d72e7e3bb40bc34613eadc083833aa1.png" alt="JDDUG meetup #20">
  </a>

  <a href="https://datadog-jp.connpass.com/event/401209/">
    <img src="https://media.connpass.com/thumbs/05/f8/05f8d258e567cf3509d0dc3aa289e174.png" alt="JDDUG meetup #21">
  </a>

  <a href="https://datadog-jp.connpass.com/event/403092/">
    <img src="https://media.connpass.com/thumbs/2b/b1/2bb1f3db7f096022a48e89103dc1111b.png" alt="JDDUG #22 オンライン Datadog 勉強会 / 初級">
  </a>
</div>
<!-- ここまで（２カラム表示） -->


## 過去のイベント

<style>
  .event-history-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin: 24px 0 36px;
  }

  .event-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #e2e2e8;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 4px 14px rgba(47, 31, 74, 0.08);
  }

  .event-card__image,
  .event-card__placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .event-card__media-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .event-card__image {
    display: block;
    object-fit: cover;
  }

  .event-card__placeholder {
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #7c54b6, #542c85);
  }

  .event-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 16px;
  }

  .event-card__title {
    margin: 0 0 4px;
    font-size: 1.1rem;
  }

  .event-card__meta {
    margin: 0 0 16px;
    color: #666;
    font-size: 0.9rem;
  }

  .event-card__links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
  }

  .event-card__link {
    display: inline-block;
    padding: 7px 12px;
    border: 1px solid #7c54b6;
    border-radius: 999px;
    color: #542c85;
    font-size: 0.86rem;
    font-weight: 600;
    text-decoration: none;
  }

  .event-card__link:hover {
    color: #fff;
    background: #7c54b6;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    .event-history-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .event-history-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="event-history-grid">
  {% for event in site.data.events %}
  <article class="event-card">
    {% if event.title %}
      {% assign event_title = event.title %}
    {% else %}
      {% capture event_title %}Meetup #{{ event.number }} @{{ event.location }}{% endcapture %}
    {% endif %}
    {% if event.report_slug %}
      {% assign report_slug = event.report_slug %}
    {% else %}
      {% capture report_slug %}jddug{{ event.number }}{% endcapture %}
    {% endif %}
    {% assign event_report = site.posts | where: "slug", report_slug | first %}
    {% if event_report %}
    <a class="event-card__media-link" href="{{ event_report.url }}" aria-label="{{ event_title | strip }}の開催レポートを読む">
    {% endif %}
    {% if event.image_url %}
    <img class="event-card__image" src="{{ event.image_url }}" alt="{{ event_title | strip }}" loading="lazy">
    {% else %}
    <div class="event-card__placeholder">{{ event_title | strip }}</div>
    {% endif %}
    {% if event_report %}
    </a>
    {% endif %}
    <div class="event-card__body">
      <h3 class="event-card__title">{{ event_title | strip }}</h3>
      <p class="event-card__meta">{{ event.date | date: "%Y年%m月%d日" }}</p>
      <div class="event-card__links">
        {% if event.connpass_url %}
        <a class="event-card__link" href="{{ event.connpass_url }}">connpass</a>
        {% endif %}
        {% if event_report %}
        <a class="event-card__link" href="{{ event_report.url }}">開催レポート</a>
        {% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>

---

## 問い合わせ

- [Slack](https://t.co/dpBETMaosn)
- [Form](https://forms.gle/SoJrRUvX4FcysogP9)
- [connpass](https://datadog-jp.connpass.com/)





