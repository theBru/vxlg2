---
layout: post
author: Gurur
title: Bosnia and Herzegovina
type: Sovereign state
image: bosnia-and-herzegovina.png
---
{: .caption }
{{ page.type }}

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 1:2

Blue field with a gold right-angled triangle at the centre, with nine white five-pointed-stars along the hypothenuse.

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