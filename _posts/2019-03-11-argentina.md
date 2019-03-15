---
layout: post
author: Gurur
title: Argentina
type: Sovereign state
image: argentina.png
---
{: .caption }
{{ page.type }}

![Flag of {{ page.title }}](/assets/img/{{ page.image }})

{: .section-title }
## Flag components

*Flag proportions*: 5:8

Horizontal triband with two light blue bands sandwiching a blue band, with the Inca god of sun on the white band.

Allegedly designed by General Manuel Belgrano, the blue is said to represent either the sky or the military garb of his soldiers. (<span class="source-link">[1](http://flagpedia.net/argentina)</span>)

{: .section-title }
## Key facts about {{ page.title }}

{: .facts }
**Official name:** Argentine Republic

{: .facts }
**Capital:** Buenos Aires

{: .facts }
**Official languages:** Spanish

{: .facts }
**Total area:** 2,780,400 km<sup>2</sup>

{: .facts }
**Population:** 43,947,430

{: .facts }
**GDP (PPP):** $20,481

{: .facts }
**GDP (Nominal):** $9,054

{: .facts }
**HDI:** 0.825

{: .facts }
**ISO code:** AR

{: .facts }
**TLD:** .ar

{: .section-title }
## Children

<ul id="post-list">
    {% assign posts = site.posts | sort: 'title' %}
    {% for post in posts %}
    {% if post.parent == page.title %}
    <li>
        <h2><a href="{{ post.url }}"><span class="home-image"><img src="/assets/img/{{ post.image }}"></span>{{ post.title }}</a></h2>
    </li>
    {% endif %}
    {% endfor %}
</ul>
