---
layout: post
author: Gurur
title: Espírito Santo
type: State
parent: Brazil
image: espirito-santo.png
---
{: .caption }
{{ page.type }} ([{{ page.parent }}](/2019/04/02/brazil.html))

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 7:10

Triband with horizontal bands of blue, white, and pink, with the words "Trabalha e confia" (Work and trust) written in blue on an arc on the white band. 

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