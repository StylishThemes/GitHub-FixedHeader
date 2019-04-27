# Contributing to GitHub Fixed Header

1. [Getting Involved](#getting-involved)
2. [How To Report style issues](#how-to-report-style-issues)
3. [Style Guide](#style-guide)
4. [Getting Started](#getting-started)

## Getting Involved

There are a number of ways to get involved with the development of this GitHub Fixed Header theme. Even if you've never contributed to an Open Source project before, we're always looking for help identifying missing styles or other issues.

## How to Report Style issues

### I don't know CSS
If you don't know CSS very well and have found a missing style, please include as much as possible of following information when opening an issue:

* Screenshot of the problem; include the element(s) in the console if at all possible
  * To select an element, target it with your mouse then right-click and choose "Inspect Element"
  * Please include both the HTML view and the element with the problem in the screenshot (see [issue #119](https://github.com/StylishThemes/GitHub-Dark/issues/119) for an example from the GitHub-Dark repository)
* A URL to the page (if public).

### I rock at CSS & GitHub!
* Follow the style guide below
* Make any needed changes, then send us a pull request
* Please include a URL to the page (if public)

## Style Guide

* Use the provided `.editorconfig` file with your code editor. Don't know what that is? Then check out http://editorconfig.org/.
* Limit to the [K&R (KNF variation style)](https://en.wikipedia.org/wiki/Indentation_style#Variant:_BSD_KNF), and **2 SPACE INDENTATION** (no tabs, and not more, and not less than 2 spaces).

  * K&R - KNF Variation Example:
    ```css
    element[attr='value'] {
    ··property: value;
    }
    ```

  * **Not Allman**
    ```css
    element[property='value']
    {
    ··property: value;
    }
    ```

  * Strict space between the `selector` and the `{`:
    ```css
    /* good */
    element[attr='value'] { }

    /* bad */
    element[attr='value']{ }
    ```

  * 2 Space indentation
    ```css
    /* good */
    ··property: value;

    /* bad */
    ····property: value;
    ----property: value;
    ·property: value;
    ```

* Try to wrap lines at around 80 characters.
* This style does not have a size limit, but:
  * Don't add any image URI's to the CSS; instead add the image into the `/images` directory; then point to using the following URL: `http://StylishThemes.github.io/GitHub-FixedHeader/images/{my-image.png}`.
  * If possible, reduce any added selectors. Remember that the style likely has an `!important` flag to override default styling, so a selector starting from the body isn't always necessary.
  * Don't add any inline comments. If you want to make a comment, add it as a note in the commit.
  * If your CSS definition already exists within the style, do not add it again! Add your selector to the existing definition.
* Insert any new CSS selectors in any available slot before the style definition, or on a new line as needed.
* If you want to add a new userstyle variable, please open an issue and discuss it with us first.
* Don't include version bumps with your contribution, all releases are handled internally.
* If your PR fixes an open issue or replaces another PR, include fixes/closes #issue-nr in your commit message title. [Read more on this](https://help.github.com/en/articles/closing-issues-using-keywords).

## Getting Started

* [Download](https://github.com/StylishThemes/GitHub-FixedHeader/archive/master.zip), [fork](https://github.com/StylishThemes/GitHub-FixedHeader/fork) or clone this repository.
* Use [node.js](http://nodejs.org/) to run `npm install`.
* Make any changes to the `github-selected-tab-color.user.css` file and save.

### Build & test

* Create & change into a new branch of your local GitHub Fixed Header repository.
* Open the style in the Stylus editor, and make sure to have "live preview" checked for testing.
* Once you are satisfied with the changes, select all the CSS (<kbd>Ctrl</kbd> + <kbd>a</kbd>), copy (<kbd>Ctrl</kbd> + <kbd>c</kbd>) then paste (<kbd>Ctrl</kbd> + <kbd>v</kbd>) it into your editor.
* Run `npm test` to test the CSS changes.
* Now you can add and commit the changes of the `github-selected-tab-color.user.css` file to your fork's branch.
* If you haven't already contributed, then run `npm run authors` to add your name to our list of contributors :smile:
* Push the changes to your branch, then submit a pull request.
* And thanks again for contributing!

### Development Scripts

* `npm run authors`: Runs a batch file to rebuild the `AUTHORS` file. Update the `.mailmap` file for any duplicate entries.
* `npm run clean`: Runs the perfectionist script & cleans up after it.
* `npm run eslint`: Lint the JavaScript code in the `tools` directory.
* `npm run lint`: Run eslint & stylelint scripts.
* `npm run major`: Creates a semantic major release.
* `npm run minor`: Creates a semantic minor release.
* `npm run patch`: Creates a semantic patch release.
* `npm run perfectionist`: Runs perfectionist only. CSS is not cleaned!
* `npm run stylelint`: Run stylelint on the CSS file.
* `npm run test`: Same as `npm run lint`.
* `npm run update`: Update development dependencies.
