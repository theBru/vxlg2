---
layout: post
author: Gurur
title: Australia
type: Sovereign state
image: australia.png
---
{: .caption }
{{ page.type }}

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 1:2

Dark blue background with the Union Jack on the upper hoist (British Blue Ensign), a white Commonwealth Star in lower hoist, and the Southern Cross in the fly half.

{: .section-title }
## Children

<ul id="post-list">
    {% assign posts = site.posts | sort: 'title' %}
    {% for post in posts %}
    {% if post.parent == page.title %}
    <li>
        <h2><a href="{{ post.url }}">{{ post.title }}<span class="home-image"><img src="/assets/img/{{ post.image }}"></span></a></h2>
    </li>
    {% endif %}
    {% endfor %}
</ul>
