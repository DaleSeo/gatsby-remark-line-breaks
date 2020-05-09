# gatsby-remark-line-breaks

Add support for hard line breaks to [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/), powered by [remark-breaks](https://github.com/remarkjs/remark-breaks).

## How to install

```bash
$ npm i gatsby-remark-line-breaks
```

## When do I use this plugin?

By default, you should have two or more spaces before new lines for line breaks in Markdown.
For those who are more familiar with GitHub Flavored Markdown might find it inconvenient.
This Remark transformer plugin will put hard line breaks without needing spaces while translating Markdown into HTML.

```md
foo
baz
```

```html
<p>foo<br>
baz</p>
```

You will find more information about hard line breaks on GitHub Flavored Markdown Spec [here](https://github.github.com/gfm/#hard-line-breaks).

## Examples of usage

```js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
          `gatsby-remark-line-breaks`
      ]
    }
  },
```

## How to run tests

```bash
$ npm test
```
