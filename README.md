A jQuery plugin to use the [HTML5 CheckValidity API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML) from jQuery. Just:

  npm install jquery-html5-validity

Then:

  var $ = require('jquery')
  require("jquery-html5-validity")($);

then you can run:

  $('.some-class').isValid()

  true