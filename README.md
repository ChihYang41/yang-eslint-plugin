# eslint-plugin-yanglint

yang&#39;s eslint demo

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-yanglint`:

```
$ npm install eslint-plugin-yanglint --save-dev
```


## Usage

Add `yanglint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "yanglint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "yanglint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





