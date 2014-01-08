require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);

    var imgName = (window.location.search ? window.location.search.replace("?", "") : "feup") + ".png";

    $('#map').error(function() {
        var troll = [
            'try again please',
            'it seems like you are in space or something oO',
            'pfft...like that would work',
            'yeah you think your smart uh Oo',
            'sorry come again oO',
            'what was that oO',
            'wait what oO',
            'yeah pfft',
            'as if',
            'ya think you are gonna get anything from this Oo your wrong... dead wrong! ahah this is hard to read',
            'you are in a somewhat beautiful place filled with rainbows, flowers and daisies... ahah this is hard to read',
            'easter... bacon o.o',
            'dont think about food, dont think about food, dont think about food',
            'carnival!',
            'oh right this should be a map...hm... SIDNEY',
            'turn right on the fire extinguisher and then turn left',
            'you are zooming like a derp, you are zooming like a derp, you are zooming like a derp, you are zooming like a derp, you are zooming like a derp',
            'RIP ' + window.location.search.replace('?', '').toUpperCase(),
            '[map here]',
            'nobody needs to see this',
            'teleporting you to space now... (hope thats ok)',
            'the question is: who are you',
            'can i get you a hot cup of tea oO',
            'geronimoooooooo',
            'marcoooo! poloooo!',
            'wait wait! WHERE ARE YOU GOING!',
            'return whereYouWannaGo;',
            '(°□º)'
        ]

        troll = troll[Math.floor(Math.random() * troll.length)];

        $(this).attr('src', "http://placehold.it/1024x480&text=" + troll)
    })

    
    .attr('src', "images/" + imgName);

});