---
layout: post
author: Gurur
title: Argentina
type: Sovereign state
image: argentina.png
permalink: argentina
---
{: .caption }
{{ page.type }}

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 5:8

Horizontal triband with two light blue bands sandwiching a blue band, with the Inca god of sun on the white band.

Allegedly designed by General Manuel Belgrano, the blue is said to represent either the sky or the military garb of his soldiers. (<span class="source-link">[1](http://flagpedia.net/argentina)</span>)

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
