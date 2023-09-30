# Contributing to `funthreads`

Contributions are always welcome.
To contribute, [fork](https://help.github.com/articles/fork-a-repo/) funthreads, commit your changes, & [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Feature Requests

Feature requests should be submitted in the [issue tracker](https://github.com/nairihar/funthreads/issues), with a description of
the expected behavior & use case.

## Pull Requests

For additions or bug fixes, please modify the relevant files. Include updated unit tests in the `test` directory as part of your pull request. Unit test files should be named `[filename].test.js`.

Before running the unit tests you’ll need to install, `npm i`, [development dependencies](https://docs.npmjs.com/files/package.json#devdependencies). Run unit tests from the command-line via `npm test`.

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already established in the code.

- **Spacing**:<br>
  Use two spaces for indentation. No tabs.

- **Quotes**:<br>
  Single-quoted strings are preferred to double-quoted strings; however,
  please use a double-quoted string if the value contains a single-quote
  character to avoid unnecessary escaping.

Guidelines are enforced using [ESLint](https://www.npmjs.com/package/eslint):

```bash
$ npm run lint
```
