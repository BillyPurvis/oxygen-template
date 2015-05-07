# Oxygen Template

A nicely designed website template you can use for your own website

Oxygen is the base of your website. Including a navigation bar and two example body elements (one for text and one for a picture) you can easily customize it to your own preferences. Everything is licensed under the MIT license, so you can use it freely as long as you mention I made it.

A preview of the theme: http://jvnknvlgl.github.io/oxygen-template

# Edit Guide

#### Elements

- Text element. Edit the mentioned pieces of text, and put this inside <section> in the html file.

```html
<article>
  <div class="title">
    <p class="title">This is where the title goes.</p>
  </div>
  <div class="text">
    <p class="text">
      This is where the text goes.
    </p>
  </div>
</article>
```
- Picture element. Add a png and webp image to the correct paths, and put this inside <section> in the html file.

```html
<picture>
  <source type="image/webp" srcset="image/webp/image.webp">
  <img src="image/png/image.png">
</picture>
```
#### Multiple columns

To add a second column to your page, add the previously mentioned elements to the mentioned places, and put it inside <section in the html file.

```html
<div class="left">
  <div class="paddingright">

  Add the left element here.

  </div>
</div>
<div class="right">
  <div class="paddingleft">

  Add the right element here.

  </div>
</div>
```
# Sources and file discriptions

Included html files:
- index.html: demo page with a picture and some text
- sub-x.html: demo pages with a secondary navigation bar
- page-2.html: demo page with two columns

Other included files:
- style.css: styling of the website
- image folder: collection of all images used on the website
- README.md: this file
- LICENSE.md: description of the license

Sources:
- font: Roboto and Roboto Slab by Christian Robertson
- example images: pictures I've shot myself
- color scheme: http://www.dadapixel.com/blog/2015/5/6/the-may-palette-punch
- webp conversion: http://image.online-convert.com/convert-to-webp

Created with love by Jasper Vinkenvleugel (jvnknvlgl)
