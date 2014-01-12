require.config({
  paths: {
    foundation: '../bower_components/foundation/js/foundation'
  }
});

require(['jquery', 'foundation'], function(jQuery, foundation) {
  'use strict';
  jQuery = $;

  $(document).foundation();

  return foundation;
});