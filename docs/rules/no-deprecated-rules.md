# Warns for ESLint deprecated rules (`deprecated-rules/no-deprecated-rules`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

💼 This rule is enabled in the ✅ `recommended` config.

Warns about deprecated ESLint rules use within your project explicitly (defined in ESLint config) or implicitly (e.g. extending and importing plugin configs).

## Rule Details

This rule aims to warn you about deprecated ESLint rules that you might be using in your project.

The rule analyzes your ESLint config, extended config, plugin configs and raises a warning in case there is a deprecated rule for the version of ESLint package that you are using in your project.

You can use this rule to analyze rules declared the following ways:

- `.eslintrc.js`
- `.eslintrc.json`
- `package.json`

Examples of **incorrect** code for this rule:

`array-bracket-newline` is considered deprecated since ESLint v8.53.0 according to [official documentation](https://eslint.org/docs/latest/rules/array-bracket-newline).

```json
{
    "rules": {
        "array-bracket-newline": "error",
        "no-alert": "error"
    }
}
```

Examples of **correct** code for this rule:

```json
{
    "rules": {
        "no-alert": "error"
    }
}
```

## When Not To Use It

If you don't want to be warned about deprecated ESLint rules, then it's safe to disable this rule.
