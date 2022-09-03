# HTML and CSS tutorial

From [this tutorial](https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&index=1&ab_channel=TheNetNinja)

## What us HTML

Hyper text markup language

- used to structure content on a web page (images, text, forms etc)
- we structure content using HTML tags

## What is CSS

Cascading Style Sheets

- works alongside HTML
- used to style web pages to make them look better
  - change colours, position, effects, font sizes etc
- style sheet - a list of CSS rules/rule sets

```css
/* style sheet */
div {
  /* selector */
  color: red; /* declarations */
  margin: 20px;
}

li {
  font-weight: bold;
}
```

## Course 1

- index.html is the default name of home page

## [Course 2](basic-tags.html)

- learnt some of the most common HTML tags in web pages
  - p, ul, li, div, a, img, etc
- takled about attributes (src, href, cite, alt etc)
- how to create comments in an HTML file

## [Course 3](forms.html)

- How to create a web form and what the 'action' attribute if for
- Seen a lot of the most common inputs types
  - text, email, password, radio, select, textarea
- How to use labels, the id attribute & the name attribute
- How forms are submitted and validated

## Course 4

- Inline Elements
  - Don't take up any more room than their content needs
  - span, img, strong, em, a and more
- Block-level Elements
  - Take up the whole width of a page regardless of content
  - p, div, h2, h2, h3, ul, li and more
- What CSS is and how to add it to a webpage
- Basic selectors and some different declarations/properties
- Hex codes and the VS Code color picker
- Inline and block-level elements( and inline-block)
- Margin & Padding
- Default browser sytles

## Course 5

- class: use `.classname`
- tag with class: `tag.class`
- id: use `#id`. Not very common use id for css, because all the IDs need to be unique
- descenden selector:`parent child`
- attribute selector:`tag[attribute]` / `tag[attribute="value"]`

  - "\*=" : include the given patten
  - "$=" : ends with the given patten

### [The Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)

- HTML elements can inherit CSS properties that are applied to their parents

```html
<div class="error">
  <p>I am an error</p>
</div>
```

```css
div {
  color: red;
}
/* the p tag in div is also red */
```

- not all the style are inherited, like border, margin. To inherit, need at the children specific say inherit.

## Course 6

**HTML Semantic Tags**

- \<main\>: For the main content of a webpage, unique to that page
- \<section\>: Defines a certain section of a webpage (e.g. blog list, contact info)
- \<article\>: Defines a bit of content which makes up an article (e.g. a blog post)
- \<aside\>: Defines some content related to something else (e.g. similar blogs)
- \<header\>: For the header of a website - contains the nav, title etc
- \<footer\>: For the footer of a website

## Course 7

**Chrome dev tool**

## Course 8

**[Position & Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/position)**

Position

- static: default
- relative: shift the element to somewhere relattive to its original position
- fixed: fixed the element on the view point (window)
- absolute: put element absolutly relative to its closest parent
- sticky: a mixture of static and fixed

Layout

- z-index: default is 0, higher than fronter

---

## Tricks

- hold `option` button and click where you want to add same content, to change multiple places at the same time
- When using CSS font, need to make sure the font is web safe, see this [page](https://www.w3schools.com/cssref/css_websafe_fonts.asp) for more detial
