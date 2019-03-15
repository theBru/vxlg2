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

{: .section-title }
## Flag components

*Flag proportions*: 1:2

Dark blue background with the Union Jack on the upper hoist (British Blue Ensign), a white Commonwealth Star in lower hoist, and the Southern Cross in the fly half.

{: .section-title }
## Key facts about {{ page.title }}

{: .facts }
**Official name:** Commonwealth of Australia

{: .facts }
**Capital:** Canberra

{: .facts }
**Official languages:** English

{: .facts }
**Total area:** 7,692,024 km<sup>2</sup>

{: .facts }
**Population:** 25,281,800

{: .facts }
**GDP (PPP):** $52,191

{: .facts }
**GDP (Nominal):** $59,655

{: .facts }
**HDI:** 0.939

{: .facts }
**ISO code:** AU

{: .facts }
**TLD:** .au

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
