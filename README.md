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
        "deprecated-rules/no-deprecated-rules": "warn"
    }
}
```

Or extend `recommended` config.

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:deprecated-rules/recommended"
    ]
}
```

## Rules

<!-- begin auto-generated rules list -->

⚠️ Configurations set to warn in.\
✅ Set in the `recommended` configuration.

| Name                                                     | Description                       | ⚠️ |
| :------------------------------------------------------- | :-------------------------------- | :- |
| [no-deprecated-rules](docs/rules/no-deprecated-rules.md) | Warns for ESLint deprecated rules | ✅  |

<!-- end auto-generated rules list -->


