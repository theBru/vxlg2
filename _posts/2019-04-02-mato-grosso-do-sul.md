---
layout: post
author: Gurur
title: Mato Grosso do Sul
type: State
parent: Brazil
image: mato-grosso-do-sul.png
---
{: .caption }
{{ page.type }} ([{{ page.parent }}](/2019/04/02/brazil.html))

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

*Flag proportions*: 7:10

Green triangle at canton and a blue quadrangle separated by a white diagonal stripe, with a five-pointed star on the lower fly on the blue field.

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