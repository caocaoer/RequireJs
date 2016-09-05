/*require.config({
    paths: {
        'jQuery': 'jquery.min',
        'underscore': 'underscore.min',
        'backbone': 'backbone'
    }
});

require.config({
    baseUrl: 'js/lib',
    paths: {
        'jQuery': 'jquery.min',
        'underscore': 'underscore.min',
        'backbone': 'backbone'
    }
});

require(['jquery', 'underscore', 'backbone' ], function($, _, backbone){
    
});*/

require(['test2'], function(test){
    alert(test.sum(4, 6));
});