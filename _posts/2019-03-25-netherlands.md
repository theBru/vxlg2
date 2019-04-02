---
layout: post
author: Gurur
title: Netherlands
type: Sovereign state
image: netherlands.png
---
{: .caption }
{{ page.type }}

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 2:3

Tricolour with horizontal bands of red, white, and blue.

{: .section-title }
## Children

<ul id="post-list">
    {% assign posts = site.posts | sort: 'title' %}
    {% for post in posts %}
    {% if post.parent == page.title %}
    <li>
        <h2><a href="{{ post.url }}">{{ post.title }}<br><span class="home-image"><img src="/assets/img/{{ post.image }}"></span></a></h2>
    </li>
    {% endif %}
    {% endfor %}
</ul>