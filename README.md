[![Build Status](https://travis-ci.org/tadashiy1012/resumaker.svg?branch=master)](https://travis-ci.org/tadashiy1012/resumaker)
# resumaker
 Auto create a resume

## Installation
`$ npm install resumaker`

## Example
```JavaScript
const maker = require('resumaker');
maker.make().then((result) => {
  console.log(result); // html data
});
```