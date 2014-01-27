/*global define */
require(['jquery'], function ($) {
    'use strict';

    $('.menu-entry').on('click', function(event) {
      event.preventDefault();
      
      alert('asfd');
    });

    return 'Spotter';
});