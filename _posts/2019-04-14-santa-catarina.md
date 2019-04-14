---
layout: post
author: Gurur
title: Santa Catarina
type: State
parent: Brazil
image: santa-catarina.png
---
{: .caption }
{{ page.type }} ([{{ page.parent }}](/2019/04/02/brazil.html))

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 8:11

Red field with a white bend and a green diamond charged with the state's coat-of-arms.

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