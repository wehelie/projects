Introduction to HTML Fundamentals
=================================

### 1. Describe what it means for HTML tags to have 'semantic value' and the effect this should have on how HTML documents are constructed.

`HTML` tags that have semantic values mean that these tags actually describe the
content of the page. For example:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ html
    <b> Page Title </b>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `<b>` tag here is not a semantic value because the computer does not
understand this to be the title of the document, thus having no value in its
semantic. For this reason, the computer understands the following:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ html
    <h1> Page Title </h1>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The example above is a desriptive semantic code which both computers and readers
alike are able to decipher.

In other words, all `HTML` tags have semantic value which allow the browser to
translate into a document appearance and strucuture.

### 2. HTML elements have a hierarchical structure relationship; there are parents, siblings, children, children of children, etc. Explain each of these terms and the meaning of these relationships.

It is important to view `HTML` code just as the browser does; the browser sees a
hierarchical structured elements that inherit from each other. The browser first
sees the whole `HTML` document as a `NODE` or a "a point at which lines or
pathways intersect or branch; a central or connecting point." Not only this, but
every element inside the document is also a `NODE`, the contents inside the
element is a `NODE` as well. Furthermore, these nodes have a hierarchical
relationship which is described as: parent, child and siblings.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ html
    <html>
        <head>
            <title>page title</title>
        </head>
        <body>
            <h1>Hello World!</h1>
            <p>Welcome to Modern Developer</p>
        </body>
    </html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Based on the `HTML` hierarchical relationship, we can definitely say that
`<html>` is the root node which has no parent. Next, `<html>` is the parent of
the `<head>` and `<body>` which also means that `<head>` is the first child.
This also means that `<head>` and `<body>` are sibling.

### 3. Describe the function of the `meta` tag, and give at least two examples of its usage.

The `meta` tags are nested inside the `<head>` tag and are not displayed on the
page, however, they are only readable by the browser. This tag is used to give:

-   page description

-   keywords

-   author of documents

-   modification date

Here is an example of a meta tag being used to describe content of a page.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ html
    <meta name="description" content="learning with modern developer">
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here is an example of a meta tag show the author of the document.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ html
    <meta name="author" content="layth adan">
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### 4. The `input` element has an attribute called "type." Discuss the purpose and function of this attribute, and list some of the values 'type' can be.

The `input` element has several attributes, however, one of the most important
is the `type` attribute which gives the type of control to display. If `type` is
not defined, the default value of "text" will be set automatically. In addtion
to this, it can also a value of:

>   button, checkbox, color, date, datetime, datetime-local, email, file,
>   hidden, image, month, passowrd, radio, number, range, reset, search, submit,
>   tel, url, and week.

### 5. Explain the function of the `textarea` element and describe in detail the attributes it accepts and their effects of their different values.

The `textarea` element shows a multi-line plain-text input control. This area
can hold large amount of texts which is renedered in a fixed-widths font. In
addition, the `textarea` can be resized using specific `cols` and `rows`
attributes.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ html
    <textarea rows="5" cols="30">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </textarea>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### 6. Explain in detail the function of the `select` tag and how it is added to web pages.

The main purpose of a `select` element is to create a drop-down list which is
used to collect user inputs. The drop-down list is represented with an
`<option>` element. This element comes with several attributes, here is how they
are list in MDN.

**autofocus**: This attribute lets you specify that a form control should have
input focus when the page loads, unless the user overrides it, for example by
typing in a different control. Only one form element in a document can have the
autofocus attribute, which is a Boolean.

**disabled**: This Boolean attribute indicates that the user cannot interact
with the control. If this attribute is not specified, the control inherits its
setting from the containing element, for example fieldset; if there is no
containing element with the disabled attribute set, then the control is enabled.

**form**: The form element that the select element is associated with (its "form
owner"). If this attribute is specified, its value must be the ID of a form
element in the same document. This enables you to place select elements anywhere
within a document, not just as descendants of their form elements.

**multiple**: This Boolean attribute indicates that multiple options can be
selected in the list. If it is not specified, then only one option can be
selected at a time.

**name**: The name of the control

**required**: A Boolean attribute indicating that an option with a non-empty
string value must be selected.

**size**: If the control is presented as a scrolled list box, this attribute
represents the number of rows in the list that should be visible at one time.
Browsers are not required to present a select element as a scrolled list box.
The default value is 0.
