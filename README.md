# Tailwind Ghost Theme

![screenshot](https://github.com/ChristineTham/tailwind-ghost-theme/raw/master/assets/screenshot-desktop.jpg)

A Ghost Theme based on [TryGhost/Starter](https://github.com/TryGhost/Starter.git) but using [Tailwind CSS](https://tailwindcss.com/) instead of the default CSS styles.

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles. It is relatively easy to customise this theme just by changing the utility classes.

This theme preserves the CSS framework and styles used to render posts and pages (based on the default [Casper](https://github.com/TryGhost/Casper.git) theme 
bundled with Ghost), so blog pages will be rendered exactly as in Casper for maximum compatibility.

The theme uses the TailwindUI component framework as well as the typography plugin.

&nbsp;

# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented our default theme pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

One neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive

&nbsp;

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
yarn zip
```

&nbsp;

# PostCSS Features Used

- TailwindCSS
- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- [Color Mod](https://github.com/jonathantneal/postcss-color-mod-function)

&nbsp;

# Copyright & License

Copyright (c) 2020 Hello Tham Pty Ltd - Released under the [MIT license](LICENSE).
