---
layout: post
author: Gurur
title: Rio Grande do Sul
type: State
parent: Brazil
image: rio-grande-do-sul.png
---
{: .caption }
{{ page.type }} ([{{ page.parent }}](/2019/04/02/brazil.html))

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 7:10

Triband with green and yellow triangles and a red quadrilateral ascending from lower hoist to upper fly, with the state's coat-of-arms at the centre.

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