##Introduction to CSS Exercises

- [Exercise 1](http://codepen.io/leyth/pen/pbLwqr?editors=1100)
- - - 

- Multiple style sheet loading: 
>The style sheet on line 64 which has the ruleset: `p {color: cyan;}` will be applied because it is the last ruleset coming from the external file. This happens because the Style sheets are combined in the order which they appear in the `HTML` document.
- - -

- [Combinators Exercise](http://codepen.io/leyth/pen/AXyovL)

- - - 
- 1. Write a CSS class that will `italicize`, `uppercase`, and `strike-through` its text.

```CSS
    .text {
        /* italicize */ 
        font-style: italic;
        /* uppercase */ 
        text-transform: uppercase;
         /* strike-through */
        text-decoration: line-through;
    }
```

- 2. Navigate to Google’s Library of web fonts: www.google.com/fonts; then, choose a font you find pleasing. Write the CSS class named `myfont` that changes the font family to your chosen font, falling back to the fonts Lora and Times New Roman, and finally falling back one more time to a generic font family of your choosing.


```CSS
    .myfont {
        /* CSS ruleset to specify font family */ 
        font-family: 'Roboto', Lora, Times New Roman, sans-serif;
    }
```
- 3. Spend time experimenting with the CSS line-height property and create three classes, each corresponding to significantly different line-heights. Which line-height do you find easiest to read?
```CSS
    .text {
        /* best line-height for my eyes */
        line-height: 1.618em;
    }
```

Althought `line-height` depeneds on the type of font one is working with, I personally think that a a `line-height` of `1.618em` is easy on my eyes whenever I am reading large amounts of texts on a website.
- - -
- 1. Calculate the result in pixels: What is 80% of 16px?
```matlab
    80% * 16px => 12.8px
```
- 2. Calculate the result in `em`: What is `2em` of `1.6em`

```matlab
    2em * 1.68em => 51.2px
```
- 3. Determine the child‘s font size in the below sample:
```css
html {
    font-size: 10px;
}

parent {
    font-size: 2em;
}

.parent .child {
    font-size: 1.6rem;
}
```
>The font size of the child element is ` ` ` 25.6px ` ` `

- - - 


- 1. Create a web page that resembles a newspaper, with a heading area, three columns, and a footing area. Each column needs an `<h3>` tags and at least 5 `<p>` tags. You will need to utilize floats, percentage widths, and clears to succeed.

- - -

[NewsPaper Site: Seattle Times](http://codepen.io/leyth/pen/AXyodo)

- - - 

###Beneficial Notes
- - -
- Colors
>Most browsers support a standard set of `140` English-language color names for commonly used colors. This set includes well-known colors like “red,” “blue,” “green,” “white,” and “black,” but also includes lesser-known colors like “cornflower blue” and “moccasin.”

- Screen Real Estate
>Depending on the size of your screen, the percentage of Screen Real Estate consumed by this element will vary, as listed in the example below. (Screen Real Estate describes how much total display space is available on your device):