# eslint-plugin-deprecated-rules

Warns about deprecated or removed ESLint rules in ESLint config.

This small plugin was created for the purpose of finding whether our team of developers is using deprecated rules for the currently installed version of ESLint.
Meaning, if you are using an older version of ESLint and a rule got deprecated in newer versions, then you won't get any warnings.

Provided rules work both for ESLint core rules, as well as rules provided by 3rd-party plugins.

## Table of Contents

- [eslint-plugin-deprecated-rules](#eslint-plugin-deprecated-rules)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Option 1. Add plugin and its rules](#option-1-add-plugin-and-its-rules)
    - [Option 2. Extend `recommended` config](#option-2-extend-recommended-config)
  - [Rules](#rules)
  - [Built With](#built-with)
  - [Versioning](#versioning)
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

## Built With

- [eslint-find-rules](https://github.com/sarbbottam/eslint-find-rules) - used to parse ESLint configs and extract rules

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ipasechnikov/eslint-plugin-deprecated-rules/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
