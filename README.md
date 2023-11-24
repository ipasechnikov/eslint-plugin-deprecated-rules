# eslint-plugin-deprecated-rules

Warns about deprecated or removed ESLint rules in ESLint config

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-deprecated-rules`:

```sh
npm install eslint-plugin-deprecated-rules --save-dev
```

## Usage

Add `deprecated-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "deprecated-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "deprecated-rules/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


