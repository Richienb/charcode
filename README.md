# Charcode [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb//master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/charcode)

Get the charcode of a character.

[![NPM Badge](https://nodei.co/npm/charcode.png)](https://npmjs.com/package/charcode)

## Install

```sh
npm install charcode
```

## Usage

```js
const charcode = require("charcode");

charcode("a");
//=> 97

charcode.from(97);
//=> "a"
```

## API

### charcode(input)

#### input

Type: `string`

The character to get the charcode of.

### charcode.from(input)

#### input

Type: `number`

The charcode to get the character of.
