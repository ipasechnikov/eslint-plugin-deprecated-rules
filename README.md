# eslint-plugin-deprecated-rules

Warns about deprecated or removed ESLint rules in ESLint config.

## Table of Contents

- [eslint-plugin-deprecated-rules](#eslint-plugin-deprecated-rules)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Option 1. Add plugin and its rules](#option-1-add-plugin-and-its-rules)
    - [Option 2. Extend `recommended` config](#option-2-extend-recommended-config)
  - [Rules](#rules)
  - [License](#license)

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

There are 2 main ways to use this package:

- Add plugin and its rules manually
- Extend `recommended` config provided by the plugin

### Option 1. Add plugin and its rules

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

### Option 2. Extend `recommended` config

```json
{
    "extends": [
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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
