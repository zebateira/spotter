require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        // svgjs: '../bower_components/svg.js/dist/svg'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'foundation-amd'], function (app, jQuery) {
    'use strict';

    console.log(app);
});