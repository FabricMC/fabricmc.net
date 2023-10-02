---
layout: default
permalink: /blog/
---

<div class="home post-content">
  <header>
    <h1 class="page-heading">Blog</h1>
    <p>
      <a class="button primary" href="{{ "/feed.xml" | relative_url }}">Subscribe</a> via RSS
    </p>
  </header>
  <hr>
  <section>
    <h2>Posts</h2>
    <div class="row-2">
      {% for post in site.posts %}
        <article class="column">
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <span class="post-meta">{{ post.date | date: date_format }}</span>
          <a href="{{ post.url | relative_url }}">
            <h3>{{ post.title }}</h3>
          </a>
          <section>
            <p>{{ post.content | strip_html | truncate: 310 }}</p>
          </section>
          <a class="button secondary" href="{{ post.url }}">Continue reading</a>
        </article>
      {% endfor %}
    </div>
  </section>
</div>
